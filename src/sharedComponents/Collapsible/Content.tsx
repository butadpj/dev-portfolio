import { onMount, type JSXElement } from "solid-js";

interface ContentProps {
  children: JSXElement;
  initiallyClose?: boolean;
}

function Content(props: ContentProps) {
  return (
    <div
      class={`content my-4 ml-2 max-h-0 overflow-hidden font-k2d font-bold italic transition-[max-height] duration-300`}
    >
      {props.children}
    </div>
  );
}

export default Content;
