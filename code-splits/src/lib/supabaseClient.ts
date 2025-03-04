import { getEnv } from '@/shared/utils/getEnv'
import { createClient } from '@supabase/supabase-js'
import type { Database } from '../../types/supabase'

export const supabase = createClient<Database>(
  getEnv('VITE_PROJECT_URL'),
  getEnv('VITE_API_KEY_SUPABASE'),
)
