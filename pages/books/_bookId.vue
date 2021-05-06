<template>
  <div class="container">
    <div v-if="$fetchState.pending">
      <loading-indicator />
    </div>
    <div v-else-if="$fetchState.error">An error occured while fetching</div>
    <book-details v-else :book="book" />

    <!-- TODO book recommendations -->
    <!-- TODO show/link topics -->
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  ref,
  useFetch,
  useRoute,
  useRouter,
} from '@nuxtjs/composition-api'
import { SupabaseClient } from '@supabase/supabase-js'
import { Book } from '~/lib/Book'

export default defineComponent({
  setup() {
    const route = useRoute()
    const supabase = inject<SupabaseClient>('supabase')!
    const bookId = route.value.params.bookId

    const book = ref<Book | null>()

    // TODO seo
    // TODO handle 404
    useFetch(async () => {
      const { data, error } = await supabase
        .from('book')
        .select('*')
        .eq('id', bookId)
        .limit(1)
        .single()

      if (!data) {
        throw Error('not found')
      }
      book.value = data
    })

    return {
      book,
    }
  },
})
</script>