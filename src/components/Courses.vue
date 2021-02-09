<template>
  <div>
    <div class="flex justify-between">
      <h3 class="text-2xl mb-4">Courses</h3>
      <!--a href="">See all</a-->
    </div>
    <div class="space-y-8">
      <a
        target="_blank"
        :href="course.url"
        class="flex flex-grow"
        v-for="course in courses"
        :key="course.url"
      >
        <img :src="course.image" class="h-12 w-12 object-contain" />
        <div class="flex flex-col ml-4">
          <span>{{ course.name }}</span>
          <span class="text-sm text-gray-700"
            >by
            {{ course.authors.map((it) => it.name).join(", ") }}</span
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