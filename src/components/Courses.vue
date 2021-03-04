<template>
  <div v-if="courses && courses.length">
    <div class="gap-4 grid md:grid-cols-2">
      <a
        target="_blank"
        :href="course.url"
        class="relative flex flex-grow items-center rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400 px-4 py-4"
        v-for="course in courses"
        :key="course.url"
      >
        <span
          class="mt-2 text-gray-50 py-1 px-2 rounded bg-gray-800 text-xs absolute -top-2 right-0"
          >{{ course.price }}</span
        >
        <div class="flex flex-col justify-center text-center">
          <img :src="course.image" class="h-12 w-12 object-contain" />
        </div>
        <div class="flex flex-col ml-4">
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

export default defineComponent({
  name: "Courses",
  components: {
    LinkIcon,
  },
  props: {
    courses: {
      type: Object as PropType<Course[]>,
      required: true,
    },
  },
});
</script>