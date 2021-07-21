<template>
  <span v-if="!$store.state.auth.isAuthenticated" />
  <button
    @click.prevent="unfollow"
    v-else-if="following"
    class="bg-gray-800 py-2 text-xs text-white px-2 text-center rounded hover:bg-gray-600 hover:text-white"
  >
    Following
  </button>
  <button
    @click.prevent="follow"
    v-else
    class="border-2 border-gray-800 py-2 text-xs text-gray-800 px-2 text-center rounded hover:bg-gray-800 hover:text-white"
  >
    Follow
  </button>
</template>

<script lang="ts">
import { useStore } from '@nuxtjs/composition-api'
import { computed, defineComponent } from '@vue/composition-api'
import RecordCircleLineIcon from '~/assets/icons/record-circle-line.svg?inline'

export default defineComponent({
  components: {
    RecordCircleLineIcon,
  },
  props: {
    topicId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore()
    const following = computed(() =>
      store.state.follow.topicIds.includes(props.topicId)
    )

    const follow = () => {
      return store.dispatch('follow/follow', { topicId: props.topicId })
    }

    const unfollow = () => {
      return store.dispatch('follow/unfollow', { topicId: props.topicId })
    }

    return {
      following,
      follow,
      unfollow,
    }
  },
})
</script>
