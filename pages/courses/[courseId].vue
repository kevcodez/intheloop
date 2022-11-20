<template>
  <div class="container">
    <loading-indicator v-if="pending" />
    <div v-else-if="error">An error occured while fetching</div>

    <div v-else-if="data.course">
      <course-details :course="data.course" />

      <div v-if="data.relatedCourses && data.relatedCourses.length" class="mt-8 md:mt-12">
        <h3 class="text-lg text-medium tracking-wide mb-2">Related Courses</h3>
        <course-list :courses="data.relatedCourses" />
      </div>

      <div v-if="data.topics && data.topics.length" class="mt-8 md:mt-12">
        <h3 class="text-lg text-medium tracking-wide mb-2">Related Topics</h3>
        <topic-list :topics="data.topics" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Database } from '~/lib/database.types'

const route = useRoute()
const supabase = useSupabaseClient<Database>()
const courseId = route.params.courseId

// TODO seo
// TODO handle 404
const { pending, error, data } = useAsyncData('courses', async () => {
  const { data } = await supabase
    .from('course')
    .select('*')
    .eq('id', courseId)
    .limit(1)
    .single()

  if (data) {
    const fetchTopics = supabase
      .from('topic')
      .select('*')
      .in('id', data.topics)

    const fetchRelatedCourses = supabase
      .from('course')
      .select('*')
      .contains('topics', data.topics)
      .neq('id', data.id)
      .limit(4)

    const [
      { data: topicsFromDb },
      { data: relatedCoursesFromDb },
    ] = await Promise.all([fetchTopics, fetchRelatedCourses])

    return {
      course: data,
      topics: topicsFromDb,
      relatedCourses: relatedCoursesFromDb
    }
  }
})
</script>