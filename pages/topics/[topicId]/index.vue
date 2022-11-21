<template>
  <div class="space-y-6">
    <tweet v-if="!pending" v-for="tweet in data.tweets" :key="tweet.id" :tweet="tweet" />

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

const { pending, data } = useAsyncData('tweets', async () => {
  currentPage.value++

  const response = await fetch(
    `https://europe-west1-intheloop-d4940.cloudfunctions.net/getTweetsByTopic?topic=${props.topic.id}&page=${currentPage.value}`
  )

  const body = await response.json()

  return body
})
</script>
