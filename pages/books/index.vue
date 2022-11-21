<template>
  <div class="container">
    <h2 class="text-2xl font-medium tracking-wide">Find books</h2>
    <form v-on:submit.prevent="reset" class="flex mt-2">
      <input v-model="searchTerm" class="input w-full" placeholder="Enter a search term" />

      <button type="submit" class="button dark ml-3" :disabled="loading">
        Search
      </button>
    </form>

    <book-list v-if="!loading" :books="books.list" />

    <LoadingIndicator v-if="loading" class="mt-5" />

    <div v-else-if="books.hasMore" class="flex justify-center ">
      <button class="button" @click="refreshNuxtData()">Load more</button>
    </div>
    <div v-else-if="!books.length">
      No results found. Please try a different search.
    </div>
    <div v-else-if="error">
      Uh oh. An error occured. Please try again in a moment or contact us if it
      still does not work.
    </div>

  </div>
</template>

<script lang="ts" setup>
import { Book } from '~/lib/Book'
import { Database } from '~/lib/database.types';

const supabase = useSupabaseClient<Database>()
const searchTerm = ref<string>('')

const {
  reset,
  error,
  loading,
  data: books,
} = await usePagedList<Book>({
  pageSize: 15,
  fetch: (rangeStart, rangeEnd) => {
    return supabase
      .from('book')
      .select('*', { count: 'exact' })
      .ilike('info->>description', `%${searchTerm.value}%`)
      .ilike('info->>title', `%${searchTerm.value}%`)
      .order('id')
      .range(rangeStart, rangeEnd)
  },
})
</script>

