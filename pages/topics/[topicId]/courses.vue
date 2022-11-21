<template>
  <div class="space-y-5">
    <loading-indicator v-if="pending" />
    <topic-courses v-else :courses="courses" />
  </div>
</template>

<script lang="ts" setup>
import { Topic } from '@/lib/Topic'
import { PropType } from 'vue'
import { Database } from '~/lib/database.types'

const props = defineProps({
  topic: {
    type: Object as PropType<Topic>,
    required: true,
  },
})

const supabase = useSupabaseClient<Database>()
const { pending, data: courses } = useAsyncData(async () => {
  const { data } = await supabase
    .from('course')
    .select('*')
    .in('id', props.topic.course_ids)

  return data || []
})
</script>
