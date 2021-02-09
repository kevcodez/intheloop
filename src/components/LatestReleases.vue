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
          <tag-icon class="h-6 w-6" />
          <span class="ml-2">{{ release.version }}</span>
        </div>
        <span class="text-xs">{{
          $filters.relative(release.publishedAt)
        }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Release } from "../lib/Topic";
import TagIcon from "../assets/icons/tag.svg";

export default defineComponent({
  name: "LatestReleases",
  components: {
    TagIcon,
  },
  props: {
    releases: {
      type: Object as PropType<Release[]>,
      required: true,
    },
  },
});
</script>