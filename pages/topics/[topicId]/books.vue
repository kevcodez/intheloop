<template>
  <div class="space-y-5">
    <topic-books v-if="!pending" :books="books" />
  </div>
</template>

<script lang="ts" setup>
import { Topic } from '@/lib/Topic'
import { Book } from '~/lib/Book'
import { PropType } from 'vue'
import { Database } from '~/lib/database.types'

const props = defineProps({
  topic: {
    type: Object as PropType<Topic>,
    required: true,
  },
})

const books = ref<Book[]>([])
const supabase = useSupabaseClient<Database>()
const { pending } = useAsyncData('books', async () => {
  const { data } = await supabase
    .from('book')
    .select('*')
    .in('id', props.topic.book_ids)

  books.value = data || []
})
</script>
