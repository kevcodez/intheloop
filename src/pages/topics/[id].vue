<template>
  <Nav />

  <div>
    <BaseInfo class="container" :topic="topic" />

    <div style="height: 150px; overflow: hidden">
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
        <router-view :topic="topic"></router-view>
      </div>

      <div class="space-y-4">
        <Communities :communities="topic.communities" />

        <Newsletters :newsletters="topic.newsletters" />

        <Podcasts :podcasts="topic.podcasts" />
      </div>
    </div>
  </div>

  <Footer />
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import Nav from "@/components/Nav.vue";
import BaseInfo from "@/components/BaseInfo.vue";
import Blogs from "@/components/Blogs.vue";
import Books from "@/components/Books.vue";
import Communities from "@/components/Communities.vue";
import LatestReleases from "@/components/LatestReleases.vue";
import Newsletters from "@/components/Newsletters.vue";
import Podcasts from "@/components/Podcasts.vue";
import SocialLinks from "@/components/SocialLinks.vue";
import Courses from "@/components/Courses.vue";
import Footer from "@/components/Footer.vue";
import { Topic } from "@/lib/Topic";
import { supabase } from '@/lib/supabase';

export default defineComponent({
  name: "App",
  components: {
    BaseInfo,
    Blogs,
    Books,
    Communities,
    LatestReleases,
    Newsletters,
    Podcasts,
    SocialLinks,
    Nav,
    Footer,
    Courses,
  },
  props: {
    id: {
      type: String,
    },
  },
  async setup(props) {
    if (!props.id)
      return

    const { data, error } = await supabase
    .from('vw_topic_overview')
    .select("*")
    .eq("id", props.id)
    .single()

    console.log(data)

    const topic = ref<Topic>(data)

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
