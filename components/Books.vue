<template>
  <div v-if="books && books.length">
    <div class="space-y-4">
      <a
        target="_blank"
        :href="book.url"
        class="flex items-center px-4 py-4 bg-white border border-gray-300 rounded-lg shadow-sm grow hover:border-gray-400"
        v-for="book in books"
        :key="book.url"
      >
        <img class="object-contain w-40 h-40 mr-5" :src="book.image" />
        <div>
          <span class="font-semibold">{{ book.title }} </span>
          <span class="ml-2 text-gray-500">{{ book.publishedAt | formatDate('MMMM YYYY') }}</span>
          <p class="">{{ truncate(book.description) }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import { Book } from "../lib/Book";

export default defineComponent({
  name: "Books",
  props: {
    books: {
      type: Array as PropType<Book[]>,
      required: true,
    },
  },
  setup() {
    const truncate = (input: string) => {
      const maxLength = 350
      if (input.length > maxLength) {
        return input.substring(0, maxLength) + "...";
      }
      return input;
    };

    return {
      truncate,
    };
  },
});
</script>
