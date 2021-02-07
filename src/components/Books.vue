<template>
  <div>
    <h3 class="text-2xl">Books</h3>
    <div class="space-y-4">
      <div class="flex" v-for="book in books" :key="book.url">
        <img class="w-20 mr-5" :src="book.image" />
        <div>
          <span class="font-semibold">{{ book.title }}</span>
          <p class="">{{ truncate(book.description) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Books",
  props: {
    books: {
      type: Array,
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