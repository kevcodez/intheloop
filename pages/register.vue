<template>
  <div class="min-h-screen flex flex-col lg:justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-xl leading-9 font-extrabold text-gray-900">Register a new account</h2>
      <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
        Or
        <nuxt-link to="/login" class="link">Login to your existing account.</nuxt-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form action="#" method="POST">
          <div>
            <label for="email" class="form-label">Email address</label>
            <div class="mt-1 rounded-md shadow-sm">
              <input id="email" v-model="email" type="email" required class="input" />
            </div>
          </div>

          <div class="mt-3">
            <label for="password" class="form-label">Password</label>
            <div class="mt-1 rounded-md shadow-sm">
              <input id="password" v-model="password" type="password" required class="input" />
            </div>
          </div>

          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button type="button" class="button primary w-full" @click="register">Register</button>
            </span>

            <div v-if="error" class="mt-4 text-red-500 text-sm">
              {{ error }}
            </div>
          </div>
        </form>

        <social-auth-section class="mt-6" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RecordCircleLineIcon from '~/assets/icons/record-circle-line.svg?inline'

export default Vue.extend({
  layout: 'empty',
  middleware: ['guest'],
  components: {
    RecordCircleLineIcon,
  },
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async register() {
      const data = {
        email: this.email,
        password: this.password,
      }
      const { error } = await this.$store.dispatch('auth/register', data)
      // append parameter to automatically fill on login screen
      this.$router.push('/login?email=' + encodeURIComponent(this.email))

      if (error) {
        this.error = error.message
      }
    },
  },
})
</script>