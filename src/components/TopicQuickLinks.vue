<template>
  <h3 class="font-medium text-xl">Quick Links</h3>
  <div class="grid grid-cols-2 gap-8 mt-4">
    <div class="space-y-2">
      <div class="flex flex-row">
        <github-icon class="h-5 w-5 mr-2" />
        <a :href="topic.info.scm.url" target="_blank">{{
          topic.info.scm.displayName
        }}</a>
      </div>

      <div class="flex flex-row">
        <link-icon class="h-5 w-5 mr-2" />
        <a :href="topic.info.website" target="_blank">Official Website</a>
      </div>

      <div class="flex flex-row">
        <academic-cap-icon class="h-5 w-5 mr-2" />
        <a :href="topic.info.documentation" target="_blank">Documentation</a>
      </div>

      <div class="flex flex-row">
        <bug-icon class="h-5 w-5 mr-2" />
        <a :href="topic.info.issueTracker" target="_blank">Issue Tracker</a>
      </div>

      <div class="flex flex-row" v-if="topic.info.playground">
        <play-line-icon class="h-5 w-5 mr-2" />
        <a :href="topic.info.playground" target="_blank">Playground</a>
      </div>

      <div class="flex flex-row" v-if="topic.info.changelog">
        <file-list-icon class="h-5 w-5 mr-2" />
        <a :href="topic.info.changelog" target="_blank">Changelog</a>
      </div>
    </div>
    <div class="space-y-2">
      <a
        class="flex flex-row"
        :href="social.url"
        v-for="social in topic.info.social"
        :key="social.url"
      >
        <twitter-icon v-if="social.type === 'Twitter'" class="h-6 w-6" />
        <youtube-icon v-else-if="social.type === 'Youtube'" class="h-6 w-6" />
        <span class="ml-2">{{ social.label }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Topic } from "@/lib/Topic";
import { defineComponent, PropType } from "vue";
import GithubIcon from "../assets/icons/github.svg";
import LinkIcon from "../assets/icons/link.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
import PlayLineIcon from "../assets/icons/play-line.svg";
import FileListIcon from "../assets/icons/file-list.svg";
import BugIcon from "../assets/icons/bug.svg";
import AcademicCapIcon from "../assets/icons/academic-cap.svg";

export default defineComponent({
  components: {
    GithubIcon,
    LinkIcon,
    PlayLineIcon,
    TwitterIcon,
    YoutubeIcon,
    FileListIcon,
    BugIcon,
    AcademicCapIcon
  },
  props: {
    topic: Object as PropType<Topic>,
  },
});
</script>
