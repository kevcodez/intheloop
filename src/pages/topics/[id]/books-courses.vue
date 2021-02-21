<template>
  <div class="space-y-10">
    <Books :books="topic.books.filter((it) => it)" />

    <Courses :courses="topic.courses.filter((it) => it)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Topic } from "@/lib/Topic";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    topic: Object as PropType<Topic>,
  },
});
</script>