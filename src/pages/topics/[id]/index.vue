<template>
  <div class="space-y-6">
    <tweet
      v-for="tweet in tweets"
      :key="tweet.id"
      :tweet="tweet"
    />

    <loading-indicator v-if="loading" class="py-4 text-gray-800" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from "vue";
import { Topic } from "@/lib/Topic";
import ky from "ky";

export default defineComponent({
  name: "Tweets",
  props: {
    topic: Object as PropType<Topic>,
  },
  setup(props: any) {
    const currentPage = ref(0);
    const tweets = ref<any>([]);
    const hasMore = ref(true);
    const loading = ref(false);

    const fetchTweets = async () => {
      currentPage.value++;

      loading.value = true;

      const response = await ky
        .get(
          `https://europe-west1-intheloop-dev.cloudfunctions.net/getTweetsByTopic?topic=${props.topic.id}&page=${currentPage.value}`
        )
        .json<any>();

      loading.value = false;

      tweets.value = tweets.value.concat(response.tweets);
      hasMore.value = response.hasMore;
    };

    onMounted(fetchTweets);

    return {
      tweets,
      fetchTweets,
      hasMore,
      loading,
    };
  },
});
</script>