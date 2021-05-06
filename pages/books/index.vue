<template>
  <div class="container">
    <h2 class="text-2xl font-medium tracking-wide">Find books</h2>
    <form @submit.prevent="reset" class="flex mt-2">
      <input
        v-model="searchTerm"
        class="input w-full"
        placeholder="Enter a search term"
      />

      <button type="submit" class="button primary ml-3" :disabled="loading">
        Search
      </button>
    </form>

    <loading-indicator class="my-4" v-if="loading" />

    <book-list class="mt-8" :books="books" />

    <div v-if="hasMore && !loading" class="flex justify-center mt-5">
      <button class="button" @click="$fetch">Load more</button>
    </div>
    <div v-else-if="!loading && !books.length">
      No results found. Please try a different search.
    </div>
    <div v-else-if="error">
      Uh oh. An error occured. Please try again in a moment or contact us if it
      still does not work.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from '@nuxtjs/composition-api'
import { SupabaseClient } from '@supabase/supabase-js'
import { Book } from '~/lib/Book'
import usePagedList from '~/composables/usePagedList'

export default defineComponent({
  setup() {
    const supabase = inject<SupabaseClient>('supabase')!
    const searchTerm = ref<string>('')

    const {
      dataList: books,
      loading,
      hasMore,
      reset,
      error,
    } = usePagedList<Book>({
      pageSize: 15,
      fetch: (rangeStart, rangeEnd) => {
        return supabase
          .from<Book>('book')
          .select('*', { count: 'exact' })
          .ilike('info->>description', `%${searchTerm.value}%`)
          .ilike('info->>title', `%${searchTerm.value}%`)
          .order('id')
          .range(rangeStart, rangeEnd)
      },
    })

    return {
      searchTerm,
      books,
      loading,
      hasMore,
      reset,
      error,
    }
  },
})
</script>

