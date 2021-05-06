<template>
  <div class="space-y-6">
    <tweet v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />

    <loading-indicator v-if="loading" class="py-4 text-gray-800" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useFetch,
  PropType,
  ref,
  useContext,
} from '@nuxtjs/composition-api'
import { Topic } from '@/lib/Topic'

interface TweetsResponse {
  hasMore: boolean
  tweets: any[] // todo type
}

export default defineComponent({
  name: 'Tweets',
  props: {
    topic: Object as PropType<Topic>,
  },
  setup(props: any) {
    const currentPage = ref(0)
    const tweets = ref<any>([])
    const hasMore = ref(true)
    const loading = ref(false)
    const { $http } = useContext()

    useFetch(async () => {
      currentPage.value++

      loading.value = true

      const response = await $http.$get<TweetsResponse>(
        `https://europe-west1-intheloop-dev.cloudfunctions.net/getTweetsByTopic?topic=${props.topic.id}&page=${currentPage.value}`
      )

      loading.value = false

      tweets.value = tweets.value.concat(response.tweets)
      hasMore.value = response.hasMore
    })

    return {
      tweets,
      hasMore,
      loading,
    }
  },
})
</script>
