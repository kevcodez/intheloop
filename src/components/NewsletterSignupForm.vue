<template>
  <form @submit.prevent="subscribe">
    <div v-if="success !== true" class="flex flex-row">
      <input
        class="input"
        placeholder="E-Mail"
        type="email"
        @input="setEmail"
      />

      <button class="button ml-2" type="submit" :class="{'cursor-wait': loading}" :disabled="loading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          class="text-black h-5 w-5"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
    <div v-if="error">Something went wrong :/</div>
    <div v-if="success">Thanks, please confirm your address!</div>
  </form>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import ky from "ky";

export default defineComponent({
  setup() {
    const email = ref("");
    const success = ref(false);
    const error = ref<string | null>(null);
    const loading = ref(false);

    const subscribe = async (): Promise<void> => {
      if (email.value === null || loading.value) {
        return;
      }

      success.value = false;
      error.value = null;
      loading.value = true;

      const url = `https://europe-west1-intheloop-dev.cloudfunctions.net/subscribeToNewsletter`;

      try {
        await ky.post(url, {
          json: {
            email: email.value,
          },
        });

        success.value = true;
        email.value = "";
      } catch (err) {
        console.log(err);
        error.value = "Ohn o";
      } finally {
        loading.value = false;
      }
    };

    const setEmail = (event: any) => {
      email.value = event.target.value.trim();
    };

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
