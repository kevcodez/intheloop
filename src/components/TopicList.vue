<template>
  <div>
    <p class="text-2xl tracking-wide font-medium mb-6">Discover topics</p>
    <div class="grid md:grid-cols-2 gap-4 md:gap-12">
      <router-link
        :to="`/topics/${topic.id}`"
        class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        v-for="topic in topics"
        :key="topic.id"
      >
        <div class="flex-1 min-w-0">
          <div class="flex flex-row justify-center items-center">
            <img :src="topic.info.logo" class="h-8 w-8" />
            <h1 class="ml-5 text-2xl font-semibold tracking-wide">
              {{ topic.info.name }}
            </h1>
          </div>
          <p class="mt-4 text-base">
            {{ topic.info.shortDescription }}
          </p>

        </div>

        <div
          class="w-full h-2 absolute bottom-0 -left-3 opacity-50 rounded-b-lg"
          :style="`background-color: ${topic.info.color}`"
        ></div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Topic } from "@/lib/Topic";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    topics: {
      type: Object as PropType<Topic[]>,
      required: true,
    },
  },
});
</script>