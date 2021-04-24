<template>
  <div class="flex space-y-2 mt-4 flex-col items-center">
    <div class="flex flex-row" v-if="topic.info.latestVersion">
      <span
        class="px-3 py-2 bg-indigo-500 text-white"
        :style="`background-color: ${topic.info.color}`"
        >{{ topic.info.latestVersion }}</span
      >
      <span class="px-3 py-2 bg-gray-700 text-gray-50">
        {{ topic.latestrelease.publishedAt | relative }}</span
      >
    </div>
    <div class="pt-2 flex flex-row space-x-3">
      <a
        v-if="topic.info.license"
        :href="topic.info.license.url"
        target="_blank"
        class="flex flex-row text-sm space-x-2 grow"
      >
        <scale-icon class="w-6 h-6" />
        <span>{{ topic.info.license.name }}</span>
      </a>
      <a
        :href="badge.url"
        target="_blank"
        v-for="badge in topic.info.badges"
        :key="badge.url"
      >
        <npm-icon v-if="badge.type === 'NPM'" class="grow h-6 w-6" />

        <apache-maven-icon
          v-else-if="badge.type === 'MavenCentral'"
          class="grow h-6 w-6"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Topic } from "@/lib/Topic";
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import ApacheMavenIcon from "../assets/icons/apachemaven.svg?inline";
import NpmIcon from "../assets/icons/npm.svg?inline";
import ScaleIcon from "../assets/icons/scale.svg?inline";

export default defineComponent({
  components: {
    ApacheMavenIcon,
    NpmIcon,
    ScaleIcon,
  },
  props: {
    topic: Object as PropType<Topic>,
  }
});
</script>
