<template>
  <h3 class="font-semibold text-xl">Communities &amp; Help</h3>
  <div class="space-y-2 mt-4">
    <div
      class="flex flex-row  justify-between"
      v-for="community in communities"
      :key="community.url"
    >
      <div class="flex flex-row">
        <img
          class="h-6 w-6"
          src="/@/assets/icons/reddit.svg"
          v-if="community.type === 'Reddit'"
        />

        <img
          class="h-6 w-6"
          src="/@/assets/icons/discord.svg"
          v-else-if="community.type === 'Discord'"
        />

        <img
          class="h-6 w-6"
          src="/@/assets/icons/stackoverflow.svg"
          v-else-if="community.type === 'Stackoverflow'"
        />

        <img
          class="h-6 w-6"
          src="/@/assets/icons/linkedin.svg"
          v-else-if="community.type === 'LinkedIn'"
        />

        <img
          class="h-6 w-6"
          src="/@/assets/icons/slack.svg"
          v-else-if="community.type === 'Slack'"
        />

        <img class="h-6 w-6" src="/@/assets/icons/link.svg" v-else />

        <a :href="community.url" class="ml-2">{{ community.name }}</a>
      </div>

      <span class="text-xs bg-gray-200 ml-2 px-2 py-1" v-if="community.official"
        >Official</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Communities",
  props: {
    communities: {
      type: Array,
      required: true,
    },
  },
});
</script>