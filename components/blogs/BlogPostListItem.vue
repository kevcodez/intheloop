<template>
  <a target="_blank" :href="blogPost.info.link">
    <img :src="blogPost.info.image" />

    <div class="p-1">
      <span class="trackig-wider font-medium">{{ blogPost.info.title }}</span>

      <span class="text-xs">{{ blogPost.info.publishedAt | relative }}</span>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { BlogPost } from '~/lib/Blog'

export default defineComponent({
  name: 'BlogPostListItem',
  props: {
    blogPost: {
      required: true,
      type: Object as PropType<BlogPost>,
    },
  },
})
</script>
