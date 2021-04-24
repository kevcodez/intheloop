<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-14">
    <div class="col-span-2">
      <div class="flex flex-row items-center">
        <img :src="topic.info.logo" class="h-16 w-16 object-contain" />
        <h1 class="ml-5 text-5xl font-bold tracking-wide">
          {{ topic.info.name }}
        </h1>
      </div>

      <div class="space-x-1 space-y-2 mt-4">
        <span
          class="rounded inline-block px-2 py-1 bg-indigo-100"
          v-for="tag in topic.info.tags"
          :key="tag"
        >
          {{ tag }}
        </span>
      </div>

      <p class="mt-4 text-base whitespace-pre-line">
        {{ topic.info.description }}
      </p>
    </div>

    <div class="flex flex-col items-center justify-center">
      <topic-developers :developers="topic.developers" />
      <topic-latest-release-and-badges class="mt-8" :topic="topic" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Topic } from '../lib/Topic'

export default defineComponent({
  name: 'BaseInfo',
  props: {
    topic: {
      type: Object as PropType<Topic>,
      required: true,
    },
  },
})
</script>
