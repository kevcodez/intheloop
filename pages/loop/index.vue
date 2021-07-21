<template>
  <div>
    <div class="flex flex-col space-y-8">
      <div>
        <h2 class="heading">Recent Releases</h2>

        <release-list :releases="releases" />
      </div>

      <div>
        <h2 class="heading">Recent Blog Posts</h2>

        <blog-post-list :blog-posts="blogPosts" />
      </div>

      <div>
        <h2 class="heading">Recent Tweets</h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          <div v-for="tweet in tweets" :key="tweet.id">
            <tweet :tweet="tweet" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useFetch, useStore } from '@nuxtjs/composition-api'
import { SupabaseClient } from '@supabase/supabase-js'
import { computed, defineComponent, inject, ref } from '@vue/composition-api'
import { BlogPost } from '~/lib/Blog'
import { Release, ReleaseInfo } from '~/lib/Topic'
import dayjs from 'dayjs'
import offlineData from '~/offlineData.json'

export default defineComponent({
  setup() {
    const supabase = inject<SupabaseClient>('supabase')!
    const store = useStore()
    const topicIds = store.state.follow.topicIds

    const releases = ref<Release[]>([
      ...offlineData.releases,
      ...offlineData.releases,
    ])
    const blogPosts = ref<BlogPost[]>([
      ...offlineData.blogPosts,
      ...offlineData.blogPosts,
    ])

    const tweets = ref<Object[]>([...offlineData.tweets, ...offlineData.tweets])

    useFetch(async () => {
      /* const { data: releasesFromSupabase } = await supabase
        .from('release')
        .select('*')
        .in('topic', topicIds)
        .gte('published_at', dayjs().subtract(7, 'days'))
        .order('published_at', { ascending: false })

      const { data: blogPostsFromSupabase } = await supabase
        .from('blog_posts')
        .select('*')
        .containedBy('topics', topicIds)
        .gte('published_at', dayjs().subtract(5, 'days'))
        .eq('language', 'en')
        .order('published_at', { ascending: false })*/
      //releases.value = releasesFromSupabase!
      //blogPosts.value = blogPostsFromSupabase!
    })

    return {
      releases,
      blogPosts,
      tweets,
    }
  },
})
</script>

<style lang="scss" scoped>
.heading {
  @apply text-lg tracking-wide font-medium mb-2;
}
</style>
