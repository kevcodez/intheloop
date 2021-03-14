<template>
  <div>
    <div class="grid gap-8 md:grid-cols-2">
      <div v-for="release in topic.releases" :key="release.version">
        <div class="flex justify-between">
          <div class="flex flex-row font-medium tracking-wide text-gray-800">
            <tag-icon class="w-6 h-6" />
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
import { Topic } from "@/lib/Topic";
import TagIcon from "@/assets/icons/tag.svg";

export default defineComponent({
  name: "LatestReleases",
  components: {
    TagIcon,
  },
  props: {
    topic: {
      type: Object as PropType<Topic>,
      required: true,
    },
  },
});
</script>
