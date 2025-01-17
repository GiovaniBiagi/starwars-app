import * as z from "zod";

export const GenderSchema = z.enum(["female", "male", "n/a"]);
export type Gender = z.infer<typeof GenderSchema>;

export const ResultSchema = z.object({
  name: z.string(),
  height: z.string(),
  mass: z.string(),
  hair_color: z.string(),
  skin_color: z.string(),
  eye_color: z.string(),
  birth_year: z.string(),
  gender: GenderSchema,
  homeworld: z.string(),
  films: z.array(z.string()),
  species: z.array(z.string()),
  vehicles: z.array(z.string()),
  starships: z.array(z.string()),
  created: z.coerce.date(),
  edited: z.coerce.date(),
  url: z.string(),
});
export type CharacterResult = z.infer<typeof ResultSchema>;

export const CharacterSchema = z.object({
  count: z.number(),
  next: z.string(),
  previous: z.null(),
  results: z.array(ResultSchema),
});
export type Character = z.infer<typeof CharacterSchema>;
