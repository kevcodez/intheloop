<template>
  <div class="container">
    <div v-if="pending">
      <loading-indicator />
    </div>
    <div v-else-if="error">An error occured while fetching</div>

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

<script lang="ts" setup>
import { Course } from '~/lib/Course'
import { Topic } from '~/lib/Topic'
import { Database } from '~/lib/database.types'

const route = useRoute()
const supabase = useSupabaseClient<Database>()
const courseId = route.params.courseId

const course = ref<Course | null>()
const topics = ref<Topic[]>([])
const relatedCourses = ref<Course[]>([])

// TODO seo
// TODO handle 404
const { pending, error } = useAsyncData('courses', async () => {
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
    course.value = data
    topics.value = topicsFromDb || []
    relatedCourses.value = relatedCoursesFromDb || []
  }
})
</script>