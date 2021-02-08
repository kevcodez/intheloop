<template>
  <div>
       <h3 class="text-2xl mb-2">Latest Releases</h3>
       <div class="grid grid-cols-3">
    <a
      :href="release.releaseNotesUrl"
      target="_blank"
      v-for="release in releases"
      :key="release.version"
      class="grow"
    >
      <div class="flex flex-row">
        <img src="/@/assets/icons/tag.svg" class="h-6 w-6" />
        <span class="ml-2">{{ release.version }}</span>
      </div>
        <span class="text-xs">12 days ago</span>

    </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Release } from "../lib/Topic";

export default defineComponent({
  name: "LatestReleases",
  props: {
    releases: {
      type: Object as PropType<Release[]>,
      required: true,
    },
  },
});
</script>