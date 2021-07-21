<template>
  <div>
    <div class="flex justify-between mb-3">
      <nuxt-link :to="`/topics/${release.info.topic}`" class="flex items-center hover:text-gray-700">
        <img :src="release.info.logo" class="h-8 w-8 object-contain mr-3" />
        <span>{{ release.info.name }}</span>
      </nuxt-link>

      <div>
        <span class="ml-2">{{ release.info.version }}</span>
        <!-- idea: special badge for major/minor/patch? -->
      </div>
    </div>
    <div class="flex justify-between">
      <div>
        <div
          v-if="release.info.releaseNotesUrl"
          class="flex items-center text-sm"
        >
          <file-list-icon class="h-5 w-5 mr-2" />
          <a :href="release.info.releaseNotesUrl" target="_blank" class="hover:text-indigo-800"
            >View Changelog</a
          >
        </div>
      </div>
      <span class="text-xs">{{ release.info.publishedAt | relative }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Release } from '~/lib/Topic'
import FileListIcon from '~/assets/icons/file-list.svg?inline'

export default defineComponent({
  components: {
    FileListIcon,
  },
  props: {
    release: {
      required: true,
      type: Object as PropType<Release>,
    },
  },
})
</script>
