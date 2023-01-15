<template>
  <div>
    <div class="grid gap-8 md:grid-cols-2">
      <div v-for="release in releases.list" :key="release.info.version">
        <div class="flex justify-between">
          <div class="flex flex-row font-medium tracking-wide text-gray-800">
            <tag-icon class="w-6 h-6" />
            <span class="ml-2">{{ release.info.version }}</span>
          </div>
          <div>
            <span class="text-xs">{{
              $relativeDate(release.info.publishedAt)
            }}</span>
          </div>
        </div>
        <div class="mt-2" v-if="release.info.releaseNotesUrl">
          <a :href="release.info.releaseNotesUrl" target="_blank">View Changelog </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Topic } from "@/lib/Topic";
import { PropType } from "vue";
import TagIcon from "~/assets/icons/tag.svg?component";
import usePagedList from '~/composables/usePagedList'
import { Database } from '~/lib/database.types'


const props = defineProps({
  topic: {
    type: Object as PropType<Topic>,
    required: true,
  },
},)

const supabase = useSupabaseClient<Database>()

const { data: releases, loading, reset } = await usePagedList({
  pageSize: 12,
  fetch: (rangeStart, rangeEnd) => {
    return supabase
      .from('vw_releases')
      .select('*', { count: 'exact' })
      .eq('topic', props.topic.id)
      .range(rangeStart, rangeEnd)
  }
});

watch(releases, (newVal) => console.log('newVal ' + newVal), { deep: true })
</script>

