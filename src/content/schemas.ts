import { z } from "astro:content";

export const projetsSchemas = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  isSuperProject: z.boolean().default(false),
  logo: z.object({
    img: z
      .object({
        url: z.string(),
        alt: z.string(),
        size: z.number().optional(),
      })
      .optional(),
    text: z.string().optional(),
  }),
  swiperBgImage: z.string().optional(),
  swiperSlides: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    )
    .optional(),
  buttons: z.object({
    repoButton: z.object({
      text: z.string(),
      url: z.string(),
    }),
    liveDemoButton: z
      .object({
        text: z.string(),
        url: z.string(),
      })
      .optional(),
  }),
  tags: z.array(z.string()).optional(),
  technologies: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    }),
  ),
});

export const blogsSchemas = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  backgroundImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
  isDraft: z.boolean().default(false),
});
