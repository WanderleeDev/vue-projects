import * as v from "valibot";

export const recoveryAccountSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty(),
    v.email(),
    v.regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/)
  ),
});

export type RecoveryAccountInSchemaType = v.InferOutput<
  typeof recoveryAccountSchema
>;
