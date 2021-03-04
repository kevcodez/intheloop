<template>
  <div class="space-y-6">
    <div
      v-for="tweet in tweets"
      :key="tweet.id"
      class="rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400"
    >
      <a
        :href="`https://twitter.com/${tweet.user.username}/status/${tweet.id}`"
        target="_blank"
      >
        <div class="flex flex-shrink-0 p-4 pb-0">
          <a href="#" class="flex-shrink-0 group block">
            <div class="flex items-center">
              <div>
                <img
                  class="inline-block h-10 w-10 rounded-full"
                  :src="tweet.user.profile_image_url"
                  alt=""
                />
              </div>
              <div class="ml-2">
                <p class="text-base leading-6 font-medium text-gray-700">
                  {{ tweet.user.name }}
                  <span
                    class="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    <span>@{{ tweet.user.username }}</span> ·
                    <span>{{ $filters.relative(tweet.created_at) }}</span>
                  </span>
                </p>
              </div>
            </div>
          </a>
        </div>

        <div class="pl-16">
          <p
            class="text-base width-auto font-medium text-gray-700 flex-shrink pr-4"
            v-html="textToHtml(tweet.text)"
          ></p>

          <div class="flex">
            <div class="w-full">
              <div class="flex items-center">
                <div class="flex-1 text-center">
                  <div
                    class="mt-1 group flex items-center text-gray-500 px-3 text-base leading-6 font-medium rounded-full"
                  >
                    <svg
                      class="text-center h-5 w-5 mr-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <path
                          d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                        ></path>
                      </g>
                    </svg>
                    <span class="text-sm">{{ tweet.public_metrics.reply_count }}</span>
                  </div>
                </div>

                <div class="flex-1 text-center py-1 m-2">
                  <div
                    class="mt-1 group flex items-center text-gray-500 px-3 text-base leading-6 font-medium rounded-full"
                  >
                    <svg
                      class="text-center h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <path
                          d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                        ></path>
                      </g>
                    </svg>
                    <span class="text-sm">{{
                      tweet.public_metrics.retweet_count +
                      tweet.public_metrics.quote_count
                    }}</span>
                  </div>
                </div>

                <div class="flex-1 text-center py-1 m-2">
                  <div
                    class="mt-1 group flex items-center text-gray-500 px-3 text-base leading-6 font-medium rounded-full"
                  >
                    <svg
                      class="text-center h-5 w-5 mr-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <path
                          d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
                        ></path>
                      </g>
                    </svg>

                    <span class="text-sm">{{ tweet.public_metrics.like_count }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from "vue";
import { Topic } from "@/lib/Topic";
import TwitterIcon from "@/assets/icons/twitter.svg";
import ky from "ky";

export default defineComponent({
  name: "Tweets",
  components: {
    TwitterIcon,
  },
  props: {
    topic: Object as PropType<Topic>,
  },
  setup(props: any) {
    const currentPage = ref(0);
    const tweets = ref<any>([]);
    const hasMore = ref(true);

    const fetchTweets = async () => {
      currentPage.value++;

      const response = await ky
        .post(
          "https://europe-west1-intheloop-dev.cloudfunctions.net/getTweetsByTopic",
          {
            json: {
              topic: props.topic.id,
              page: currentPage.value,
            },
          }
        )
        .json<any>();

      tweets.value = tweets.value.concat(response.tweets);
      hasMore.value = response.hasMore;
    };

    const textToHtml = (text: string) => {
      return text.replaceAll(
        /(#\w+)/g,
        `<span class="text-blue-400">$1</span>`
      );
    };

    onMounted(fetchTweets);

    return {
      tweets,
      fetchTweets,
      hasMore,
      textToHtml,
    };
  },
});
</script>