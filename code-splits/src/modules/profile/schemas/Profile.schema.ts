import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

export const profileBaseSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  username: z.string().min(1, 'Nickname is required'),
  about: z.string().min(1, 'Description is required'),
})

export const imageProfile = z.object({
  image: z.string().min(1, 'Image is required'),
})

export const validationProfileSchema = toTypedSchema(profileBaseSchema)

// export type ProfileCardInfo = Omit<ProfileType, 'email'>
export type ProfileType = z.infer<typeof profileBaseSchema> & z.infer<typeof imageProfile>
export type ProfileBaseInfo = Omit<ProfileType, 'email' | 'image'>
