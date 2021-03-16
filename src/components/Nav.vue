<template>
  <header class="relative">
    <div class="bg-gray-100 pt-6">
      <nav
        class="relative max-w-7xl mx-auto flex items-center justify-between"
        aria-label="Global"
      >
        <div class="flex items-center flex-1">
          <div class="flex items-center justify-between w-full md:w-auto">
            <router-link
              to="/"
              class="text-gray-800 text-3xl font-bold flex flex-row items-center"
            >
              <record-circle-line-icon class="w-6 h-6 mr-2" />
              <span class="sr-only">In The Loop</span>
              intheloop
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RecordCircleLineIcon from "@/assets/icons/record-circle-line.svg";

export default defineComponent({
  components: {
    RecordCircleLineIcon,
  },
});
</script>
