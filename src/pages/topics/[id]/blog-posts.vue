<template>
  <div class="space-y-6">
    <div v-for="post in blogPosts" :key="post.link">
      <a
        :href="post.blog_post_info.link"
        target="_blank"
        class="grid grid-cols-4 grow items-center ring-2 ring-gray-200 "
      >
        <div class="px-4 py-2 col-span-1">
          <img
            :src="post.blog_post_info.image"
          />
        </div>
        <div class="p-4 col-span-3">
          <p>{{ post.blog_post_info.title }}</p>
          <p class="text-sm text-gray-700">
            Published on {{ post.blog_info.name }} -
            {{ $filters.relative(post.blog_post_info.publishedAt) }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive, ref } from "vue";
import { Topic } from "@/lib/Topic";
import { supabase } from "@/lib/supabase";

export default defineComponent({
  name: "TopicBlogPosts",
  props: {
    topic: Object as PropType<Topic>,
  },
  setup(props: any) {
    const blogPosts = ref<any>([]);
    const fetchBlogPosts = async () => {
      const { data, error } = await supabase
        .from("vw_topic_blog_posts")
        .select("*")
        .eq("topic_id", props.topic.id);

      blogPosts.value = data;
    };

    onMounted(fetchBlogPosts);

    return {
      blogPosts,
      fetchBlogPosts,
    };
  },
});
</script>