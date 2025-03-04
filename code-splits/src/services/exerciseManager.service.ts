import { supabase } from '@/lib/supabaseClient'
import type { PostgrestSingleResponse, SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '../../types/supabase'
import type { Exercise } from '../../types'

export class ExerciseManager {
  static #instance: ExerciseManager
  readonly #supabaseClient: SupabaseClient<Database>

  private constructor() {
    this.#supabaseClient = supabase

    if (!this.#supabaseClient) {
      throw new Error('Supabase client is not initialized')
    }
  }

  public static getInstance(): ExerciseManager {
    if (!ExerciseManager.#instance) {
      ExerciseManager.#instance = new ExerciseManager()
    }

    return ExerciseManager.#instance
  }

  public async getAllExercises(): Promise<PostgrestSingleResponse<Exercise[]>> {
    return await this.#supabaseClient.from('Exercises').select('*')
  }
}
