import { For } from "solid-js";
import Section from "../../sharedComponents/Section";
import type { CollectionEntry } from "astro:content";
import { calculateReadingTime } from "../../utils";

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
                class="font-openSans hoverable block max-w-lg"
              >
                <div class="relative aspect-video">
                  <img
                    src={data.backgroundImage}
                    alt={`Blog ${data.title}'s preview image`}
                    width={360}
                    height={360}
                    class="dark:border dark:border-white h-full w-full object-cover"
                  />
                  <div class="absolute bottom-0 flex w-full items-center justify-between bg-primary/50 px-4 py-2 text-sm text-light">
                    <div>{calculateReadingTime(body)} min read</div>

                    <div>
                      {data.pubDate &&
                        data.pubDate.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                    </div>
                  </div>
                </div>

                <div class={`dark:text-light ml-1 mt-2 space-y-2`}>
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
