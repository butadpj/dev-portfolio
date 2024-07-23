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
        <For each={props.blogs}>{({ data, slug }) => <h2>Blog</h2>}</For>
      </div>
    </Section>
  );
}

export default Learn;
