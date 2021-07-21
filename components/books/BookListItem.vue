<template>
  <nuxt-link
    :to="`/books/${book.id}`"
    class="flex flex-col items-center px-4 py-4 bg-white border-b border-gray-300 grow hover:border-gray-400"
  >
    <img class="object-contain w-full max-h-40 mr-5" :src="book.info.image" />
    <div class="text-left self-start mt-3">
      <span class="font-semibold">{{ book.info.title }} </span>
      <span class="text-gray-500 block">{{
        book.info.publishedAt | formatDate('MMMM YYYY')
      }}</span>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Book } from '~/lib/Book'

export default defineComponent({
  props: {
    book: {
      required: true,
      type: Object as PropType<Book>,
    },
  },
  setup() {
    const truncate = (input: string) => {
      const maxLength = 250
      if (input.length > maxLength) {
        return input.substring(0, maxLength) + '...'
      }
      return input
    }

    return {
      truncate,
    }
  },
})
</script>


