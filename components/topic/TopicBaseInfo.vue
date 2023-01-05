<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-14">
      <div class="col-span-2">
        <div class="flex flex-row items-center justify-between">
          <div class="flex items-center">
            <img :src="topic.info.logo" class="h-16 w-16 object-contain" />
            <h1 class="ml-5 text-5xl font-bold tracking-wide">
              {{ topic.info.name }}
            </h1>
          </div>

          <follow-button class="justify-end" :topic-id="topic.id" />
        </div>

        <div class="space-x-1 space-y-2 mt-4">
          <span class="rounded inline-block px-2 py-1 bg-indigo-100" v-for="tag in topic.info.tags" :key="tag">
            {{ tag }}
          </span>
        </div>

        <p class="mt-4 text-base whitespace-pre-line">
          {{ topic.info.description }}
        </p>
      </div>

      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-row space-x-3 justify-center items-center">
          <a :href="badge.url" target="_blank" v-for="badge in topic.info.badges" :key="badge.url">
            <npm-icon v-if="badge.type === 'NPM'" class="grow h-6 w-6" />

            <apache-maven-icon v-else-if="badge.type === 'MavenCentral'" class="h-6 w-6" />
          </a>
          <a :href="topic.info.scm.url" target="_blank"> <github-icon class="h-5 object-contain" /></a>
          <a class="flex flex-row" :href="social.url" v-for="social in topic.info.social" :key="social.url">
            <twitter-icon v-if="social.type === 'Twitter'" class="h-5" />
            <youtube-icon v-else-if="social.type === 'Youtube'" class="h-5" />
          </a>

        </div>

        <topic-latest-release-and-badges class="mt-8" :topic="topic" />


      </div>

    </div>
    <topic-quick-links :topic="topic" class="mt-4 text-sm" />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Topic } from '@/lib/Topic'
import GithubIcon from '~/assets/icons/github.svg?component'
import TwitterIcon from '~/assets/icons/twitter.svg?component'
import YoutubeIcon from '~/assets/icons/youtube.svg?component'
import NpmIcon from '~/assets/icons/npm.svg?component'
import ApacheMavenIcon from '~/assets/icons/apachemaven.svg?component'

const props = defineProps({
  topic: {
    type: Object as PropType<Topic>,
    required: true,
  },
})
</script>
