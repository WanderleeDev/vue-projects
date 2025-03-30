import * as v from "valibot";

export const schemaUrl = v.object({
  url: v.pipe(
    v.string(),
    v.minLength(1, "Is required"),
    v.check(
      (input) => URL.canParse(input),
      "The URL provided is invalid. Please check the format"
    )
  ),
});

export type UrlSchemaType = v.InferOutput<typeof schemaUrl>;
