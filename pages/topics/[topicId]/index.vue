<template>
  <div class="space-y-6">
    <tweet v-if="!pending" v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />

    <loading-indicator v-if="pending" class="py-4 text-gray-800" />
  </div>
</template>

<script lang="ts" setup>
import { Topic } from '@/lib/Topic'
import { PropType } from 'vue'

export interface TweetsResponse {
  hasMore: boolean
  tweets: any[] // todo type
}

const props = defineProps({
  topic: {
    type: Object as PropType<Topic>,
    required: true
  }
})

const currentPage = ref(0)
const hasMore = ref(true)
const tweets = ref([])

const { pending } = useLazyAsyncData('topic', async () => {
  currentPage.value++

  const { data } = await useFetch(
    `https://europe-west1-intheloop-d4940.cloudfunctions.net/getTweetsByTopic?topic=${props.topic.id}&page=${currentPage.value}`
  )

  hasMore.value = data.value.hasMore
  tweets.value = tweets.value.concat(data.value.tweets)

  return data.value
})
</script>
