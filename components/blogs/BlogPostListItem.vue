<template>
  <a target="_blank" :href="blogPost.blog_post_info.link">
    <div class="h-28 flex items-center justify-center">
      <img
        v-if="blogPost.blog_post_info.image"
        :src="blogPost.blog_post_info.image"
        class="max-h-28 object-contain"
      />
      <ghost-icon class="h-12 text-gray-600" v-else />
    </div>
    <div class="p-1">
      <span class="trackig-wider font-medium">{{
        blogPost.blog_post_info.title
      }}</span>

      <span class="text-xs">{{
        blogPost.blog_post_info.publishedAt | relative
      }}</span>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { BlogPost } from '~/lib/Blog'
import GhostIcon from '@/assets/icons/ghost.svg?inline'

export default defineComponent({
  name: 'BlogPostListItem',
  components: {
    GhostIcon
  },
  props: {
    blogPost: {
      required: true,
      type: Object as PropType<BlogPost>,
    },
  },
})
</script>
