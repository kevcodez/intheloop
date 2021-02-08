<template>
  <div>
    <h3 class="font-semibold text-xl">Newsletters</h3>
    <div class="space-y-2 mt-4">
      <a
        :href="newsletter.url"
        target="_blank"
        class="justify-between"
        v-for="newsletter in newsletters"
        :key="newsletter.url"
      >
        <div class="flex flex-row">
          <img class="h-6 w-6 mr-2" src="/@/assets/icons/mail-line.svg" />

          <span>{{ newsletter.name }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Newsletter } from "../lib/Newsletter";

export default defineComponent({
  name: "Newsletters",
  props: {
    newsletters: {
      type: Object as PropType<Newsletter[]>,
      required: true,
    },
  },
});
</script>