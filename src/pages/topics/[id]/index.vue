<template>
  <div>
    tweets
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Topic } from "@/lib/Topic";

export default defineComponent({
  name: "TopicBase",
  props: {
    id: {
      type: String,
      required: true,
    },
    topic: Object as PropType<Topic>
  },
});
</script>