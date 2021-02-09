<template>
  <div>
    <div class="flex justify-between">
      <h3 class="text-2xl mb-4">Books</h3>
      <!--a href="">See all</a-->
    </div>
    <div class="space-y-8">
      <a
        target="_blank"
        :href="book.url"
        class="flex grow items-center"
        v-for="book in books"
        :key="book.url"
      >
        <img class="w-12 h-12 mr-5 object-contain" :src="book.image" />
        <div>
          <span class="font-semibold">{{ book.title }}</span>
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
      if (input.length > 120) {
        return input.substring(0, 120) + "...";
      }
      return input;
    };

    return {
      truncate,
    };
  },
});
</script>