import { children, mergeProps } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";

interface Title {
  name?: string;
  color?: "text-primary" | "text-accent";
}

function Section(props: { id: string; title?: Title; children?: JSX.Element }) {
  const { id, title } = mergeProps(
    { title: { name: "Title", color: "text-primary" } },
    props
  );

  const slot = children(() => props.children);
  return (
    <section id={id}>
      <h2
        class={`section-title ${
          title.color || "text-primary"
        } relative w-fit font-k2d text-6xl font-bold before:absolute before:left-0 before:top-1/2 before:inline-block before:h-80% before:w-180% before:-translate-x-1/2 before:bg-primaryFade before:content-[""]`}
      >
        {title.name}
      </h2>

      {slot()}
    </section>
  );
}

export default Section;
