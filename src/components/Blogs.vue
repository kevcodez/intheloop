<template>
    blogs
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Blog } from '../lib/Blog'

export default defineComponent({
  name: "Blogs",
  props: {
      blogs: {
          type: Object as PropType<Blog[]>,
          required: true
      }
  }
})
</script>