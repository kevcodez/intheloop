<template>
    latest releases
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Release } from '../lib/Topic'

export default defineComponent({
  name: "LatestReleases",
  props: {
      releases: {
          type: Object as PropType<Release[]>,
          required: true
      }
  }
})
</script>