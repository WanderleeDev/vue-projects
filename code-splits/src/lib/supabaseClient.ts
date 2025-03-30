import { getEnv } from '@/shared/utils/getEnv'
import { createClient } from '@supabase/supabase-js'
import type { Database } from '../../types/supabase'

export const supabase = createClient<Database>(
  getEnv('VITE_PROJECT_URL'),
  getEnv('VITE_API_KEY_SUPABASE'),
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  },
)

supabase.auth.onAuthStateChange(async (event, session) => {
  if (event === 'SIGNED_IN') {
    console.log(event)
  }

  if (event === 'SIGNED_OUT') {
    console.log(event)
  }
})

export function useSupabase() {
  return { supabase }
}
