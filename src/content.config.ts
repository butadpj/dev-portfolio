import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { blogsSchemas, projetsSchemas } from "./content/schemas";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: projetsSchemas,
});

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blogs" }),
  schema: blogsSchemas,
});

export const collections = { projects, blogs };
