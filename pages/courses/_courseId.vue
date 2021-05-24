<template>
  <div class="container">
    <div v-if="$fetchState.pending">
      <loading-indicator />
    </div>
    <div v-else-if="$fetchState.error">An error occured while fetching</div>

    <div v-else>
      <course-details :course="course" />

      <div v-if="relatedCourses && relatedCourses.length" class="mt-8 md:mt-12">
        <h3 class="text-lg text-medium tracking-wide mb-2">Related Courses</h3>
        <course-list :courses="relatedCourses" />
      </div>

      <div v-if="topics && topics.length" class="mt-8 md:mt-12">
        <h3 class="text-lg text-medium tracking-wide mb-2">Related Topics</h3>
        <topic-list :topics="topics" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  ref,
  useFetch,
  useRoute,
} from '@nuxtjs/composition-api'
import { SupabaseClient } from '@supabase/supabase-js'
import { Course } from '~/lib/Course'
import { Topic } from '~/lib/Topic'

export default defineComponent({
  setup() {
    const route = useRoute()
    const supabase = inject<SupabaseClient>('supabase')!
    const courseId = route.value.params.courseId

    const course = ref<Course | null>()
    const topics = ref<Topic[]>([])
    const relatedCourses = ref<Course[]>([])

    // TODO seo
    // TODO handle 404
    useFetch(async () => {
      const { data } = await supabase
        .from('course')
        .select('*')
        .eq('id', courseId)
        .limit(1)
        .single()

      if (data) {
        const fetchTopics = supabase
          .from<Topic>('topic')
          .select('*')
          .in('id', data.topics)

        const fetchRelatedCourses = supabase
          .from<Course>('course')
          .select('*')
          .contains('topics', data.topics)
          .neq('id', data.id)
          .limit(4)

        const [
          { data: topicsFromDb },
          { data: relatedCoursesFromDb },
        ] = await Promise.all([fetchTopics, fetchRelatedCourses])
        course.value = data
        topics.value = topicsFromDb || []
        relatedCourses.value = relatedCoursesFromDb || []
      }
    })

    return {
      course,
      topics,
      relatedCourses,
    }
  },
})
</script>