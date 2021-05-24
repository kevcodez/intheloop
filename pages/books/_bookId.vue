<template>
  <div class="container">
    <div v-if="$fetchState.pending">
      <loading-indicator />
    </div>
    <div v-else-if="$fetchState.error">An error occured while fetching</div>
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

<script lang="ts">
import {
  defineComponent,
  inject,
  onMounted,
  ref,
  useFetch,
  useRoute,
} from '@nuxtjs/composition-api'
import { SupabaseClient } from '@supabase/supabase-js'
import { Book } from '~/lib/Book'
import { Topic } from '~/lib/Topic'

export default defineComponent({
  setup() {
    const route = useRoute()
    const supabase = inject<SupabaseClient>('supabase')!
    const bookId = route.value.params.bookId

    const book = ref<Book | null>()
    const topics = ref<Topic[]>([])
    const relatedBooks = ref<Book[]>([])

    // TODO seo
    // TODO handle 404
    useFetch(async () => {
      const { data } = await supabase
        .from<Book>('book')
        .select('*')
        .eq('id', bookId)
        .limit(1)
        .single()

      if (data) {
        const fetchTopics = supabase
          .from<Topic>('topic')
          .select('*')
          .in('id', data.topics)

        const fetchRelatedBooks = supabase
          .from<Book>('book')
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

    return {
      book,
      topics,
      relatedBooks,
    }
  },
})
</script>