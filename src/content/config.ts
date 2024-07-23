import { defineCollection } from "astro:content";
import { blogsSchemas, projetsSchemas } from "./schemas";
// Define a `type` and `schema` for each collection

const projectsCollection = defineCollection({
  type: "content",
  schema: projetsSchemas,
});

const blogsCollection = defineCollection({
  type: "content",
  schema: blogsSchemas,
});

export const collections = {
  projects: projectsCollection,
  blogs: blogsCollection,
};
