<template>
  <div v-if="blogs && blogs.length">
    <h3 class="font-medium text-xl">Blogs</h3>
    <div class="space-y-2 mt-4">
      <div
        class="flex flex-row justify-between"
        v-for="blog in blogs"
        :key="blog.name"
      >
        <a :href="blog.url" target="_blank" class="flex">
          <dev-dot-to-icon
            v-if="blog.url.includes('dev.to')"
            class="h-6 w-6 mr-2"
          />
          <medium-icon
            v-else-if="blog.url.includes('medium.com')"
            class="h-6 w-6 mr-2"
          />
          <hashnode-icon
            v-else-if="blog.url.includes('hashnode.com')"
            class="h-6 w-6 mr-2"
          />
          <link-icon v-else class="h-6 w-6 mr-2" />
          <span class="font-semibold">{{ blog.name }}</span>
        </a>
        <span class="text-xs bg-gray-200 ml-2 px-2 py-1" v-if="blog.official"
          >Official
          </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Blog } from "../lib/Blog";
import DevDotToIcon from "../assets/icons/dev-dot-to.svg";
import MediumIcon from "../assets/icons/medium.svg";
import LinkIcon from "../assets/icons/link.svg";
import HashnodeIcon from "../assets/icons/hashnode.svg";

export default defineComponent({
  name: "Blogs",
  components: {
    DevDotToIcon,
    MediumIcon,
    LinkIcon,
    HashnodeIcon
  },
  props: {
    blogs: {
      type: Object as PropType<Blog[]>,
      required: true,
    },
  },
});
</script>