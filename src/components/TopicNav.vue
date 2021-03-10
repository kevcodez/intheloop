<template>
  <div class="sm:hidden">
    <label for="tabs" class="sr-only">Select a tab</label>
    <select
      id="tabs"
      name="tabs"
      class="block w-full px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
      @input="changeNav"
    >
      <option value="" selected>Tweets</option>
      <option value="/blog-posts">Blog Posts</option>
      <option value="/releases">Latest Releases</option>
      <option value="/books-courses">Books &amp; Courses</option>
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
      <router-link
        exact-active-class="bg-gray-200 text-gray-700"
        :to="`/topics/${topic.id}/blog-posts`"
        class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-md rounded-md"
      >
        Blog Posts
      </router-link>
      <!-- Current: "bg-gray-100 text-gray-700", Default: "text-gray-500 hover:text-gray-700" -->
      <router-link
        exact-active-class="bg-gray-200 text-gray-700"
        :to="`/topics/${topic.id}/releases`"
        class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-md rounded-md"
      >
        Latest Releases
      </router-link>
      <router-link
        exact-active-class="bg-gray-200 text-gray-700"
        :to="`/topics/${topic.id}/books-courses`"
        class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-md rounded-md"
        v-if="showBooksAndCoursesTab"
      >
        Books &amp; Courses
      </router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { Topic } from "@/lib/Topic";
import { computed, defineComponent, PropType } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    topic: {
      type: Object as PropType<Topic>,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();

    const showBooksAndCoursesTab = computed(
      () =>
        (props.topic.books && props.topic.books.filter((it) => it).length) ||
        (props.topic.courses && props.topic.courses.filter((it) => it).length)
    );

    const changeNav = (e: any) => {
      const navigateTo = e.target.value;
      router.push(`/topics/${props.topic.id}${navigateTo}`);
    };

    return {
      showBooksAndCoursesTab,
      changeNav,
    };
  },
});
</script>

