import { mergeProps, onMount } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";

interface Title {
  name?: string;
  color?: "text-primary" | "text-accent";
  style?: string;
}

function Section(props: {
  id: string;
  title?: Title;
  children?: JSX.Element;
  class?: string;
  noTitle?: boolean;
}) {
  const getTitleBackground = () => {
    if (props.title?.color === "text-primary") return "before:bg-primaryFade";
    if (props.title?.color === "text-accent") return "before:bg-accentFade";
    return "before:bg-primaryFade";
  };

  return (
    <section id={props.id} class={`p-8 ${props.class}`}>
      {props.noTitle ? null : (
        <h2
          class={`section-title ${
            props.title?.color || "text-primary"
          } relative w-fit font-k2d text-4xl font-bold tracking-wider before:absolute before:left-0 before:top-1/2 before:inline-block before:h-[100%] before:w-[180%] before:-translate-x-1/2 lg:text-5xl ${getTitleBackground()} before:content-[''] ${props
            .title?.style}`}
        >
          {props.title?.name || "Title"}
        </h2>
      )}

      {props.children}
    </section>
  );
}

export default Section;
