<template>
    social links
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "SocialLinks",
  props: {
      links: {
          type: Array,
          required: true
      }
  }
})
</script>