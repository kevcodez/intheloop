<template>
  <div v-if="books && books.length">
    <div class="space-y-4">
      <a
        target="_blank"
        :href="book.url"
        class="flex grow items-center rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400 px-4 py-4"
        v-for="book in books"
        :key="book.url"
      >
        <img class="w-12 h-12 mr-5 object-contain" :src="book.image" />
        <div>
          <span class="font-semibold">{{ book.title }} </span>
          <span class="ml-2 text-gray-500">{{ $filters.formatDate(book.publishedAt, 'MMMM YYYY') }}</span>
          <p class="">{{ truncate(book.description) }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Book } from "../lib/Book";

export default defineComponent({
  name: "Books",
  props: {
    books: {
      type: Object as PropType<Book[]>,
      required: true,
    },
  },
  setup() {
    const truncate = (input: string) => {
      if (input.length > 190) {
        return input.substring(0, 190) + "...";
      }
      return input;
    };

    return {
      truncate,
    };
  },
});
</script>