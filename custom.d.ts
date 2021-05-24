import { SupabaseClient } from '@supabase/supabase-js'
import Vue from 'vue'

declare module '*.svg' {
    const content: string
    export default content
}

declare module 'vue/types/vue' {
  interface Vue {
    $supabase: SupabaseClient
  }
}