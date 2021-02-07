<template>
  <div>
    <h3 class="font-semibold text-xl">Podcasts</h3>
    <div class="space-y-2 mt-4">
      <div
        class="flex flex-row justify-between"
        v-for="podcast in podcasts"
        :key="podcast.url"
      >
        <div class="flex flex-row">
          <img class="h-6 w-6 mr-2" src="/@/assets/icons/mic-line.svg" />

          <span>{{ podcast.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Newsletters",
  props: {
    podcasts: {
      type: Array,
      required: true,
    },
  },
});
</script>