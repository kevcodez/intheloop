<template>
  <loading-indicator v-if="loadingTopic" />
  <div v-else-if="fullTopic.topic" class="mt-8">
    <topic-base-info class="container" :topic="fullTopic.topic" />

    <div class="mt-3 h-3 w-full" :style="`background-color: ${fullTopic.topic.info.color}`" />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 container mt-4">
      <div class="col-span-2 order-2 lg:order-1">
        <topic-nav :topic="fullTopic.topic" />

        <NuxtPage class="pt-10" :topic="fullTopic.topic" />
      </div>

      <div class="order-1 lg:order-2">
        <topic-quick-links :topic="fullTopic.topic" />

        <topic-communities class="mt-8" :communities="fullTopic.communities" />

        <topic-blogs class="mt-8" :blogs="fullTopic.blogs" />

        <h3 class="font-medium text-xl mt-8" v-if="fullTopic.newsletters.length || fullTopic.podcasts.length">
          Newsletters &amp; Podcasts
        </h3>
        <topic-newsletters :newsletters="fullTopic.newsletters" />

        <topic-podcasts :podcasts="fullTopic.podcasts" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Newsletter } from '@/lib/Newsletter'
import { Podcast } from '@/lib/Podcast'
import { Community } from '@/lib/Community'
import { Blog } from '@/lib/Blog'
import { Database } from '~/lib/database.types';

const route = useRoute()
const supabase = useSupabaseClient<Database>()
const topicId = route.params.topicId

// TODO handle 404
const { data: fullTopic, pending: loadingTopic } = useAsyncData('topic', async () => {
  const { data } = await supabase
    .from('vw_topic_overview')
    .select('*')
    .eq('id', topicId)
    .single()

  return {
    topic: data,
    podcasts: (data!.podcasts || []).filter((it) => it) || [],
    newsletters: (data!.newsletters || []).filter((it) => it).sort((a, b) => Number(b.official) - Number(a.official)),
    blogs: (data!.blogs || []).filter((it) => it).sort((a, b) => Number(b.official) - Number(a.official)),
    communities: (data!.communities || []).filter((it) => it).sort((a, b) => Number(b.official) - Number(a.official))
  }
})

useHead(() => {
  if (fullTopic?.value?.topic) {
    const description = `Stay in the loop with ${fullTopic.value.topic.info.name} - Latest releases, popular tweets, blog posts, communities to engage with and much more`

    return {
      title: `Follow ${fullTopic.value.topic.info.name} - intheloop`,
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
</script>

<style scoped>
.container {
  @apply mx-auto max-w-7xl px-4;
}
</style>
