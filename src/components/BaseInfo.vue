<template>
  <div class="grid grid-cols-3 gap-14">
    <div class="col-span-2">
      <div class="flex flex-row items-center">
        <img :src="info.logo" class="h-16 w-16" />
        <h1 class="ml-5 text-5xl font-semibold tracking-wide">
          {{ info.name }}
        </h1>
      </div>

      <div class="space-x-1 space-y-2 mt-4">
        <a
          class="rounded inline-block px-2 py-1 bg-indigo-100"
          v-for="tag in info.tags"
          :key="tag"
        >
          {{ tag }}
        </a>
      </div>

      <p class="mt-4 text-base">
        {{ info.description }}
      </p>
    </div>

    <div>
      <div class="flex space-y-2 flex-col items-center">
        <a
          class="cursor-pointer grow"
          :href="info.latestRelease.releaseNotesUrl"
          target="_blank"
        >
          <span class="px-3 py-2 bg-indigo-500 text-white">{{
            info.latestRelease.version
          }}</span>
          <span class="px-3 py-2 bg-gray-700 text-gray-50">Current</span>
        </a>
        <span>Published {{ info.latestRelease.publishedAt }}</span>
      </div>
      <div class="grid grid-cols-2 gap-8 mt-4">
        <div class="space-y-1">
          <div class="flex flex-row">
            <img src="/@/assets/icons/github.svg" class="h-5 w-5 mr-2" />
            <a :href="info.scm.url" target="_blank">{{
              info.scm.displayName
            }}</a>
          </div>

          <div class="flex flex-row">
            <img src="/@/assets/icons/link.svg" class="h-5 w-5 mr-2" />
            <a :href="info.website" target="_blank">Official Website</a>
          </div>

          <div class="flex flex-row">
            <img src="/@/assets/icons/link.svg" class="h-5 w-5 mr-2" />
            <a :href="info.documentation" target="_blank">Documentation</a>
          </div>

          <div class="flex flex-row">
            <img src="/@/assets/icons/link.svg" class="h-5 w-5 mr-2" />
            <a :href="info.issueTracker" target="_blank">Issue Tracker</a>
          </div>

          <div class="flex flex-row">
            <img src="/@/assets/icons/play-line.svg" class="h-5 w-5 mr-2" />
            <a :href="info.playground" target="_blank">Playground</a>
          </div>
        </div>
        <div class="space-y-2">
          <a
            class="flex flex-row"
            :href="social.url"
            v-for="social in info.social"
            :key="social.url"
          >
            <img
              v-if="social.type === 'Twitter'"
              src="/@/assets/icons/twitter.svg"
              class="h-6 w-6"
            />
            <img
              v-else-if="social.type === 'Youtube'"
              src="/@/assets/icons/youtube.svg"
              class="h-6 w-6"
            />
            <span class="ml-2">{{ social.label }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Topic } from "../lib/Topic";

export default defineComponent({
  name: "BaseInfo",
  props: {
    info: {
      type: Object as PropType<Topic>,
      required: true,
    },
  },
});
</script>