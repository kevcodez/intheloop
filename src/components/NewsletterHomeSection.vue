<template>
  <div class="grid lg:grid-cols-2 container">
    <div class="flex flex-col items-center text-center">
      <h2
        class="text-2xl font-extrabold tracking-tight text-gray-800 sm:text-3xl"
      >
        Want product updates and new topics?
      </h2>
      <p class="mt-3 max-w-3xl text-lg leading-6 text-gray-700">
        Sign up for our newsletter to stay up-to-date.
      </p>
    </div>
    <div class="flex items-center justify-center">
      <div
        class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8 justify-self-center"
      >
        <div class="text-center mb-4 text-gray-700" v-if="error">
          Something went wrong :/
        </div>
        <div v-if="success" class="text-center mb-4 text-gray-700">
          Thanks, please confirm your address!
        </div>
        <form class="sm:flex" @submit.prevent="subscribe">
          <label for="emailAddress" class="sr-only">Email address</label>
          <input
            name="emailAddress"
            type="email"
            autocomplete="email"
            @input="setEmail"
            required
            class="w-full input"
            placeholder="Enter your email"
          />
          <button
            v-if="success !== true"
            type="submit"
            :class="{ 'cursor-wait': loading }"
            :disabled="loading"
            class="mt-3 w-full flex items-center justify-center px-5 py-3 button primary sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
          >
            Notify me
          </button>
        </form>
        <p class="mt-3 text-xs text-gray-500 text-center">
          No need to worry about your privacy. Read our
          <a
            href="/privacy-policy"
            target="_blank"
            class="text-purple-800 font-medium underline"
          >
            Privacy Policy </a
          >.
        </p>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import useNewsletter from "@/composables/useNewsletter";

export default defineComponent({
  setup() {
    const {
      email,
      success,
      error,
      loading,
      subscribe,
      setEmail,
    } = useNewsletter();

    return {
      email,
      success,
      error,
      loading,
      subscribe,
      setEmail,
    };
  },
});
</script>
