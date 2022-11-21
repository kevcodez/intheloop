<template>
  <div class="container">
    <h2 class="text-2xl font-medium tracking-wide">Find topics to follow</h2>
    <form @submit.prevent="reset" class="flex mt-2">
      <input v-model="searchTerm" class="input w-full" placeholder="Enter a search term" />

      <button type="submit" class="button dark ml-3" :disabled="loading">
        Search
      </button>
    </form>

    <loading-indicator class="my-4" v-if="loading" />

    <topic-list class="mt-8" :topics="topics.list" />

    <div v-if="topics.hasMore && !loading" class="flex justify-center mt-5">
      <button class="button" @click="refreshNuxtData()">Load more</button>
    </div>
    <div v-else-if="!loading && !topics.list.length">
      No results found. Please try a different search.
    </div>
    <div v-else-if="error">
      Uh oh. An error occured. Please try again in a moment or contact us if it
      still does not work.
    </div>

    <div class="mt-8" v-if="!loading">
      Missing your favorite tech? DM me on <a class="link" href="https://twitter.com/kevcodez">Twitter</a>.
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Topic } from '~/lib/Topic'
import usePagedList from '~/composables/usePagedList'
import { Database } from '~/lib/database.types'

const supabase = useSupabaseClient<Database>()
const searchTerm = ref<string>('')

const {
  data: topics,
  loading,
  reset,
  error,
} = await usePagedList<Topic>({
  pageSize: 15,
  fetch: (rangeStart, rangeEnd) => {
    // TODO make sure the query is correct (live filter should be and, rest should be or)
    return supabase
      .from('topic')
      .select('*', { count: 'exact' })
      .ilike('info->>description', `%${searchTerm.value}%`)
      .ilike('info->>name', `%${searchTerm.value}%`)
      .eq('info->>live', 'true')
      .order('id')
      .range(rangeStart, rangeEnd)
  },
})
</script>
