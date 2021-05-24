import { createClient } from '@supabase/supabase-js'
import { onGlobalSetup, provide } from '@nuxtjs/composition-api'

// Inject Supabase into Nuxt Context
export default (ctx, inject) => {
  const client = createClient(
    process.env.NUXT_ENV_SUPABASE_URL,
    process.env.NUXT_ENV_SUPABASE_KEY
  )

  inject('supabase', client)

  onGlobalSetup(() => {
    provide('supabase', client)
  })
}
