<template>
  <div>
    <LatestReleases :releases="topic.releases" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Topic } from "@/lib/Topic";

export default defineComponent({
  name: "TopicReleases",
  props: {
    topic: Object as PropType<Topic>,
  },
});
</script>