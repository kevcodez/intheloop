<template>
  <div>
    <div class="grid md:grid-cols-2 gap-8">
      <div v-for="release in topic.releases" :key="release.version">
        <div class="flex justify-between">
          <div
            target="_blank"
            class="flex flex-row text-gray-800 font-medium tracking-wide"
          >
            <tag-icon class="h-6 w-6 " />
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
      required: true
    }
  },
});
</script>