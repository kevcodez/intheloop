<template>
  <div>
    <div v-if="hasTopics">
      <div class="flex flex-col space-y-8">
        <div>
          <h2 class="heading">Recent Releases</h2>

          <span v-if="!releases.length">No recent releases.</span>

          <release-list v-else :releases="releases" />
        </div>

        <div>
          <h2 class="heading">Recent Blog Posts</h2>

          <span v-if="!blogPosts.length">No recent blog posts.</span>

          <blog-post-list v-else :blog-posts="blogPosts" />
        </div>

        <div>
          <h2 class="heading">Recent Tweets</h2>

          <span v-if="!tweets.length">No recent tweets.</span>

          <div
            v-else
            class="flex flex-wrap flex-col" :style="`height: ${tweets.length * 8}em`">
            <div v-for="tweet in tweets" :key="tweet.id" class="md:w-1/2 lg:w-1/3 mb-4 mr-4">
              <tweet :tweet="tweet" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      You have not followed any topics yet. Start following topics to see an
      overview.
    </div>
  </div>
</template>

<script lang="ts">
import { useContext, useFetch, useStore } from '@nuxtjs/composition-api'
import { SupabaseClient } from '@supabase/supabase-js'
import { defineComponent, inject, ref } from '@vue/composition-api'
import { BlogPost } from '~/lib/Blog'
import { ReleaseWithTopic } from '~/lib/Topic'
import dayjs from 'dayjs'
import { TweetsResponse } from '../topics/_topicId/index.vue'

export default defineComponent({
  setup() {
    const supabase = inject<SupabaseClient>('supabase')!
    const store = useStore()
    const { $http } = useContext()
    const topicIds = store.state.follow.topicIds

    const releases = ref<ReleaseWithTopic[]>([])
    const blogPosts = ref<BlogPost[]>([])

    const tweets = ref<Object[]>([])

    useFetch(async () => {
      if (!topicIds.length) return

      const { data: releasesFromSupabase } = await supabase
        .from('vw_releases')
        .select(`*`)
        .in('topic', topicIds)
        .gte('published_at', dayjs().subtract(7, 'days'))
        .order('published_at', { ascending: false })
        .limit(40)

      const { data: blogPostsFromSupabase, error } = await supabase
        .from('vw_topic_blog_posts')
        .select('*')
        .in('topic_id', topicIds)
        .gte('published_at', dayjs().subtract(5, 'days'))
        .eq('language', 'en')
        .order('published_at', { ascending: false })
        .limit(20)

      const tweetsResponse = await $http.$get<TweetsResponse>(
        `https://europe-west1-intheloop-d4940.cloudfunctions.net/getTweetsByTopic?topic=${topicIds.join(
          ','
        )}&page=1`
      )

      tweets.value = tweetsResponse.tweets
      releases.value = releasesFromSupabase!
      blogPosts.value = blogPostsFromSupabase!
    })

    return {
      releases,
      blogPosts,
      tweets,
      hasTopics: topicIds.length !== 0,
    }
  },
})
</script>

<style lang="scss" scoped>
.heading {
  @apply text-lg tracking-wide font-medium mb-2;
}
</style>
