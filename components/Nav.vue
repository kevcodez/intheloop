<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <nuxt-link to="/" class="flex flex-row items-center">
              <record-circle-line-icon class="w-6 h-6 mr-2 text-purple-800" />
              <span class="sr-only">In The Loop</span>
              intheloop
            </nuxt-link>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <nuxt-link
              v-for="navItem in navItems"
              :key="navItem.label"
              :to="navItem.path"
              class="desktop-nav-item text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              {{ navItem.label }}
            </nuxt-link>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <!-- Notification Bell for later -->
          <!--button
            class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button-->

          <div v-if="!$store.state.auth.user">
            <nuxt-link to="/login">Login</nuxt-link>
          </div>

          <!-- Profile dropdown -->
          <div class="ml-3 relative" v-else>
            <div>
              <button
                @click="toggleProfileDropdown"
                type="button"
                class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="http://cdn.onlinewebfonts.com/svg/img_258083.png"
                />
              </button>
            </div>

            <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-200"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
            <div
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
              v-if="profileDropdownOpen"
              v-click-outside="onClickOutside"
            >
              <a
                @click="signOut"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
                >Sign out</a
              >
            </div>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="toggleMobileMenu"
          >
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="h-6 w-6"
              :class="{
                hidden: mobileMenuOpen,
                block: !mobileMenuOpen,
              }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="h-6 w-6"
              :class="{
                block: mobileMenuOpen,
                hidden: !mobileMenuOpen,
              }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu" v-if="mobileMenuOpen">
      <div class="pt-2 pb-3 space-y-1">
        <nuxt-link
          @click.native="toggleMobileMenu"
          v-for="navItem in navItems"
          :key="navItem.label"
          :to="navItem.path"
          class="mobile-nav-item text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >{{ navItem.label }}</nuxt-link
        >
      </div>

      <div
        class="pt-4 pb-3 border-t border-gray-200"
        v-if="!$store.state.auth.user"
      >
        <div class="mt-3 space-y-1">
          <nuxt-link
            to="/login"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >Login</nuxt-link
          >
        </div>
      </div>

      <div class="pt-4 pb-3 border-t border-gray-200" v-else>
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="http://cdn.onlinewebfonts.com/svg/img_258083.png"
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">
              {{ $store.state.auth.user.email }}
            </div>
            <div class="text-sm font-medium text-gray-500">
              {{ $store.state.auth.user.email }}
            </div>
          </div>

          <!-- Notification Bell for later -->
          <!--button
            class="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button-->
        </div>
        <div class="mt-3 space-y-1">
          <a
            @click="signOut"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 cursor-pointer"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  useRouter,
  useStore,
} from '@nuxtjs/composition-api'
import RecordCircleLineIcon from '~/assets/icons/record-circle-line.svg?inline'
import vClickOutside from 'v-click-outside'

export default defineComponent({
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    RecordCircleLineIcon,
  },
  setup() {
    const mobileMenuOpen = ref(false)
    const profileDropdownOpen = ref(false)
    const router = useRouter()
    const store = useStore()

    const toggleMobileMenu = () =>
      (mobileMenuOpen.value = !mobileMenuOpen.value)
    const toggleProfileDropdown = () =>
      (profileDropdownOpen.value = !profileDropdownOpen.value)

    const signOut = async () => {
      await store.dispatch('auth/logout')
      router.push('/')
    }

    const navItems = computed(() => {
      const entries = [
        {
          label: 'Topics',
          path: '/topics',
        },
        {
          label: 'Books',
          path: '/books',
        },
        {
          label: 'Courses',
          path: '/courses',
        },
        {
          label: 'Roadmap',
          path: '/roadmap',
        },
      ]

      if (store.state.auth.isAuthenticated) {
        entries.unshift({
          label: 'Your Loop',
          path: '/loop',
        })
      }

      return entries
    })

    return {
      mobileMenuOpen,
      toggleMobileMenu,
      signOut,
      navItems,
      profileDropdownOpen,
      toggleProfileDropdown,
    }
  },
  methods: {
    onClickOutside(_event: any) {
      this.profileDropdownOpen = false
    },
  },
  created() {
    this.$supabase.auth.onAuthStateChange(async (event, session) => {
      await this.$http.$post(this.$config.baseUrl + '/api/auth', { event, session })
      this.$router.push('/')
    })
  },
})
</script>
<style lang="scss" scoped>
.desktop-nav-item {
  &.nuxt-link-active {
    @apply border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium;
  }

  &:not(.nuxt-link-active) {
    @apply border-transparent;
  }
}

.mobile-nav-item {
  &.nuxt-link-active {
    @apply bg-indigo-50 border-indigo-500 text-indigo-700;
  }

  &:not(.nuxt-link-active) {
    @apply border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700;
  }
}
</style>