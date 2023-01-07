<template>
  <div class="px-4 py-12 mx-auto max-w-7xl 2xl:max-w-[110rem] lg:py-12">
    <form class="max-w-3xl mb-32 space-y-4" name="contact" @submit.prevent="submitForm">
      <div>
        If you see any invalid information, would like to see another topic or
        have suggestions on how to improve this page, let me know. You can also
        DM me on
        <a class="text-indigo-500" href="https://twitter.com/kevcodez">Twitter</a>.
      </div>
      <div>
        <label class="form-label">Email (optional)</label>
        <input class="input" type="email" v-model="email" />
      </div>
      <div>
        <label class="form-label">Text</label>
        <textarea v-model="message" class="h-40 input" style="min-height: 150px" required :minlength="20" />
      </div>
      <label class="ohnohoney" for="name"></label>
      <input class="ohnohoney" autocomplete="off" v-model="honeyName" type="text" id="name" name="name"
        placeholder="Your name here" />
      <div>
        <Alert v-if="messageSent" severity="success">Successfully submitted form. Thanks for contacting me!</Alert>
        <button v-else class="button" type="submit">Send message</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { Database } from '~/lib/database.types'

const email = ref('')
const message = ref('')
const honeyName = ref('')
const messageSent = ref(false)
const supabase = useSupabaseClient<Database>()

const submitForm = async () => {
  if (honeyName.value) return
  const formData = new FormData()
  formData.set('email', email.value)
  formData.set('message', message.value)

  const { error } = await supabase.from('contact').insert(
    {
      email: email.value,
      message: message.value,
    },
  )
  email.value = ''
  message.value = ''
  if (error) {
    console.log(error)
  } else {
    messageSent.value = true
  }
}
</script>

<style>
.ohnohoney {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
}
</style>
