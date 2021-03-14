<template>
  <div class="space-y-5">
    <Books :books="topic.books.filter((it) => it)" />

    <Courses :courses="topic.courses.filter((it) => it)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Topic } from "@/lib/Topic";

export default defineComponent({
  props: {
    topic: {
      type: Object as PropType<Topic>,
      required: true,
    },
  },
});
</script>
