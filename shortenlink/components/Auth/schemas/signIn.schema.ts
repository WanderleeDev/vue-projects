import * as v from "valibot";

export const signInSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty(),
    v.email(),
    v.regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/)
  ),
  password: v.pipe(
    v.string(),
    v.nonEmpty(),
    v.minLength(8),
    v.maxLength(16),
    v.regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
  ),
});

export type SignInSchemaType = v.InferOutput<typeof signInSchema>;
