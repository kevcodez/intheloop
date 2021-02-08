<template>
  <div>
    <h3 class="font-semibold text-xl">Podcasts</h3>
    <div class="space-y-2 mt-4">
      <a
        :href="podcast.url"
        target="_blank"
        class="flex flex-row justify-between"
        v-for="podcast in podcasts"
        :key="podcast.url"
      >
        <div class="flex flex-row">
          <img class="h-6 w-6 mr-2" src="/@/assets/icons/mic-line.svg" />

          <span>{{ podcast.name }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Podcast } from "../lib/Podcast";

export default defineComponent({
  name: "Podcasts",
  props: {
    podcasts: {
      type: Object as PropType<Podcast[]>,
      required: true,
    },
  },
});
</script>