<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-14">
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

      <div class="mt-6 flex flex-row">
        <span class="mr-2">Developed by</span>
        <div v-for="developer in topic.developers" :key="developer.website">
          <a :href="developer.website" target="_blank" class="flex flex-row">
            <img :src="developer.logoUrl" class="h-6 w-6 mr-2" />
            <span>{{ developer.name }}</span>
          </a>
        </div>
      </div>
    </div>

    <div>
      <div class="flex space-y-2 flex-col items-center">
        <div class="flex flex-row">
          <span
            class="px-3 py-2 bg-indigo-500 text-white"
            :style="`background-color: ${topic.info.color}`"
            >{{ topic.info.latestVersion }}</span
          >
          <span class="px-3 py-2 bg-gray-700 text-gray-50">
            {{ $filters.relative(topic.latestrelease.publishedAt) }}</span
          >
        </div>
        <div class="pt-2 flex flex-row space-x-3">
          <a
            v-if="topic.info.license"
            :href="topic.info.license.url"
            target="_blank"
            class="flex flex-row text-sm space-x-2 grow"
          >
            <scale-icon class="w-6 h-6" />
            <span>{{ topic.info.license.name }}</span>
          </a>
          <a
            :href="badge.url"
            target="_blank"
            v-for="badge in topic.info.badges"
            :key="badge.url"
          >
            <npm-icon v-if="badge.type === 'NPM'" class="grow h-6 w-6" />

            <apache-maven-icon
              v-else-if="badge.type === 'MavenCentral'"
              class="grow h-6 w-6"
            />
          </a>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-8 mt-8">
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
            <link-icon class="h-5 w-5 mr-2" />
            <a :href="topic.info.documentation" target="_blank"
              >Documentation</a
            >
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
            <youtube-icon
              v-else-if="social.type === 'Youtube'"
              class="h-6 w-6"
            />
            <span class="ml-2">{{ social.label }}</span>
          </a>
        </div>
      </div>
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
    BugIcon
  },
  props: {
    topic: {
      type: Object as PropType<Topic>,
      required: true,
    },
  },
});
</script>