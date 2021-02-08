<template>
  <div>
    <h3 class="text-2xl mb-4">Blogs</h3>
    <div class="space-y-2">
      <div class="space-y-2" v-for="blog in blogs" :key="blog.name">
        <a :href="blog.url" target="_blank" class="flex">
          <img
            v-if="blog.url.includes('dev.to')"
            src="/@/assets/icons/dev-dot-to.svg"
            class="h-6 w-6 mr-2"
          />
          <img
            v-else-if="blog.url.includes('medium.com')"
            src="/@/assets/icons/medium.svg"
            class="h-6 w-6 mr-2"
          />
          <img v-else src="/@/assets/icons/link.svg" class="h-6 w-6 mr-2" />
          {{ blog.name }}
        </a>

        <div v-for="post in blog.latestPosts" :key="post.link">
          <a :href="post.link" target="_blank" class="flex flex-row grow">
            <img :src="post.image" class="h-12 w-12 mr-4" />
            <div>
              <p>{{ post.title }}</p>
              <p class="text-sm text-gray-700">
                {{ $filters.relative(post.publishedAt) }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Blog } from "../lib/Blog";

export default defineComponent({
  name: "Blogs",
  props: {
    blogs: {
      type: Object as PropType<Blog[]>,
      required: true,
    },
  },
});
</script>