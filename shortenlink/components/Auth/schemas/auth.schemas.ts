import * as v from "valibot";

export const signUpSchema = v.pipe(
  v.object({
    name: v.pipe(v.string(), v.nonEmpty(), v.minLength(3)),
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
    confirmPassword: v.pipe(v.string(), v.nonEmpty("Is required")),
    terms: v.pipe(
      v.boolean(),
      v.check(
        (input) => Boolean(input),
        "You must agree to the terms to continue"
      )
    ),
  }),
  v.forward(
    v.partialCheck(
      [["password"], ["confirmPassword"]],
      (input) => input.password === input.confirmPassword,
      "The two passwords do not match."
    ),
    ["confirmPassword"]
  )
);

export type SignUpSchemaType = v.InferOutput<typeof signUpSchema>;
