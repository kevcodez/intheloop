<template>
  <span v-if="true" /> <!-- only if authenticated -->
  <button @click.prevent="unfollow" v-else-if="following"
    class="bg-gray-800 py-2 text-xs text-white px-2 text-center rounded hover:bg-gray-600 hover:text-white">
    Following
  </button>
  <button @click.prevent="follow" v-else
    class="border-2 border-gray-800 py-2 text-xs text-gray-800 px-2 text-center rounded hover:bg-gray-800 hover:text-white">
    Follow
  </button>
</template>

<script lang="ts" setup>
import RecordCircleLineIcon from '~/assets/icons/record-circle-line.svg?component'
import { useFollow } from '~/store/follow'

const props = defineProps({
  topicId: {
    type: String,
    required: true,
  },
})

const store = useFollow()

const following = computed(() =>
  store.topicIds.includes(props.topicId)
)

const follow = () => {
  return store.follow(props.topicId)
}

const unfollow = () => {
  return store.unfollow(props.topicId)
}
</script>