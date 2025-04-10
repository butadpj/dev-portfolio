import { FaSolidAngleDown, FaSolidAngleRight } from "solid-icons/fa";
import { onMount, type JSX } from "solid-js";

interface TriggerProps {
  // eslint-disable-next-line no-unused-vars
  label?: JSX.Element;
  children?: (icon: JSX.Element) => JSX.Element;
  class?: string;
}

function Trigger(props: TriggerProps) {
  return (
    <h4 class={`trigger hoverable flex w-fit items-center gap-2 text-accent ${props.class}`}>
      {props.label} <FaSolidAngleRight />
      {/* {props.children(<FaSolidAngleRight />)} */}
    </h4>
  );
}

export default Trigger;
