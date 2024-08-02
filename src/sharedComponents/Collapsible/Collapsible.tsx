import { onMount, type JSX } from "solid-js";
import Trigger from "./Trigger";
import Content from "./Content";
import { collapsibleLogic } from "./hooks";

interface CollapsibleProps {
  children?: JSX.Element;
  initiallyClose?: boolean;
  class?: string;
}

function Collapsible(props: CollapsibleProps) {
  let collapsible: HTMLDivElement | undefined;

  onMount(() => {
    if (collapsible) {
      collapsibleLogic(collapsible);
    }
  });

  return (
    <div
      ref={collapsible}
      class={`collapsible ${!props.initiallyClose ? "open" : ""} z-10 ${props.class}`}
    >
      {props.children}
    </div>
  );
}

Collapsible.Trigger = Trigger;
Collapsible.Content = Content;

export default Collapsible;
