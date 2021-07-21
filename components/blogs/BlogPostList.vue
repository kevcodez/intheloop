<template>
  <div class="grid grid-cols-4 gap-x-10 gap-y-6">
    <div
      v-for="blogPost in blogPosts"
      :key="blogPost.id"
      class="border-b border-gray-200 mb-2 pb-2 grow hover:text-indigo-800"
    >
      <blog-post-list-item :blog-post="blogPost" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { BlogPost } from '~/lib/Blog'

export default defineComponent({
  props: {
    blogPosts: {
      required: true,
      type: Array as PropType<BlogPost[]>,
    },
  },
})
</script>
