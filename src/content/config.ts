import { defineCollection } from "astro:content";
import { projetsSchemas } from "./schemas";
// Define a `type` and `schema` for each collection

const projectsCollection = defineCollection({
  type: "content",
  schema: projetsSchemas,
});

export const collections = {
  projects: projectsCollection,
};
