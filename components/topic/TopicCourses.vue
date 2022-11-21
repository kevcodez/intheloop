<template>
  <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
    <nuxt-link :to="`/courses/${course.id}`"
      class="relative flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400"
      v-for="course in courses" :key="course.info.url">
      <div class="flex flex-col w-full h-40">
        <img v-if="course.info.image" :src="course.info.image"
          class="self-start object-contain w-full rounded-t max-h-40" />
        <academic-cap-icon v-else class="m-auto w-24 h-24" />
      </div>
      <div class="self-start px-4 py-2">
        <span>{{ course.info.name }}</span>
        <span class="mt-1 text-sm text-gray-700">by {{ course.info.authors.map((it) => it.name).join(', ') }}</span>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
import { Course } from '~/lib/Course'
import AcademicCapIcon from '~/assets/icons/academic-cap.svg?component'
import { PropType } from 'vue';

const props = defineProps({
  courses: {
    type: Array as PropType<Course[]>,
    required: true,
  },
})
</script>
