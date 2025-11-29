import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const FILE_PATH = "src/data";

const file = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${FILE_PATH}` }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    hidden: z.boolean().optional(),
  }),
});

export const collections = { file };

