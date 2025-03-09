import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const signupSchema = z
  .object({
    email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(16, 'Password must be at most 16 characters long')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one number',
      ),
    confirmPassword: z.string().min(1, 'Confirm Password is required'),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'The passwords did not match',
        path: ['confirmPassword'],
      })
    }
  })

export type SignupPayload = z.infer<typeof signupSchema>
export const validationSignupSchema = toTypedSchema(signupSchema)
