<template>
  <div class="container">
    <div v-if="$fetchState.pending">
      <loading-indicator />
    </div>
    <div v-else-if="$fetchState.error">An error occured while fetching</div>
    <course-details v-else :course="course" />

    <!-- TODO recommendations -->
    <!-- TODO show/link topics -->
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  ref,
  useFetch,
  useRoute,
  useRouter,
} from '@nuxtjs/composition-api'
import { SupabaseClient } from '@supabase/supabase-js'
import { Course } from '~/lib/Course'

export default defineComponent({
  setup() {
    const route = useRoute()
    const supabase = inject<SupabaseClient>('supabase')!
    const courseId = route.value.params.courseId

    const course = ref<Course | null>()

    // TODO seo
    // TODO handle 404
    useFetch(async () => {
      const { data, error } = await supabase
        .from('course')
        .select('*')
        .eq('id', courseId)
        .limit(1)
        .single()

      if (!data) {
        throw Error('not found')
      }
      course.value = data
    })

    return {
      course,
    }
  },
})
</script>