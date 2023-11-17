import { onMount, type JSX } from "solid-js";
//@ts-ignore
import Butter from "butter-es6";
import { parallax } from "./hooks";

interface MomentumScrollProps {
  children: JSX.Element;
}

function MomentumScroll(props: MomentumScrollProps) {
  onMount(() => {
    Butter.init({
      wrapperId: "butter",
      cancelOnTouch: true,
      wrapperDamper: 0.05,
    });

    parallax();
  });

  return (
    <div id="butter" class="relative overflow-x-hidden">
      {props.children}
    </div>
  );
}

export default MomentumScroll;
