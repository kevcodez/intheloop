<template>
  <div class="min-h-screen bg-gray-50 flex flex-col lg:justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-xl leading-9 font-extrabold text-gray-900">Sign in to your account</h2>
      <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
        Or
        <nuxt-link to="/register" class="link"> register your account for free. </nuxt-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form action="#" method="POST">
          <div>
            <label for="email" class="form-label">Email address</label>
            <div class="mt-1 rounded-md shadow-sm">
              <input id="email" v-model="email" type="email" required class="input w-full" />
            </div>
          </div>

          <div class="mt-3">
            <label for="password" class="form-label">Password</label>
            <div class="mt-1 rounded-md shadow-sm">
              <input id="password" v-model="password" type="password" required class="input w-full" />
            </div>
          </div>

          <!-- TODO -->
          <!-- <div class="mt-6 flex items-center justify-between">
            <div class="text-sm leading-5">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Forgot your password?
              </a>
            </div>
          </div> -->

          <div class="mt-6">
            <button type="button" class="button primary w-full" :disabled="signingIn" @click="login">Sign in</button>

            <div class="mt-4 text-red-500 text-sm" v-if="error">
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
  middleware: 'guest',
  components: {
    RecordCircleLineIcon,
  },
  data() {
    return {
      email: this.$route.query.email || '',
      password: '',
      signingIn: false,
      error: '',
    }
  },
  methods: {
    async login() {
      try {
        this.signingIn = true
        const data = {
          email: this.email,
          password: this.password,
        }
        const { error } = await this.$store.dispatch('auth/login', data)
        if (error) {
          this.error = error.error_description || error.message
        }
      } catch (err) {
        console.log(err)
      }
      this.signingIn = false
    },
  },
  created() {
    this.$supabase.auth.onAuthStateChange(async (event, session) => {
      await this.$http.$post(this.$config.baseUrl + '/api/auth', {
        event,
        session,
      })
      this.$router.push('/')
    })
  },
})
</script>