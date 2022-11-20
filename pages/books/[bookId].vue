<template>
  <div class="container">
    <div v-if="pending">
      <loading-indicator />
    </div>
    <div v-else-if="error">An error occured while fetching</div>
    <div v-else>
      <book-details :book="book" />

      <div v-if="relatedBooks && relatedBooks.length" class="mt-8 md:mt-12">
        <h3 class="text-lg text-medium tracking-wide mb-2">Related Books</h3>
        <book-list :books="relatedBooks" />
      </div>

      <div v-if="topics && topics.length" class="mt-8 md:mt-12">
        <h3 class="text-lg text-medium tracking-wide mb-2">Related Topics</h3>
        <topic-list :topics="topics" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Book } from '~/lib/Book'
import { Topic } from '~/lib/Topic'
import { Database } from '~/lib/database.types'

const route = useRoute()
const supabase = useSupabaseClient<Database>()
const bookId = route.params.bookId

const book = ref<Book | null>()
const topics = ref<Topic[]>([])
const relatedBooks = ref<Book[]>([])

// TODO seo
// TODO handle 404
const { pending, error } = useAsyncData(async () => {
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

    book.value = data
    relatedBooks.value = relatedBooksFromDb || []
    topics.value = topicsFromDb || []
  }
})
</script>