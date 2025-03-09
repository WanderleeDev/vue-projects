import { toast } from 'vue-sonner'
import { ZodError } from 'zod'

export function handleToastError(error: unknown) {
  let messageError = 'unknown error, please try again later'

  if (error instanceof ZodError) {
    messageError = `${error.errors.map((err) => err.message).join(', ')}`
  }

  if (error instanceof Error) {
    messageError = error.message
  }

  toast.error(messageError)
}
