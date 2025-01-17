import * as z from "zod";

export const ResultSchema = z.object({
  title: z.string(),
  episode_id: z.number(),
  opening_crawl: z.string(),
  director: z.string(),
  producer: z.string(),
  release_date: z.string(),
  characters: z.array(z.string()),
  planets: z.array(z.string()),
  starships: z.array(z.string()),
  vehicles: z.array(z.string()),
  species: z.array(z.string()),
  created: z.coerce.date(),
  edited: z.coerce.date(),
  url: z.string(),
});
export type FilmResult = z.infer<typeof ResultSchema>;

export const FilmSchema = z.object({
  count: z.number(),
  next: z.null(),
  previous: z.null(),
  results: z.array(ResultSchema),
});
export type Film = z.infer<typeof FilmSchema>;
