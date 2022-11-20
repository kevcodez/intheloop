<template>
  <div class="mt-2 flex flex-col justify-center items-center">
    <div v-for="developer in developers" :key="developer.website">
      <a :href="developer.website" target="_blank" class="flex flex-col items-center">
        <img :src="developer.logoUrl" class="h-20 w-40 mr-2 object-contain" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" sezup>
import { DeveloperInfo } from "@/lib/Topic";
import { PropType } from "vue";

const props = defineProps({
  props: {
    developers: Array as PropType<DeveloperInfo[]>,
  },
})
</script>
