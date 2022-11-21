<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div class="md:col-span-1 items-center flex justify-center">
      <img :src="book.info.image" class="self-center object-contain max-h-40 md:max-h-60" />
    </div>
    <div class="md:col-span-3">
      <h2 class="text-2xl font-medium tracking-wide">
        {{ book.info.title }}
      </h2>
      <div class="py-2 text-sm text-gray-700">
        <span class="mt-1 block">Written by
          {{ book.info.authors.map((it) => it.name).join(', ') }}</span>
        <span class="mt-1 block">Published {{ $formatDate(book.info.publishedAt, 'MMMM YYYY') }}</span>
      </div>
      <scrollable-container class="py-2 w-full" :max-height="320">
        <div class="prose p-0 w-full max-w-full" v-html="book.info.description"></div>
      </scrollable-container>

      <div class="flex flex-row space-x-3 mt-4">
        <book-buy-link v-for="buyLink in book.info.buyLinks" :buy-link="buyLink" :key="buyLink.url" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Book } from '~/lib/Book'

const props = defineProps({
  book: {
    required: true,
    type: Object as PropType<Book>,
  },
})
</script>
