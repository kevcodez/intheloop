<template>
    latest releases
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "LatestReleases",
  props: {
      releases: {
          type: Array,
          required: true
      }
  }
})
</script>