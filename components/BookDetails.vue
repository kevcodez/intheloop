<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="order-2 md:order-1">
      <h2 class="text-2xl font-medium tracking-wide">
        {{ book.info.title }}
      </h2>
      <div class="prose" v-html="book.info.description"></div>
    </div>
    <div class="flex flex-col items-center order-1 md:order-2">
      <img
        :src="book.info.image"
        class="self-center object-contain max-h-40 md:max-h-60"
      />

      <div class="my-4 text-center text-sm text-gray-700">
        <span class="mt-1 block"
          >Written by
          {{ book.info.authors.map((it) => it.name).join(', ') }}</span
        >
        <span class="mt-1 block"
          >Published {{ book.info.publishedAt | formatDate('MMMM YYYY') }}</span
        >
      </div>

      <div class="flex flex-col space-y-3">
        <book-buy-link
          v-for="buyLink in book.info.buyLinks"
          :buy-link="buyLink"
          :key="buyLink.url"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Book } from '~/lib/Book'

export default defineComponent({
  props: {
    book: {
      required: true,
      type: Object as PropType<Book>,
    },
  },
})
</script>
