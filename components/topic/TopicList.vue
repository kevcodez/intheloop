<template>
  <div>
    <div class="grid md:grid-cols-3 gap-4 md:gap-8">
      <NuxtLink :to="`/topics/${topic.id}`"
        class="relative rounded-lg border border-gray-300 bg-white px-4 py-5 shadow-sm flex flex-col items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        v-for="topic in topics" :key="topic.id">
        <div class="grid justify-items-center w-full" style="grid-template-columns: 1fr repeat(1, auto) 1fr">
          <img :src="topic.info.logo" class="h-10 col-start-2" />

          <!-- <follow-button class="ml-auto" :topic-id="topic.id" /> -->
        </div>
        <p class="mt-4 text-base">
          {{ topic.info.shortDescription }}
        </p>

        <div class="w-full h-2 absolute bottom-0 -left-3 opacity-80 rounded-b-lg"
          :style="`background-color: ${topic.info.color}`"></div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Topic } from '~/lib/Topic'
import { PropType } from 'vue';

const props = defineProps({
  topics: {
    type: Array as PropType<Topic[]>,
    required: true,
  },
})
</script>