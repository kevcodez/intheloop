<template>
  <div v-if="blogs && blogs.length">
    <div class="space-y-8">
      <div class="space-y-4" v-for="blog in blogs" :key="blog.name">
        <a :href="blog.url" target="_blank" class="flex">
          <dev-dot-to-icon
            v-if="blog.url.includes('dev.to')"
            class="h-6 w-6 mr-2"
          />
          <medium-icon
            v-else-if="blog.url.includes('medium.com')"
            class="h-6 w-6 mr-2"
          />
          <link-icon v-else class="h-6 w-6 mr-2" />
          <span class="font-semibold">{{ blog.name }}</span>
        </a>

        <div v-for="post in blog.latestPosts" :key="post.link">
          <a :href="post.link" target="_blank" class="flex flex-row grow items-center">
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
import DevDotToIcon from '../assets/icons/dev-dot-to.svg'
import MediumIcon from '../assets/icons/medium.svg'
import LinkIcon from '../assets/icons/link.svg'

export default defineComponent({
  name: "Blogs",
  components: {
    DevDotToIcon,
    MediumIcon,
    LinkIcon
  },
  props: {
    blogs: {
      type: Object as PropType<Blog[]>,
      required: true,
    },
  },
});
</script>