<template>
  <div>
    <!-- Filter -->
    <release-filter @filter-changed="filterChanged" />

    <!-- Results -->
    <release-list :releases="releases" class="mt-6" />
  </div>
</template>

<script lang="ts">
import { useFetch, useStore } from '@nuxtjs/composition-api'
import { SupabaseClient } from '@supabase/supabase-js'
import { defineComponent, inject, ref } from '@vue/composition-api'
import { ReleaseFilter } from '~/components/releases/ReleaseFilter.vue'
import { Release, ReleaseWithTopic } from '~/lib/Topic'
import offlineData from '~/offlineData.json'

export default defineComponent({
  setup() {
    const supabase = inject<SupabaseClient>('supabase')!
    const store = useStore()
    const topicIds = store.state.follow.topicIds

    const releases = ref<ReleaseWithTopic[]>([])

    const filterChanged = (filter: ReleaseFilter) => {
      console.log('filter changed')
      console.log(filter)
    }

    useFetch(async () => {
      const { data } = await supabase
        .from('vw_releases')
        .select(`*`)
        .in('topic', topicIds)
        .order('published_at', { ascending: false })
        .limit(50)

      releases.value = data
    })

    return {
      releases,
      filterChanged,
    }
  },
})
</script>
