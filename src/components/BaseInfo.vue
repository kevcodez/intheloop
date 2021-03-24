<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-14">
    <div class="col-span-2">
      <div class="flex flex-row items-center">
        <img :src="topic.info.logo" class="h-16 w-16" />
        <h1 class="ml-5 text-5xl font-semibold tracking-wide">
          {{ topic.info.name }}
        </h1>
      </div>

      <div class="space-x-1 space-y-2 mt-4">
        <span
          class="rounded inline-block px-2 py-1 bg-indigo-100"
          v-for="tag in topic.info.tags"
          :key="tag"
        >
          {{ tag }}
        </span>
      </div>

      <p class="mt-4 text-base">
        {{ topic.info.description }}
      </p>
    </div>

    <div class="flex flex-col items-center justify-center">
      <topic-developers :developers="topic.developers" />
      <topic-latest-release-and-badges class="mt-8" :topic="topic" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Topic } from "../lib/Topic";
import GithubIcon from "../assets/icons/github.svg";
import LinkIcon from "../assets/icons/link.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
import PlayLineIcon from "../assets/icons/play-line.svg";
import FileListIcon from "../assets/icons/file-list.svg";
import ApacheMavenIcon from "../assets/icons/apachemaven.svg";
import NpmIcon from "../assets/icons/npm.svg";
import ScaleIcon from "../assets/icons/scale.svg";
import BugIcon from "../assets/icons/bug.svg";

export default defineComponent({
  name: "BaseInfo",
  components: {
    GithubIcon,
    LinkIcon,
    PlayLineIcon,
    TwitterIcon,
    YoutubeIcon,
    FileListIcon,
    ApacheMavenIcon,
    NpmIcon,
    ScaleIcon,
    BugIcon,
  },
  props: {
    topic: {
      type: Object as PropType<Topic>,
      required: true,
    },
  },
});
</script>