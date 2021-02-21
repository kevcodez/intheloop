<template>
  <div class="sm:hidden">
    <label for="tabs" class="sr-only">Select a tab</label>
    <select
      id="tabs"
      name="tabs"
      class="block w-full px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
    >
      <option selected>Tweets</option>
      <option>Blog Posts</option>
      <option>Latest Releases</option>
      <option>Books &amp; Courses</option>
    </select>
  </div>
  <div class="hidden sm:block">
    <nav class="flex space-x-4" aria-label="Tabs">
      <router-link
        exact-active-class="bg-gray-200 text-gray-700"
        :to="`/topics/${topic.id}`"
        class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-md rounded-md"
      >
        Tweets
      </router-link>
      <a
        exact-active-class="bg-gray-200 text-gray-700"
        :to="`/topics/${topic.id}/blog-posts`"
        class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-md rounded-md"
      >
        Blog posts
      </a>
      <!-- Current: "bg-gray-100 text-gray-700", Default: "text-gray-500 hover:text-gray-700" -->
      <a
        exact-active-class="bg-gray-200 text-gray-700"
        :to="`/topics/${topic.id}/releases`"
        class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-md rounded-md"
      >
        Latest Releases
      </a>
      <router-link
        exact-active-class="bg-gray-200 text-gray-700"
        :to="`/topics/${topic.id}/books-courses`"
        class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-md rounded-md"
      >
        Books &amp; Courses
      </router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { Topic } from "@/lib/Topic";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    topic: {
      type: Object as PropType<Topic>,
      required: true,
    },
  },
});
</script>

