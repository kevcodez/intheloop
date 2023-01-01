<template>
  <div class="space-y-6">
    <div class="tweets" v-if="!pending">
      <div class="tweet" v-for="tweet in data.tweets" :key="tweet.id">
        <tweet :tweet="tweet" />
      </div>

    </div>

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

watch(
  pending,
  async () => {
    await nextTick();
    resizeAllGridItems();
  },
  { deep: true }
);

function resizeGridItem(item: any) {
  const grid = document.getElementsByClassName("tweets")[0];
  const rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  );
  const rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  );
  const rowSpan = Math.ceil(
    (item.children[0].getBoundingClientRect().height + rowGap) /
    (rowHeight + rowGap)
  );
  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
  const allItems = document.getElementsByClassName("tweet");
  console.log(allItems.length)
  for (let x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}

onMounted(() => {
  window.addEventListener("resize", resizeAllGridItems);
  resizeAllGridItems()
})
</script>

<style>
.tweets {
  display: grid;
  grid-gap: 20px;

  @screen sm {
    grid-auto-rows: 5px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @screen md {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}
</style>