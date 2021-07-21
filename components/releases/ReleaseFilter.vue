<template>
  <div class="shadow p-4">Filter</div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import dayjs from 'dayjs'

export interface ReleaseFilter {
  topics: string[]
  startDate: Date
  versions: string[]
}

export default defineComponent({
  emits: ['filter-changed'],
  setup(_props, { emit }) {
    const optionsVersions = ['Major', 'Minor', 'Patch']
    const selectedVersions = ref<string[]>(['Major', 'Minor', 'Patch'])

    const optionsTopics = [{ id: 'kotlin', name: 'Kotlin' }]
    const selectedTopics = ref<string[]>(['kotlin'])

    const selectedStartDate = ref<Date>(dayjs().subtract(7, 'days').toDate())

    const onFilterChanged = () => {
      const filter = {
        topics: selectedTopics,
        startDate: selectedStartDate,
        versions: selectedVersions,
      }

      emit('filter-changed', filter)
    }

    return {
      optionsVersions,
      selectedVersions,
      optionsTopics,
      selectedTopics,
      selectedStartDate,
    }
  },
})
</script>
