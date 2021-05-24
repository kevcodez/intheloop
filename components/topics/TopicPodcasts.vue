<template>
  <div v-if="podcasts && podcasts.length">
    <div class="space-y-2 mt-4">
      <a
        :href="podcast.url"
        target="_blank"
        class="flex flex-row justify-between"
        v-for="podcast in podcasts"
        :key="podcast.url"
      >
        <div class="flex flex-row">
          <mic-line-icon class="h-6 w-6 mr-2" />

          <span>{{ podcast.name }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import { PodcastInfo } from "~/lib/Podcast";
import MicLineIcon from '~/assets/icons/mic-line.svg?inline'

export default defineComponent({
  name: "Podcasts",
  components: {
    MicLineIcon
  },
  props: {
    podcasts: {
      type: Array as PropType<PodcastInfo[]>,
      required: true,
    },
  },
});
</script>