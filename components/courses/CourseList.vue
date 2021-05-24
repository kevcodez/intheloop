<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    <course-list-item
      :key="course.id"
      v-for="course in courses"
      :course="course"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Course } from '~/lib/Course'

export default defineComponent({
  props: {
    courses: {
      required: true,
      type: Array as PropType<Course[]>,
    },
  },
})
</script>


