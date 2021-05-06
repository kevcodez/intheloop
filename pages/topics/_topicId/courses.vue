<template>
  <div class="space-y-5">
    <topic-courses v-if="!$fetchState.pending" :courses="courses" />
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
import { Course } from '~/lib/Course'
import { SupabaseClient } from '@supabase/supabase-js'

export default defineComponent({
  props: {
    topic: {
      type: Object as PropType<Topic>,
      required: true,
    },
  },

  setup(props) {
    const courses = ref<Course[]>([])
    const supabase = inject<SupabaseClient>('supabase')!
    console.log(props.topic.course_ids)
    useFetch(async () => {
      const { data } = await supabase
        .from<Course>('course')
        .select('*')
        .in('id', props.topic.course_ids)

        courses.value = data || []
    })

    return {
      courses,
    }
  },
})
</script>
