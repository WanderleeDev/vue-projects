import type { Database } from '../types/supabase'

export type Exercise = Database['public']['Tables']['Exercises']['Row']
