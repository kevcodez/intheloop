<template>
  <h1 class="text-5xl text-red-500">msg: {{ msg }}</h1>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    const useScriptSetup = ref(false);
    const useTsPlugin = ref(false);
    return { count, useScriptSetup, useTsPlugin }
  }
})
</script>
