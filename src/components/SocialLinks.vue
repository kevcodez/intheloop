<template>
    social links
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { SocialLink } from '../lib/SocialLink'

export default defineComponent({
  name: "SocialLinks",
  props: {
      links: {
          type: Object as PropType<SocialLink[]>,
          required: true
      }
  }
})
</script>