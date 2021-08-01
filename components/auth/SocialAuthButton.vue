<template>
  <span class="rounded-md shadow-sm">
    <button
      type="button"
      class="
        w-full
        inline-flex
        justify-center
        py-2
        px-4
        border border-gray-300
        rounded-md
        bg-white
        text-sm
        leading-5
        font-medium
        text-gray-500
        hover:text-gray-400
        focus:outline-none
        focus:border-blue-300
        focus:shadow-outline-blue
        transition
        duration-150
        ease-in-out
      "
      @click="click"
    >
      <slot />
    </button>
  </span>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup(props, { emit }) {
    const click = () => {
      emit('click')
    }

    return {
      click,
    }
  },
})
</script>

<style lang="scss" scoped>
svg {
  @apply h-5 w-5;
}
</style>