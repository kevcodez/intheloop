<template>
  <div class="space-y-5">
    <topic-books v-if="!$fetchState.pending" :books="books" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  PropType,
  ref,
  useFetch,
} from '@nuxtjs/composition-api'
import { Topic } from '@/lib/Topic'
import { Book } from '~/lib/Book'
import { SupabaseClient } from '@supabase/supabase-js'

export default defineComponent({
  props: {
    topic: {
      type: Object as PropType<Topic>,
      required: true,
    },
  },

  setup(props) {
    const books = ref<Book[]>([])
    const supabase = inject<SupabaseClient>('supabase')!
    useFetch(async () => {
      const { data } = await supabase
        .from('book')
        .select('*')
        .in('id', props.topic.book_ids)

      books.value = data || []
    })

    return {
      books,
    }
  },
})
</script>
