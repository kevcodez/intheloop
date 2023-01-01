<template>
  <div class="flex space-y-2 mt-4 flex-col items-center">
    <div class="flex flex-row" v-if="topic.info.latestVersion">
      <span class="px-3 py-2 bg-indigo-500 text-white" :style="`background-color: ${topic.info.color}`">{{
          topic.info.latestVersion
      }}</span>
      <span class="px-3 py-2 bg-gray-700 text-gray-50">
        {{ $relativeDate(topic.latestrelease.publishedAt) }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Topic } from "@/lib/Topic";
import { PropType } from "vue";
import ApacheMavenIcon from "~/assets/icons/apachemaven.svg?component";
import NpmIcon from "~/assets/icons/npm.svg?component";
import ScaleIcon from "~/assets/icons/scale.svg?component";

const props = defineProps({
  topic: {
    type: Object as PropType<Topic>,
    required: true
  }
})
</script>
