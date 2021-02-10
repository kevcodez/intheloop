<template>
  <div>
    <LatestReleases :releases="topic.releases" />

    <div class="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-6 mt-24">
      <Blogs :blogs="topic.blogs" />

      <Books :books="topic.books" />

      <Courses :courses="topic.courses" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Topic } from "/@/lib/Topic";
import Blogs from "/@/components/Blogs.vue";
import Books from "/@/components/Books.vue";
import LatestReleases from "/@/components/LatestReleases.vue";
import Courses from "/@/components/Courses.vue";

export default defineComponent({
  name: "TopicBase",
  components: {
    Blogs,
    Books,
    LatestReleases,
    Courses,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    topic: Object as PropType<Topic>,
  },
});
</script>