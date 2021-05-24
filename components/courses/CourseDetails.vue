<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div class="md:col-span-1 items-center flex justify-center">
      <img
        :src="course.info.image"
        class="self-center object-contain max-h-40 md:max-h-60"
      />
    </div>
    <div class="md:col-span-3">
      <h2 class="text-2xl font-medium tracking-wide">
        {{ course.info.name }}
      </h2>
      <div class="py-2 text-sm text-gray-700">
        <span class="mt-1 block"
          >Written by
          {{ course.info.authors.map((it) => it.name).join(', ') }}</span
        >
        <span class="mt-1 block"
          >Published
          {{ course.info.publishedAt | formatDate('MMMM YYYY') }}</span
        >
      </div>
      <scrollable-container class="py-2 w-full" :max-height="320">
        <div
          class="prose p-0 w-full max-w-full"
          v-html="course.info.description"
        ></div>
      </scrollable-container>

      <div class="mt-5 flex">
        <a class="button dark text-lg" target="_blank" :href="course.info.url"
          >Get the course</a
        >
      </div>
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
