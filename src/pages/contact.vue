<template>
  <div class="max-w-7xl mx-auto py-12 px-4 lg:py-12">
    <form
      class="space-y-4 max-w-3xl"
      name="contact"
      @submit.prevent="submitForm"
    >
      <div>
        If you see any invalid information, would like to see another topic or
        have suggestions on how to improve this page, let me know
      </div>
      <div>
        <label class="form-label">Email (optional)</label>
        <input class="input" type="email" v-model="email" />
      </div>
      <div>
        <label class="form-label">Text</label>
        <textarea
          v-model="message"
          class="input h-40"
          style="min-height: 150px"
          required
          :minlength="20"
        />
      </div>
      <div>
        <button class="button" type="submit">Send message</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import ky from "ky";
import { ref } from "vue";

const email = ref("");
const message = ref("");

const submitForm = () => {
  const formData = new FormData();
  formData.append("email", email.value);
  formData.append("message", message.value);

  ky.post("/", {
    body: formData,
  })
    .then((response) => {
      if (response.status === 200) {
        alert("E-mail Sent!");
      } else {
        throw new Error(response.statusText);
      }
    })
    .catch(() => alert("Failed to sent E-mail"));
};
</script>
