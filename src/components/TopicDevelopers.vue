<template>
  <div class="mt-2 flex flex-col justify-center items-center">
    <div v-for="developer in developers" :key="developer.website">
      <a
        :href="developer.website"
        target="_blank"
        class="flex flex-col items-center"
      >
        <img :src="developer.logoUrl" class="h-14 w-14 mr-2" />
        <span class="mt-2 text-center tracking-wide text-gray-700">{{ developer.name }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Developer } from "@/lib/Topic";

export default defineComponent({
  props: {
    developers: Object as PropType<Developer[]>,
  },
});
</script>
