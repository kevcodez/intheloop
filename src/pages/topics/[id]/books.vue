<template>
  <div>books {{ id }}</div>
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