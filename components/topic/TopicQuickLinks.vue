<template>
  <div class="">
    <div class="flex flex-row space-x-3">

      <a :href="topic.info.documentation" target="_blank" class="flex flex-row link-default"> <academic-cap-icon
          class="h-5 w-5 mr-2" /> Docs</a>

      <a :href="topic.info.issueTracker" target="_blank" class="flex flex-row link-default"><bug-icon
          class="h-5 w-5 mr-2" />
        Issue&nbsp;Tracker</a>


      <a v-if="topic.info.playground" :href="topic.info.playground" target="_blank" class="flex flex-row link-default">
        <play-line-icon class="h-5 w-5 mr-2" /> Playground</a>


      <a v-if="topic.info.changelog" :href="topic.info.changelog" target="_blank" class="flex flex-row link-default">
        <file-list-icon class="h-5 w-5 mr-2" />Changelog</a>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { Topic } from '@/lib/Topic'
import PlayLineIcon from '~/assets/icons/play-line.svg?component'
import FileListIcon from '~/assets/icons/file-list.svg?component'
import BugIcon from '~/assets/icons/bug.svg?component'
import AcademicCapIcon from '~/assets/icons/academic-cap.svg?component'
import { PropType } from 'vue'

const props = defineProps({
  topic: {
    type: Object as PropType<Topic>,
    required: true,
  },
})
</script>
