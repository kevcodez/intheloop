<template>
  <div class="container">
    <h2 class="text-2xl font-medium tracking-wide">Find topics to follow</h2>
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

    <topic-list class="mt-8" :topics="topics" />

    <div v-if="hasMore && !loading" class="flex justify-center mt-5">
      <button class="button" @click="$fetch">Load more</button>
    </div>
    <div v-else-if="!loading && !topics.length">
      No results found. Please try a different search.
    </div>
    <div v-else-if="error">
      Uh oh. An error occured. Please try again in a moment or contact us if it
      still does not work.
    </div>

    <div class="mt-8" v-if="!loading">
      Missing your favorite tech? Head over to the
      <nuxt-link to="/roadmap" class="link">Roadmap</nuxt-link> to see if your
      topic is up next. If it's not on the list, submit it as an idea via the
      <nuxt-link to="/roadmap" class="link">Roadmap</nuxt-link>.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from '@nuxtjs/composition-api'
import { SupabaseClient } from '@supabase/supabase-js'
import { Topic } from '~/lib/Topic'
import usePagedList from '~/composables/usePagedList'

export default defineComponent({
  setup() {
    const supabase = inject<SupabaseClient>('supabase')!
    const searchTerm = ref<string>('')

    const {
      dataList: topics,
      loading,
      hasMore,
      reset,
      error,
    } = usePagedList<Topic>({
      pageSize: 15,
      fetch: (rangeStart, rangeEnd) => {
        // TODO make sure the query is correct (live filter should be and, rest should be or)
        return supabase
          .from<Topic>('topic')
          .select('*', { count: 'exact' })
          .ilike('info->>description', `%${searchTerm.value}%`)
          .ilike('info->>name', `%${searchTerm.value}%`)
          .eq('info->>live', 'true')
          .order('id')
          .range(rangeStart, rangeEnd)
      },
    })

    return {
      searchTerm,
      topics,
      loading,
      hasMore,
      reset,
      error,
    }
  },
})
</script>

