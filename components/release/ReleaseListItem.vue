<template>
  <div>
    <div class="flex justify-between mb-3">
      <nuxt-link :to="`/topics/${release.topic}`" class="flex items-center hover:text-gray-700">
        <img :src="release.topic_info.logo" class="h-8 w-8 object-contain mr-3" />
        <span>{{ release.topic_info.name }}</span>
      </nuxt-link>

      <div>
        <span class="ml-2">{{ release.info.version }}</span>
        <!-- idea: special badge for major/minor/patch? -->
      </div>
    </div>
    <div class="flex justify-between">
      <div>
        <div v-if="release.info.releaseNotesUrl" class="flex items-center text-sm">
          <a :href="release.info.releaseNotesUrl" target="_blank" class="hover:text-indigo-800">View Changelog</a>
        </div>
      </div>
      <span class="text-xs">{{ $relativeDate(release.info.publishedAt) }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { ReleaseWithTopic } from '~/lib/Topic'

const props = defineProps({
  release: {
    required: true,
    type: Object as PropType<ReleaseWithTopic>,
  },
})
</script>
