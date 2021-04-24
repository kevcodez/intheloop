<template>
  <div class="relative bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start">
          <nuxt-link
            to="/"
            class="text-gray-800 text-3xl font-bold flex flex-row items-center"
          >
            <record-circle-line-icon class="w-6 h-6 mr-2" />
            <span class="sr-only">In The Loop</span>
            intheloop
          </nuxt-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
            @click="toggleMobileMenu"
          >
            <span class="sr-only">Open menu</span>
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10">
          <nuxt-link
            to="/roadmap"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Roadmap
          </nuxt-link>
        </nav>
      </div>
    </div>

    <!--
    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    <div
      v-if="mobileMenuOpen"
      
      class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
    >
      <div
        class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
      >
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <nuxt-link
                to="/"
                @click="toggleMobileMenu"
                class="text-gray-800 text-3xl font-bold flex flex-row items-center"
              >
                <record-circle-line-icon class="w-6 h-6 mr-2" />
                <span class="sr-only">In The Loop</span>
                intheloop
              </nuxt-link>
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                @click="toggleMobileMenu"
              >
                <span class="sr-only">Close menu</span>
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="py-6 px-5 space-y-6">
          <div class="grid grid-cols-2 gap-y-4 gap-x-8">
            <nuxt-link
              to="/roadmap"
              @click="toggleMobileMenu"
              class="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Roadmap
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import RecordCircleLineIcon from "~/assets/icons/record-circle-line.svg?inline";

export default defineComponent({
  components: {
    RecordCircleLineIcon,
  },
  setup() {
    const mobileMenuOpen = ref(false);
    const toggleMobileMenu = () =>
      (mobileMenuOpen.value = !mobileMenuOpen.value);

    return {
      mobileMenuOpen,
      toggleMobileMenu,
    };
  },
});
</script>
