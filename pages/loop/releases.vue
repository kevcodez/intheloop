<template>
  <div>
    <!-- Filter -->
    <release-filter @filter-changed="filterChanged" />

    <!-- Results -->
    <release-list :releases="releases" class="mt-6" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { ReleaseFilter } from '~/components/releases/ReleaseFilter.vue'
import { Release } from '~/lib/Topic'
import offlineData from '~/offlineData.json'

export default defineComponent({
  setup() {
    const releases = ref<Release[]>([
      ...offlineData.releases,
      ...offlineData.releases,
      ...offlineData.releases,
      ...offlineData.releases,
      ...offlineData.releases,
      ...offlineData.releases,
    ])

    const filterChanged = (filter: ReleaseFilter) => {
      console.log('filter changed')
      console.log(filter)
    }

    return {
      releases,
      filterChanged
    }
  },
})
</script>
