<template>
  <div v-if="courses && courses.length">
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
      <a
        target="_blank"
        :href="course.url"
        class="relative flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400"
        v-for="course in courses"
        :key="course.url"
      >
      <div class="flex h-40">
          <img v-if="course.image" :src="course.image" class="self-start object-contain w-full rounded-t max-h-40" />
          <academic-cap-icon v-else class="self-center w-24 h-24" />

      </div>
        <div class="flex flex-col px-4 py-2">
          <span>{{ course.name }}</span>
          <span class="mt-1 text-sm text-gray-700"
            >by {{ course.authors.map((it) => it.name).join(", ") }}</span
          >
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import LinkIcon from "../assets/icons/link.svg?inline";
import { Course } from "../lib/Course";
import AcademicCapIcon from "../assets/icons/academic-cap.svg?inline";

export default defineComponent({
  name: "Courses",
  components: {
    LinkIcon,
    AcademicCapIcon,
  },
  props: {
    courses: {
      type: Array as PropType<Course[]>,
      required: true,
    },
  },
});
</script>
