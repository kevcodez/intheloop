<template>
  <div :style="`max-height: ${maxHeight}px`" class="overflow-auto">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  maxHeight: {
    type: Number,
    required: true,
  },
})
</script>
