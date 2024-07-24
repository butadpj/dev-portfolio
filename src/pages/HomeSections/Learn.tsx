import { For } from "solid-js";
import Section from "../../sharedComponents/Section";
import type { CollectionEntry } from "astro:content";

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
      <div class="project-previews mt-20 flex flex-wrap items-start justify-center gap-8">
        <For each={props.blogs}>
          {({ data, slug }) => (
            <a
              href={`/blogs/${slug}`}
              class="font-openSans relative block aspect-video max-w-lg"
            >
              <img
                src={data.backgroundImage}
                alt={`Blog ${data.title}'s preview image`}
                width={360}
                height={360}
                class="h-full w-full  object-cover"
              />
              <div class="absolute bottom-0 flex items-center justify-between bg-primary/50 p-4 text-light">
                <div class="line-clamp-3 w-1/2 overflow-hidden text-ellipsis font-bold">
                  {data.title}
                </div>
                <div class="flex flex-col items-end gap-2 text-sm">
                  <div>
                    {data.pubDate &&
                      data.pubDate.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                  </div>
                  <div>2 min read</div>
                </div>
              </div>
            </a>
          )}
        </For>
      </div>
    </Section>
  );
}

export default Learn;
