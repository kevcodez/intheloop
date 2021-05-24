<template>
  <div :style="`max-height: ${maxHeight}px`" class="overflow-auto">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {},
  props: {
    maxHeight: {
      type: Number,
      required: true,
    },
  },
})
</script>
