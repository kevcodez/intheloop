<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  {{ tag.name }}
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const tag = reactive({
      name: 'Kotlin'
    })

    return {
      tag
    }
  }
})
</script>
