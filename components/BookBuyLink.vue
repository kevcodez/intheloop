<template>
  <a
    class="button dark flex flex-row justify-center items-center"
    target="_blank"
    :href="buyLink.url"
  >
    <link-icon class="h-4 w-4 mr-2" />
    {{ displayName }}</a
  >
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import { BookBuyLink } from '~/lib/Book'
import LinkIcon from '~/assets/icons/link.svg?inline'

// TODO use icons for known platforms like amazon/oreilly

export default defineComponent({
  components: {
    LinkIcon,
  },
  props: {
    buyLink: {
      required: true,
      type: Object as PropType<BookBuyLink>,
    },
  },
  setup(props) {
    const displayName = computed(() => {
      const url = new URL(props.buyLink.url)
      const host = url.host
      if (host.includes('amazon')) {
        return 'Amazon'
      } else if (host.includes('oreilly')) {
        return 'Oreilly'
      } else if (host.includes('leanpub')) {
        return 'Leanpub'
      } else if (host.includes('manning')) {
        return 'Manning'
      } else {
        return url.host
      }
    })

    return {
      displayName,
    }
  },
})
</script>