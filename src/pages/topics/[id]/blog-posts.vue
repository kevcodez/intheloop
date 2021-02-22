<template>
  <div>
   blog posts
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Topic } from "@/lib/Topic";

export default defineComponent({
  name: "TopicBlogPosts",
  props: {
    topic: Object as PropType<Topic>,
  },
});
</script>