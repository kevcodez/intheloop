<template>
  <div class="mt-10">
    <div class="bg-purple-800 text-white">
      <div class="container flex flex-col">
        <h2 class="text-3xl font-extrabold text-white tracking-tight">
          Stay in the loop
        </h2>
        <p class="mt-4 max-w-3xl text-lg">
          Keeping up with the ever-changing developer ecosystem can be tough.
        </p>
        <div
          class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
        >
          <div>
            <div>
              <span
                class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10"
              >
                <link-icon class="h-6 w-6 text-white" />
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">Links &amp; Communities</h3>
              <p class="mt-2 text-base ">
                Quickly see the most important links and find communities to engage with. 
              </p>
            </div>
          </div>

          <div>
            <div>
              <span
                class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10"
              >
                <twitter-icon class="h-6 w-6 text-white" />
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">
                Tweets
              </h3>
              <p class="mt-2 text-base">
                Don't miss the most discussed, popular or controversial tweets.
              </p>
            </div>
          </div>

          <div>
            <div>
              <span
                class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10"
              >
                <tag-icon class="h-6 w-6 text-white" />
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">Releases</h3>
              <p class="mt-2 text-base">
                Get an overview of the latest release and their changelog.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <topic-list :topics="topics" />
    </div>
  </div>
</template>

<script lang="ts">
import { supabase } from "@/lib/supabase";
import { Topic } from "@/lib/Topic";
import { defineComponent, onMounted, ref } from "vue";
import LinkIcon from "@/assets/icons/link.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import TagIcon from "@/assets/icons/tag.svg";

export default defineComponent({
  components: {
    LinkIcon,
    TwitterIcon,
    TagIcon,
  },
  setup() {
    const topics = ref<Topic[]>([]);

    const loadTopics = async () => {
      const { data } = await supabase.from<Topic>("topic").select("*");

      topics.value = data!;
    };

    onMounted(loadTopics);

    return {
      topics,
      loadTopics,
    };
  },
});
</script>

<style>
.container {
  @apply max-w-7xl mx-auto py-12 lg:py-12 px-4 xl:px-0;
}
</style>
