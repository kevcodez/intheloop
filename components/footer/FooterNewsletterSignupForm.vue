<template>
  <form @submit.prevent="subscribe">
    <div v-if="success !== true" class="flex flex-row">
      <input class="input" placeholder="E-Mail" type="email" autocomplete="email" @input="setEmail" />

      <button class="button ml-2" type="submit" :class="{ 'cursor-wait': loading }" :disabled="loading">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="text-black h-5 w-5" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
    <p class="mt-1 text-xs">
      No need to worry about your privacy. See
      <nuxt-link class="underline" to="/privacy-policy">Privacy Policy</nuxt-link>.
    </p>
    <div class="block" v-if="error">Something went wrong :/</div>
    <div v-if="success">Thanks, please confirm your address!</div>
  </form>
</template>

<script lang="ts" setup>
const {
  email,
  success,
  error,
  loading,
  subscribe,
  setEmail,
} = useNewsletter();
</script>
