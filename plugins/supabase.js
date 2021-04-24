import { createClient } from '@supabase/supabase-js'
import { onGlobalSetup, provide } from '@nuxtjs/composition-api'

// Inject Supabase into Nuxt Context
export default (ctx, inject) => {
  const client = createClient(
    'https://pvnyntuqgqafdtgzucqj.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMzA3MjMyMiwiZXhwIjoxOTI4NjQ4MzIyfQ.47NmRknfnVDcLDWZouiFjVErXkw15kYJrUdkXt5Ii9I'
  )

  inject('supabase', client)

  onGlobalSetup(() => {
    provide('supabase', client)
  })
}
