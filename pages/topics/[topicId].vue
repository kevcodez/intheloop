<template>
  <loading-indicator v-if="loadingTopic" />
  <div v-else-if="fullTopic.topic" class="mt-8">
    <topic-base-info class="page-container" :topic="fullTopic.topic" />

    <div class="mt-3 h-3 w-full" :style="`background-color: ${fullTopic.topic.info.color}`" />

    <div class="page-container mt-4">
      <div class="col-span-2 order-2 lg:order-1">
        <topic-nav :topic="fullTopic.topic" />

        <NuxtPage class="pt-10" :topic="fullTopic.topic" />
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
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
.page-container {
  @apply mx-auto max-w-7xl 2xl:max-w-[110rem] px-4;
}
</style>
