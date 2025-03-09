import { getEnv } from '@/shared/utils/getEnv'
import { createClient } from '@supabase/supabase-js'
import type { Database } from '../../types/supabase'
import { useRouter } from 'vue-router'

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

export const supabaseStatusListener = () => {
  const router = useRouter()
  supabase.auth.onAuthStateChange((event, session) => {
    console.log({ event, session })

    if (event === 'SIGNED_IN') {
      router.push('/dashboard')
    }

    if (event === 'SIGNED_OUT') {
      router.push('/')
    }
  })
}
