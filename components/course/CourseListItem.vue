<template>
  <nuxt-link :to="`/courses/${course.id}`"
    class="relative flex flex-col items-center bg-white border-b border-gray-300 hover:border-gray-400">
    <div class="flex w-full justify-center h-40">
      <img v-if="course.info.image" :src="course.info.image"
        class="self-center object-contain w-full rounded-t max-h-40" />
      <academic-cap-icon v-else class="self-center w-24 h-24" />
    </div>
    <div class="self-start text-left px-4 py-2 mt-4">
      <span>{{ course.info.name }}</span>
      <span class="mt-1 text-sm text-gray-700">by {{ course.info.authors.map((it) => it.name).join(', ') }}</span>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
import { Course } from '~/lib/Course'
import AcademicCapIcon from '~/assets/icons/academic-cap.svg?component'
import { PropType } from 'vue';

const props = defineProps({
  course: {
    required: true,
    type: Object as PropType<Course>,
  },
})
</script>


