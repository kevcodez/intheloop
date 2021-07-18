<template>
  <div class="container">
    <!-- NAV -->
    <div>
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <select
          id="tabs"
          name="tabs"
          class="
            block
            w-full
            pl-3
            pr-10
            py-2
            text-base
            border
            border-gray-300
            focus:outline-none
            focus:ring-indigo-500
            focus:border-indigo-500
            sm:text-sm
            rounded-md
          "
          @input="changeNav"
        >
          <option
            v-for="tab in tabs"
            :key="tab.name"
            :selected="tab.current"
            :value="tab.to"
          >
            {{ tab.name }}
          </option>
        </select>
      </div>
      <div class="hidden sm:block">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <nuxt-link
              v-for="tab in tabs"
              :key="tab.name"
              :to="tab.to"
              exact-active-class="border-indigo-500 text-indigo-600"
              class="
                text-gray-500
                hover:text-gray-700
                hover:border-gray-300
                whitespace-nowrap
                py-4
                px-1
                border-b-2
                font-medium
                text-sm
              "
            >
              {{ tab.name }}
            </nuxt-link>
          </nav>
        </div>
      </div>
    </div>
    <!-- END NAV -->

    <nuxt-child class="pt-4" />
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      tabs: [{ name: 'Overview', to: '/loop' }],
    }
  },

  setup() {
    const router = useRouter()
    const changeNav = (event: any) => {
      router.push(event.target.value)
    }

    return {
      changeNav,
    }
  },
})
</script>