<template>
  <nuxt-link :to="`/books/${book.id}`"
    class="flex flex-col items-center px-4 py-4 bg-white border-b border-gray-300 grow hover:border-gray-400">
    <img class="object-contain w-full max-h-40 mr-5" :src="book.info.image" />
    <div class="text-left self-start mt-3">
      <span class="font-semibold">{{ book.info.title }} </span>
      <span class="text-gray-500 block">{{
          $formatDate(book.info.publishedAt, 'MMMM YYYY')
      }}</span>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { Book } from '~/lib/Book'

const props = defineProps({
  book: {
    required: true,
    type: Object as PropType<Book>,
  },
})
</script>


