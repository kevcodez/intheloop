<template>
  <div>
    <h3 class="font-medium text-xl">Communities &amp; Help</h3>
    <div class="space-y-2 mt-4">
      <div
        class="flex flex-row justify-between"
        v-for="community in communities"
        :key="community.url"
      >
        <div class="flex flex-row">
          <reddit-icon class="h-6 w-6" v-if="community.type === 'Reddit'" />

          <discord-icon
            class="h-6 w-6"
            v-else-if="community.type === 'Discord'"
          />

          <stackoverflow-icon
            class="h-6 w-6"
            v-else-if="community.type === 'Stackoverflow'"
          />

          <linked-in-icon
            class="h-6 w-6"
            v-else-if="community.type === 'LinkedIn'"
          />

           <github-icon
            class="h-6 w-6"
            v-else-if="community.type === 'Github'"
          />

          <slack-icon class="h-6 w-6" v-else-if="community.type === 'Slack'" />

          <link-icon class="h-6 w-6" v-else />

          <a :href="community.url" class="ml-2">{{ community.name }}</a>
        </div>

        <span
          class="text-xs bg-gray-200 ml-2 px-2 py-1"
          v-if="community.official"
          >Official</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Community } from "../lib/Community";
import RedditIcon from "../assets/icons/reddit.svg";
import DiscordIcon from "../assets/icons/discord.svg";
import StackoverflowIcon from "../assets/icons/stackoverflow.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import SlackIcon from "../assets/icons/slack.svg";
import LinkIcon from "../assets/icons/link.svg";
import GithubIcon from "../assets/icons/github.svg";

export default defineComponent({
  name: "Communities",
  components: {
    RedditIcon,
    DiscordIcon,
    StackoverflowIcon,
    LinkedInIcon,
    SlackIcon,
    LinkIcon,
    GithubIcon,
  },
  props: {
    communities: {
      type: Object as PropType<Community[]>,
      required: true,
    },
  },
});
</script>