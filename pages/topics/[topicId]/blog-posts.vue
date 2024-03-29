<template>
  <div>
    <div class="flex flex-row space-x-4">
      <button
        @click="switchOfficialOnly(true)"
        class="rounded px-4 py-2"
        :class="[official ? 'bg-gray-700 text-gray-50' : 'bg-gray-200 text-gray-700']"
      >
        Official only
      </button>
      <button
        @click="switchOfficialOnly(false)"
        class="rounded px-4 py-2"
        :class="[!official ? 'bg-gray-700 text-gray-50' : 'bg-gray-200 text-gray-700']"
      >
        Show all
      </button>
    </div>

    <loading-indicator class="mt-4" v-if="loading" />

    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6" v-else>
      <div
        class="items-center rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400"
        v-for="post in blogPosts.list"
        :key="post.link"
      >
        <a class="grid grid-cols-5 grow h-full" :href="post.blog_post_info.link" target="_blank">
          <div class="px-4 py-2 col-span-1 flex justify-center items-center">
            <img v-if="post.blog_post_info.image" class="max-h-20" :src="post.blog_post_info.image" />
            <ghost-icon class="h-12 text-gray-600" v-else />
          </div>
          <div class="p-4 col-span-4 flex flex-col justify-between">
            <div>
              <p class="line-clamp-2">{{ post.blog_post_info.title }}</p>
              <p class="text-sm text-gray-700">
                Published on {{ post.blog_info.name }} -
                {{ $relativeDate(post.blog_post_info.publishedAt) }}
              </p>
            </div>
            <div
              class="flex flex-row flex-wrap gap-2 mt-1"
              v-if="post.blog_post_info.categories && post.blog_post_info.categories.length > 0"
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
    </div>

    <div v-if="blogPosts.hasMore && !loading" class="flex justify-center">
      <button class="button mt-5" @click="reset()">Load more</button>
    </div>

    <loading-indicator v-if="loading" class="py-4 text-gray-800" />
  </div>
</template>

<script lang="ts" setup>
import { Topic } from '~/lib/Topic'
import GhostIcon from '@/assets/icons/ghost.svg?component'
import usePagedList from '~/composables/usePagedList'
import { PropType } from 'vue'
import { Database } from '~/lib/database.types'

const props = defineProps({
  topic: {
    type: Object as PropType<Topic>,
    required: true,
  },
})

const supabase = useSupabaseClient<Database>()

const official = ref(true)

const {
  data: blogPosts,
  loading,
  reset,
} = await usePagedList({
  pageSize: 12,
  fetch: (rangeStart, rangeEnd) => {
    let query = supabase
      .from('vw_topic_blog_posts')
      .select('*', { count: 'exact' })
      .eq('topic_id', props.topic.id)
      .eq('language', 'en')
      .range(rangeStart, rangeEnd)

    if (official.value) {
      query = query.eq('official', official.value)
    }

    return query
  },
})

async function switchOfficialOnly(newValue: boolean) {
  if (newValue !== official.value) {
    official.value = newValue
    reset()
  }
}
</script>
