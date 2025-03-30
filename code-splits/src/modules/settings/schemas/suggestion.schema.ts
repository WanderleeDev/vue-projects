import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

export const suggestionSchema = z.object({
  reason: z.string().min(1, 'reason is required'),
  description: z.string().min(1, 'reason is required').max(300),
})

export type SuggestionPayload = z.infer<typeof suggestionSchema>
export const validationSuggestionSchema = toTypedSchema(suggestionSchema)
