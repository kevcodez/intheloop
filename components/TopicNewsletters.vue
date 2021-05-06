<template>
  <div v-if="newsletters && newsletters.length">
    <div class="space-y-2 mt-4">
      <a
        :href="newsletter.url"
        target="_blank"
        class="justify-between"
        v-for="newsletter in newsletters"
        :key="newsletter.url"
      >
        <div class="flex flex-row">
          <mail-icon class="h-6 w-6 mr-2" />

          <span>{{ newsletter.name }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import { NewsletterInfo } from "../lib/Newsletter";
import MailIcon from "../assets/icons/mail.svg?inline";

export default defineComponent({
  name: "Newsletters",
  components: {
    MailIcon,
  },
  props: {
    newsletters: {
      type: Array as PropType<NewsletterInfo[]>,
      required: true,
    },
  },
});
</script>