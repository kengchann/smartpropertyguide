import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    isSample: z.boolean().default(false),
    name: z.string(),
    brandTag: z.string(),
    type: z.enum(["House & Lot", "Condominium"]),
    location: z.string(),
    priceFrom: z.number(),
    priceLabel: z.string(),
    bedrooms: z.string(),
    areaLabel: z.string(),
    paymentTerms: z.array(z.string()),
    status: z.enum(["Selling", "Limited Units Left", "Sold Out"]),
    image: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    isSample: z.boolean().default(false),
    title: z.string(),
    excerpt: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("Carolyn Mendoza"),
    image: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
