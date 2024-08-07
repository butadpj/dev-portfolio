import { For } from "solid-js";
import Section from "../../sharedComponents/Section";
import type { CollectionEntry } from "astro:content";
import { calculateReadingTime, formatDate } from "../../utils";

interface LearnProps {
  blogs: Array<CollectionEntry<"blogs">>;
}

function Learn(props: LearnProps) {
  return (
    <Section
      class="px-6 py-16"
      id="learn"
      title={{ name: "Learn", style: "md:pl-20" }}
    >
      <div class="project-previews mt-20 flex flex-wrap items-start justify-center gap-10 gap-y-14">
        <For each={props.blogs}>
          {({ data, slug, body }, index) => {
            return (
              <a
                href={`/blogs/${slug}`}
                class="hoverable block max-w-lg font-openSans"
              >
                <div class="mb-2 flex flex-wrap gap-2">
                  {data.tags?.map((tag, index) => (
                    <div class="rounded-full bg-primaryDark px-2 py-1 text-xs capitalize text-white">
                      {tag}
                    </div>
                  ))}
                </div>

                <div class="relative aspect-video">
                  <img
                    src={data.backgroundImage}
                    alt={`Blog ${data.title}'s preview image`}
                    width={360}
                    height={360}
                    class="h-full w-full object-cover dark:border dark:border-white"
                  />
                  <div class="absolute bottom-0 w-full space-y-2 bg-primary/50 px-4 py-2 text-sm text-light">
                    <div class="flex items-center justify-between ">
                      <div>{calculateReadingTime(body)} min read</div>

                      <div>{data.pubDate && formatDate(data.pubDate)}</div>
                    </div>
                  </div>
                </div>

                <div class={`ml-1 mt-2 space-y-2 dark:text-light`}>
                  <div class="line-clamp-2 overflow-hidden text-ellipsis text-lg font-bold">
                    {data.title}
                  </div>
                  <div class="text-sm">{data.description}</div>
                </div>
              </a>
            );
          }}
        </For>
      </div>
    </Section>
  );
}

export default Learn;
