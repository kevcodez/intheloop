<template>
  <div v-if="topic" class="mt-8">
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
    <div style="height: 100px; overflow: hidden">
      <svg
        viewBox="0 0 500 100"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,-150.00 L0.00,-150.00 Z"
          :style="`stroke: none; fill: ${topic.info.color}`"
        ></path>
      </svg>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 container mt-8 sm:mt-16">
      <div class="col-span-2 order-2 lg:order-1">
        <TopicNav :topic="topic" />

        <router-view class="pt-10" :topic="topic" />
      </div>

      <div class="order-1 lg:order-2">
        <topic-quick-links :topic="topic" />

        <communities class="mt-8" :communities="communities" />

        <blogs class="mt-8" :blogs="blogs" />

        <h3
          class="font-medium text-xl mt-8"
          v-if="newsletters.length || podcasts.length"
        >
          Newsletters &amp; Podcasts
        </h3>
        <newsletters :newsletters="newsletters" />

        <podcasts :podcasts="podcasts" />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Topic } from "@/lib/Topic";
import { supabase } from "@/lib/supabase";
import { Newsletter } from "@/lib/Newsletter";
import { Podcast } from "@/lib/Podcast";
import { Community } from "@/lib/Community";
import { Blog } from "@/lib/Blog";

export default defineComponent({
  name: "App",
  props: {
    id: {
      type: String,
    },
  },
  async setup(props) {
    if (!props.id) return;

    const topic = ref<Topic | null>(null);
    const newsletters = ref<Newsletter[]>([]);
    const podcasts = ref<Podcast[]>([]);
    const communities = ref<Community[]>([]);
    const blogs = ref<Blog[]>([]);

    const fetchTopic = async () => {
      const { data, error } = await supabase
        .from("vw_topic_overview")
        .select("*")
        .eq("id", props.id)
        .single();

      topic.value = data;

      if (data.podcasts) {
        podcasts.value = data.podcasts.filter((it: Podcast) => it) || [];
      }
      if (data.newsletters) {
        newsletters.value =
          data.newsletters.filter((it: Newsletter) => it) || [];
      }
      if (data.blogs) {
        blogs.value = data.blogs.filter((it: Blog) => it) || [];
      }
      if (data.communities) {
        communities.value =
          data.communities.filter((it: Community) => it) || [];
      }
    };

    onMounted(fetchTopic);

    return {
      topic,
      fetchTopic,
      podcasts,
      newsletters,
      blogs,
      communities,
    };
  },
});
</script>

<style scoped>
.container {
  @apply mx-auto max-w-7xl px-4;
}
</style>
