<template>
  <Nav />

  <div>
    <BaseInfo class="container" :topic="topic" />

    <div style="height: 150px; overflow: hidden" class="mt-5">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          :style="`stroke: none; fill: ${topic.info.color}`"
        ></path>
      </svg>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-24 container">
      <div class="col-span-2">
        <TopicNav :topic="topic" />

        <router-view class="pt-10" :topic="topic" />
      </div>

      <div>
        <Communities :communities="topic.communities.filter((it) => it)" />

        <Blogs class="mt-8" :blogs="topic.blogs.filter((it) => it)" />

        <h3 class="font-medium text-xl mt-8">Newsletters &amp; Podcasts</h3>
        <Newsletters :newsletters="topic.newsletters.filter((it) => it)" />

        <Podcasts :podcasts="topic.podcasts.filter((it) => it)" />
      </div>
    </div>
  </div>

  <Footer />
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import { Topic } from "@/lib/Topic";
import { supabase } from "@/lib/supabase";

export default defineComponent({
  name: "App",
  props: {
    id: {
      type: String,
    },
  },
  async setup(props) {
    if (!props.id) return;

    const { data, error } = await supabase
      .from("vw_topic_overview")
      .select("*")
      .eq("id", props.id)
      .single();

    const topic = ref<Topic>(data);

    return {
      topic,
    };
  },
});
</script>

<style scoped>
.container {
  @apply mx-auto max-w-7xl px-4 mt-8 sm:mt-16;
}
</style>
