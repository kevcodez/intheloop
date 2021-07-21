<template>
  <div
    class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-6"
  >
    <div
      v-for="release in releases"
      :key="release.id"
      class="border-b border-gray-200 mb-2 pb-2 p-1"
    >
      <release-list-item :release="release" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Release } from '~/lib/Topic'

export default defineComponent({
  props: {
    releases: {
      required: true,
      type: Array as PropType<Release[]>,
    },
  },
})
</script>
