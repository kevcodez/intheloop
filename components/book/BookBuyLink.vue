<template>
  <a class="button text-lg dark flex flex-row justify-center items-center" target="_blank" :href="buyLink.url">
    <link-icon class="h-4 w-4 mr-2" />
    {{ displayName }}
  </a>
</template>

<script lang="ts" setup>
import { BookBuyLink } from '~/lib/Book'
import LinkIcon from '~/assets/icons/link.svg?component'
import { PropType } from 'vue'

// TODO use icons for known platforms like amazon/oreilly

const props = defineProps({
  buyLink: {
    required: true,
    type: Object as PropType<BookBuyLink>,
  },
});

const displayName = computed(() => {
  const url = new URL(props.buyLink.url)
  const host = url.host
  if (host.includes('amazon')) {
    return 'Buy on Amazon'
  } else if (host.includes('oreilly')) {
    return "Buy from O'REILLY"
  } else if (host.includes('leanpub')) {
    return 'Buy on Leanpub'
  } else if (host.includes('manning')) {
    return 'Buy on Manning'
  } else if (host.includes('packtpub')) {
    return 'Buy on Packt'
  } else {
    return url.host
  }
})
</script>