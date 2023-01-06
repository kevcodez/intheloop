<template>
  <div class="flex flex-row space-x-3">
    <div v-for="community in communities" :key="community.url">
      <div class="flex flex-row">
        <reddit-icon class="h-6 w-6" v-if="community.type === 'Reddit'" />

        <discord-icon class="h-6 w-6" v-else-if="community.type === 'Discord'" />

        <stackoverflow-icon class="h-6 w-6" v-else-if="community.type === 'Stackoverflow'" />

        <linked-in-icon class="h-6 w-6" v-else-if="community.type === 'LinkedIn'" />

        <github-icon class="h-6 w-6" v-else-if="community.type === 'Github'" />

        <gitter-icon class="h-6 w-6" v-else-if="community.type === 'Gitter'" />

        <slack-icon class="h-6 w-6" v-else-if="community.type === 'Slack'" />

        <link-icon class="h-6 w-6" v-else />

        <a :href="community.url" class="ml-2">{{ community.name }}</a>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { CommunityInfo } from "~/lib/Community";
import RedditIcon from "~/assets/icons/reddit.svg?component";
import DiscordIcon from "~/assets/icons/discord.svg?component";
import StackoverflowIcon from "~/assets/icons/stackoverflow.svg?component";
import LinkedInIcon from "~/assets/icons/linkedin.svg?component";
import SlackIcon from "~/assets/icons/slack.svg?component";
import LinkIcon from "~/assets/icons/link.svg?component";
import GithubIcon from "~/assets/icons/github.svg?component";
import GitterIcon from "~/assets/icons/gitter.svg?component";
import { PropType } from "vue";

const props = defineProps({
  communities: {
    type: Array as PropType<CommunityInfo[]>,
    required: true,
  },
})
</script>