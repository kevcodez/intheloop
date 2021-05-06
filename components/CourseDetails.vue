<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="order-2 md:order-1">
      <h2 class="text-2xl font-medium tracking-wide">
        {{ course.info.name }}
      </h2>
      <div class="prose" v-html="course.info.description"></div>
    </div>
    <div class="flex flex-col items-center order-1 md:order-2">
      <img  :src="course.info.image"  class="self-center object-contain max-h-40 md:max-h-60" />

      <div class="my-4 text-center text-sm text-gray-700">
        <span class="mt-1 block"
          >Created by
          {{ course.info.authors.map((it) => it.name).join(', ') }}</span
        >
        <span class="mt-1 block"
          >Published
          {{ course.info.publishedAt | formatDate('MMMM YYYY') }}</span
        >
      </div>

      <a class="button dark" target="_blank" :href="course.info.url"
        >Get the course</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Course } from '~/lib/Course'

export default defineComponent({
  props: {
    course: {
      required: true,
      type: Object as PropType<Course>,
    },
  },
})
</script>
