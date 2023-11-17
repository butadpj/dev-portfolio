import { onMount, type JSX } from "solid-js";
//@ts-ignore
import Butter from "butter-es6";

interface MomentumScrollProps {
  children: JSX.Element;
}

function MomentumScroll(props: MomentumScrollProps) {
  onMount(() => {
    Butter.init({
      wrapperId: "butter",
      cancelOnTouch: true,
      wrapperDamper: 0.1,
    });
  });

  return (
    <div id="butter" class="relative overflow-x-hidden">
      {props.children}
    </div>
  );
}

export default MomentumScroll;
