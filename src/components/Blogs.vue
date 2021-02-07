<template>
    blogs
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Blogs",
  props: {
      blogs: {
          type: Array,
          required: true
      }
  }
})
</script>