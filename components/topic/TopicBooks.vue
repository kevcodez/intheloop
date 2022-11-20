<template>
  <div class="space-y-4">
    <nuxt-link :to="`/books/${book.id}`"
      class="flex items-center px-4 py-4 bg-white border border-gray-300 rounded-lg shadow-sm grow hover:border-gray-400"
      v-for="book in books" :key="book.id">
      <img class="object-contain w-40 h-40 mr-5" :src="book.info.image" />
      <div>
        <span class="font-semibold">{{ book.info.title }} </span>
        <span class="ml-2 text-gray-500">{{
            $formatDate(book.info.publishedAt, 'MMMM YYYY')
        }}</span>
        <p>{{ truncate(book.info.description) }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { Book } from '~/lib/Book'

const props = defineProps({
  books: {
    type: Array as PropType<Book[]>,
    required: true,
  },
})

const truncate = (input: string) => {
  const maxLength = 350
  if (input.length > maxLength) {
    return input.substring(0, maxLength) + '...'
  }
  return input
}
</script>
