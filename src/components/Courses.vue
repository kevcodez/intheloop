<template>
  <div v-if="courses && courses.length">
    <div class="grid gap-4 md:grid-cols-2">
      <a
        target="_blank"
        :href="course.url"
        class="relative flex items-center flex-grow px-4 py-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400"
        v-for="course in courses"
        :key="course.url"
      >
        <span
          class="absolute right-0 px-2 py-1 mt-2 text-xs bg-gray-800 rounded-tr text-gray-50 -top-2"
          :class="{ 'bg-purple-800': course.price === 'Free' }"
          >{{ course.price }}</span
        >
        <div class="flex flex-col justify-center text-center">
          <img v-if="course.image" :src="course.image" class="object-contain w-12 h-12" />
          <academic-cap-icon v-else class="w-12 h-12" />
        </div>
        <div class="flex flex-col ml-4 pr-3">
          <span>{{ course.name }}</span>
          <span class="text-sm text-gray-700"
            >by {{ course.authors.map((it) => it.name).join(", ") }}</span
          >
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import LinkIcon from "../assets/icons/link.svg";
import { Course } from "../lib/Course";
import AcademicCapIcon from "../assets/icons/academic-cap.svg";

export default defineComponent({
  name: "Courses",
  components: {
    LinkIcon,
    AcademicCapIcon,
  },
  props: {
    courses: {
      type: Object as PropType<Course[]>,
      required: true,
    },
  },
});
</script>
