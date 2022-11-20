<template>
  <div v-if="topic" class="mt-8">
    <topic-base-info class="container" :topic="topic" />

    <div class="mt-3 h-3 w-full" :style="`background-color: ${topic.info.color}`" />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 container mt-4">
      <div class="col-span-2 order-2 lg:order-1">
        <topic-nav :topic="topic" />

        <NuxtPage class="pt-10" :topic="topic" />
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

<script lang="ts" setup>
import { Topic } from '@/lib/Topic'
import { Newsletter } from '@/lib/Newsletter'
import { Podcast } from '@/lib/Podcast'
import { Community } from '@/lib/Community'
import { Blog } from '@/lib/Blog'

useHead(() => {
  if (topic.value) {
    const description = `Stay in the loop with ${topic.value.info.name} - Latest releases, popular tweets, blog posts, communities to engage with and much more`

    return {
      title: `Follow ${topic.value.info.name} - intheloop`,
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
})

const route = useRoute()
const supabase = useSupabaseClient()
const topicId = route.params.topicId

const topic = ref<Topic | null>(null)
const newsletters = ref<Newsletter[]>([])
const podcasts = ref<Podcast[]>([])
const communities = ref<Community[]>([])
const blogs = ref<Blog[]>([])

// TODO handle 404
useAsyncData('topic', async () => {
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
</script>

<style scoped>
.container {
  @apply mx-auto max-w-7xl px-4;
}
</style>
