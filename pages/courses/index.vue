<template>
  <div class="container">
    <h2 class="text-2xl font-medium tracking-wide">Find courses</h2>
    <form @submit.prevent="reset" class="flex mt-2">
      <input v-model="searchTerm" class="input w-full" placeholder="Enter a search term" />

      <button type="submit" class="button dark ml-3" :disabled="loading">
        Search
      </button>
    </form>

    <loading-indicator class="my-4" v-if="loading" />

    <course-list v-else class="mt-8" :courses="data.list" />

    <div v-if="data.hasMore && !loading" class="flex justify-center mt-5">
      <button class="button" @click="refreshNuxtData()">Load more</button>
    </div>
    <div v-if="!loading && !data.list.length">
      No results found. Please try a different search.
    </div>
    <div v-else-if="error">
      Uh oh. An error occured. Please try again in a moment or contact us if it
      still does not work.
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Course } from '~/lib/Course'
import { Database } from '~/lib/database.types'
import usePagedList from '../../composables/usePagedList'

const supabase = useSupabaseClient<Database>()
const searchTerm = ref<string>('')

const {
  data,
  loading,
  reset,
  error,
} = await usePagedList<Course>({
  pageSize: 16,
  fetch: (rangeStart, rangeEnd) => {
    return supabase
      .from('course')
      .select('*', { count: 'exact' })
      .ilike('info->>description', `%${searchTerm.value}%`)
      .ilike('info->>name', `%${searchTerm.value}%`)
      .order('id')
      .range(rangeStart, rangeEnd)
  },
})
</script>

