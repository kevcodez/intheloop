<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    <course-list-item :key="course.id" v-for="course in courses" :course="course" />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Course } from '~/lib/Course'

const props = defineProps({
  courses: {
    required: true,
    type: Array as PropType<Course[]>,
  },
})
</script>


