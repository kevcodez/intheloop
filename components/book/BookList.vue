<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    <book-list-item :key="book.id" v-for="book in books" :book="book" />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Book } from '~/lib/Book'

const props = defineProps({
  books: {
    required: true,
    type: Array as PropType<Book[]>,
  },
})
</script>


