import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(16, 'Password must be at most 16 characters long')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number',
    ),
})

export type LoginPayload = z.infer<typeof loginSchema>
export const validationLoginSchema = toTypedSchema(loginSchema)
