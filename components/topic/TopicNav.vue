<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <select id="tabs" name="tabs"
        class="block w-full px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        @input="changeNav">
        <option value="" selected>Tweets</option>
        <option value="/blog-posts">Blog Posts</option>
        <option value="/releases">Latest Releases</option>
        <option value="/courses" v-if="showCoursesTab">Courses</option>
        <option value="/books" v-if="showBooksTab">Books</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <nav class="flex space-x-4" aria-label="Tabs">
        <nuxt-link exact-active-class="bg-gray-200 text-gray-700" :to="`/topics/${topic.id}`"
          class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-md rounded-md">
          Tweets
        </nuxt-link>
        <nuxt-link exact-active-class="bg-gray-200 text-gray-700" :to="`/topics/${topic.id}/blog-posts`"
          class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-md rounded-md">
          Blog Posts
        </nuxt-link>
        <!-- Current: "bg-gray-100 text-gray-700", Default: "text-gray-500 hover:text-gray-700" -->
        <nuxt-link exact-active-class="bg-gray-200 text-gray-700" :to="`/topics/${topic.id}/releases`"
          class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-md rounded-md">
          Latest Releases
        </nuxt-link>
        <nuxt-link exact-active-class="bg-gray-200 text-gray-700" :to="`/topics/${topic.id}/courses`"
          class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-md rounded-md" v-if="showCoursesTab">
          Courses
        </nuxt-link>
        <nuxt-link exact-active-class="bg-gray-200 text-gray-700" :to="`/topics/${topic.id}/books`"
          class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-md rounded-md" v-if="showBooksTab">
          Books
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Topic } from '@/lib/Topic'
import { PropType } from 'vue'

const props = defineProps({
  topic: {
    type: Object as PropType<Topic>,
    required: true,
  },
})


const router = useRouter()

const showBooksTab = computed(() => props.topic.book_ids && props.topic.book_ids.length)

const showCoursesTab = computed(() => props.topic.course_ids && props.topic.course_ids.length)

const changeNav = (e: any) => {
  const navigateTo = e.target.value
  router.push(`/topics/${props.topic.id}${navigateTo}`)
}
</script>
