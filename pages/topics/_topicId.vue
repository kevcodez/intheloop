<template>
  <div v-if="topic" class="mt-8">
    <topic-base-info class="container" :topic="topic" />

    <div style="height: 150px; overflow: hidden" class="mt-5">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%">
        <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          :style="`stroke: none; fill: ${topic.info.color}`"></path>
      </svg>
    </div>
    <div style="height: 100px; overflow: hidden">
      <svg viewBox="0 0 500 100" preserveAspectRatio="none" style="height: 100%; width: 100%">
        <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,-150.00 L0.00,-150.00 Z"
          :style="`stroke: none; fill: ${topic.info.color}`"></path>
      </svg>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 container mt-8 sm:mt-16">
      <div class="col-span-2 order-2 lg:order-1">
        <topic-nav :topic="topic" />

        <nuxt-child class="pt-10" :topic="topic" />
      </div>

      <div class="order-1 lg:order-2">
        <topic-quick-links :topic="topic" />

        <topic-communities class="mt-8" :communities="communities" />

        <topic-blogs class="mt-8" :blogs="blogs" />

        <h3 class="font-medium text-xl mt-8" v-if="newsletters.length || podcasts.length">
          Newsletters &amp; Podcasts
        </h3>
        <topic-newsletters :newsletters="newsletters" />

        <topic-podcasts :podcasts="podcasts" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useRoute,
  inject,
  useFetch,
} from '@nuxtjs/composition-api'
import { Topic } from '@/lib/Topic'
import { Newsletter } from '@/lib/Newsletter'
import { Podcast } from '@/lib/Podcast'
import { Community } from '@/lib/Community'
import { Blog } from '@/lib/Blog'
import { SupabaseClient } from '@supabase/supabase-js'

export default defineComponent({
  head() {
    if (this.topic) {
      const description = `Stay in the loop with ${this.topic.info.name} - Latest releases, popular tweets, blog posts, communities to engage with and much more`

      return {
        title: `Follow ${this.topic.info.name} - intheloop`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: description,
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: description,
          },
        ],
      }
    } else {
      return {}
    }
  },
  setup() {
    const route = useRoute()
    const supabase = inject<SupabaseClient>('supabase')!
    const topicId = route.value.params.topicId

    const topic = ref<Topic | null>(null)
    const newsletters = ref<Newsletter[]>([])
    const podcasts = ref<Podcast[]>([])
    const communities = ref<Community[]>([])
    const blogs = ref<Blog[]>([])

    // TODO handle 404
    useFetch(async () => {
      const { data, error } = await supabase
        .from('vw_topic_overview')
        .select('*')
        .eq('id', topicId)
        .single()

      topic.value = data

      if (data.podcasts) {
        podcasts.value = data.podcasts.filter((it: Podcast) => it) || []
      }
      if (data.newsletters) {
        newsletters.value =
          (data.newsletters.filter((it: Newsletter) => it) || []).sort((a, b) => Number(b.official) - Number(a.official))
      }
      if (data.blogs) {
        blogs.value = (data.blogs.filter((it: Blog) => it) || []).sort((a, b) => Number(b.official) - Number(a.official))
      }
      if (data.communities) {
        communities.value = (data.communities.filter((it: Community) => it) || []).sort((a, b) => Number(b.official) - Number(a.official))
      }
    })

    return {
      topic,
      podcasts,
      newsletters,
      blogs,
      communities,
    }
  },
})
</script>

<style scoped>
.container {
  @apply mx-auto max-w-7xl px-4;
}
</style>
