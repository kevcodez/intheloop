<template>
  <a target="_blank" :href="blogPostInfo.link">
    <div class="h-28 flex items-center justify-center">
      <img v-if="blogPostInfo.image" :src="blogPostInfo.image" class="max-h-28 object-contain" />
      <ghost-icon class="h-12 text-gray-600" v-else />
    </div>
    <div class="p-1">
      <span class="trackig-wider font-medium">{{
          blogPostInfo.title
      }}</span>

      <span class="text-xs">{{
          $relativeDate(blogPostInfo.publishedAt)
      }}</span>
    </div>
  </a>
</template>

<script lang="ts" setup>
import { BlogPostInfo } from '~/lib/Blog'
import { PropType } from 'vue';
import GhostIcon from '~/assets/icons/ghost.svg?component';

const props = defineProps({
  blogPostInfo: {
    required: true,
    type: Object as PropType<BlogPostInfo>,
  }
})
</script>
