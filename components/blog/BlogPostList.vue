<template>
  <div class="grid grid-cols-4 gap-x-10 gap-y-6">
    <div v-for="blogPost in blogPosts" :key="blogPost.id"
      class="border-b border-gray-200 mb-2 pb-2 grow hover:text-indigo-800">
      <blog-post-list-item :blog-post="blogPost.blog_post_info" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { BlogPostInfo } from '~/lib/Blog'

const props = defineProps({
  blogPosts: {
    required: true,
    type: Array as PropType<{ id: string, blog_post_info: BlogPostInfo }[]>,
  },
})
</script>
