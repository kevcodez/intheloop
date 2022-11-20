<template>
  <div>
    <div class="grid md:grid-cols-2 gap-8">
      <div v-for="release in releases" :key="release.version">
        <div class="flex justify-between">
          <div target="_blank" class="flex flex-row">
            <tag-icon class="h-6 w-6" :style="`color: ${topic.info.color}`" />
            <span class="ml-2">{{ release.version }}</span>
          </div>
          <div>
            <span class="text-xs">{{
                $relativeDate(release.publishedAt)
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

<script lang="ts" setup>
import { ReleaseInfo, Topic } from "~/lib/Topic";
import TagIcon from "~/assets/icons/tag.svg?component";
import { PropType } from "vue";

const props = defineProps({
  topic: {
    type: Object as PropType<Topic>,
    required: true
  },
  releases: {
    type: Array as PropType<ReleaseInfo[]>,
    required: true,
  },
})
</script>