<template>
  <div class="page-container">
    <loading-indicator v-if="pending" />
    <div v-else-if="error">An error occured while fetching</div>
    <div v-else>
      <book-details :book="data.book" />

      <div v-if="data.relatedBooks && data.relatedBooks.length" class="mt-8 md:mt-12">
        <h3 class="text-lg text-medium tracking-wide mb-2">Related Books</h3>
        <book-list :books="data.relatedBooks" />
      </div>

      <div v-if="data.topics && data.topics.length" class="mt-8 md:mt-12">
        <h3 class="text-lg text-medium tracking-wide mb-2">Related Topics</h3>
        <topic-list :topics="data.topics" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Database } from '~/lib/database.types'

const route = useRoute()
const supabase = useSupabaseClient<Database>()
const bookId = route.params.bookId

// TODO seo
// TODO handle 404
const { pending, error, data } = useAsyncData(async () => {
  const { data } = await supabase
    .from('book')
    .select('*')
    .eq('id', bookId)
    .limit(1)
    .single()

  if (data) {
    const fetchTopics = supabase
      .from('topic')
      .select('*')
      .in('id', data.topics)

    const fetchRelatedBooks = supabase
      .from('book')
      .select('*')
      .contains('topics', data.topics)
      .neq('id', data.id)
      .limit(4)

    const [
      { data: topicsFromDb },
      { data: relatedBooksFromDb },
    ] = await Promise.all([fetchTopics, fetchRelatedBooks])

    return {
      book: data,
      relatedBooks: relatedBooksFromDb,
      topics: topicsFromDb
    }
  }
})
</script>