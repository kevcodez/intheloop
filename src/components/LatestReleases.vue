<template>
  <div>
    <div class="grid md:grid-cols-2 gap-8">
      <div v-for="release in releases" :key="release.version">
        <div class="flex justify-between">
          <div
            target="_blank"
            class="flex flex-row"
          >
            <tag-icon class="h-6 w-6" :style="`color: ${topic.info.color}`" />
            <span class="ml-2">{{ release.version }}</span>
          </div>
          <div>
            <span class="text-xs">{{
              $filters.relative(release.publishedAt)
            }}</span>
          </div>
        </div>
        <div class="mt-2" v-if="release.releaseNotesUrl">
          <a :href="release.releaseNotesUrl" target="_blank">View Changelog </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Release, Topic } from "../lib/Topic";
import TagIcon from "../assets/icons/tag.svg";

export default defineComponent({
  name: "LatestReleases",
  components: {
    TagIcon,
  },
  props: {
    topic: {
      type: Object as PropType<Topic>,
      required: true
    },
    releases: {
      type: Object as PropType<Release[]>,
      required: true,
    },
  },
});
</script>