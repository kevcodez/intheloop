<template>
  <div class="space-y-6">
    <div v-for="post in blogPosts" :key="post.link">
      <a
        :href="post.blog_post_info.link"
        target="_blank"
        class=" grid grid-cols-5 grow items-center rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400"
      >
        <div class="px-4 py-2 col-span-1 flex justify-center items-center">
          <img
            v-if="post.blog_post_info.image"
            class="max-h-20"
            :src="post.blog_post_info.image"
          />
          <ghost-icon class="h-12 text-gray-600" v-else />
        </div>
        <div class="p-4 col-span-4">
          <p>{{ post.blog_post_info.title }}</p>
          <p class="text-sm text-gray-700">
            Published on {{ post.blog_info.name }} -
            {{ $filters.relative(post.blog_post_info.publishedAt) }}
          </p>
          <div
            class="flex flex-row flex-wrap gap-2 mt-1"
            v-if="
              post.blog_post_info.categories &&
              post.blog_post_info.categories.length > 0
            "
          >
            <div
              v-for="category in post.blog_post_info.categories"
              :key="category"
              class="rounded bg-indigo-100 text-gray-900 px-2 py-1 text-xs"
            >
              {{ category }}
            </div>
          </div>
        </div>
      </a>
    </div>

    <div v-if="hasMore && !loading" class="flex justify-center">
      <button class="button" @click="fetchBlogPosts">Load more</button>
    </div>

    <loading-indicator v-if="loading" class="py-4 text-gray-800" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from "vue";
import { Topic } from "@/lib/Topic";
import { supabase } from "@/lib/supabase";
import GhostIcon from "@/assets/icons/ghost.svg";

export default defineComponent({
  name: "TopicBlogPosts",
  components: {
    GhostIcon,
  },
  props: {
    topic: Object as PropType<Topic>,
  },
  setup(props: any) {
    const currentPage = ref(0);
    const blogPosts = ref<any>([]);
    const hasMore = ref(true);
    const loading = ref(true)

    const fetchBlogPosts = async () => {
      currentPage.value++;
      const pageSize = 10;
      const pageStart = (currentPage.value - 1) * pageSize;
      loading.value = true

      const { data, error, count } = await supabase
        .from("vw_topic_blog_posts")
        .select("*", { count: "exact" })
        .eq("topic_id", props.topic.id)
        .eq('language', 'en')
        .range(pageStart, pageStart + pageSize - 1);

loading.value = false
      blogPosts.value = blogPosts.value.concat(data);
      hasMore.value = count!! > blogPosts.value.length;
    };

    onMounted(fetchBlogPosts);

    return {
      blogPosts,
      fetchBlogPosts,
      hasMore,
      loading
    };
  },
});
</script>