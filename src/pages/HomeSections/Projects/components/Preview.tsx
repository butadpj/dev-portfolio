import { FaSolidStar } from "solid-icons/fa";
import Tags from "./Tags";
import Button from "../../../../sharedComponents/Button";
import type { JSXElement } from "solid-js";

interface PreviewProps {
  isSuperProject?: boolean;
  logo?: JSXElement;
  description?: string;
  tags?: string[];
  detailsLinks?: string;
  demoLink?: string;
  class?: string;
  demoButtonText?: string;
  PS?: JSXElement;
}

function Preview(props: PreviewProps) {
  return (
    <div
      class={`preview relative max-w-[23rem] rounded-xl shadow-xl ${props.class}`}
    >
      {props.isSuperProject ? (
        <div class="super-project absolute right-[-5%] top-[-3%] flex w-min rotate-[25deg] items-center gap-1 text-center font-k2d font-extrabold text-accent">
          <FaSolidStar size={28} /> Super project
        </div>
      ) : null}
      <div class="preview-logo flex items-center justify-center gap-2 px-4 py-6 font-k2d text-[1.3rem] font-medium">
        {props.logo}
      </div>
      <div class="preview-info flex flex-col gap-6 rounded-b-xl bg-primary pb-5 pl-5 pr-5 pt-4 text-light">
        {props.description || "Short description of the project"}
        <Tags tags={props.tags || ["HTML", "Tailwind", "Cool feature"]} />
        <div class="preview-buttons flex flex-wrap justify-between gap-4 px-2 py-0">
          <a href={props.detailsLinks}>
            <Button theme="outline-light" class="px-4 py-2">
              View details
            </Button>
          </a>
          <a href={props.demoLink} target="_blank">
            <Button class="hoverable px-4 py-2">
              {props.demoButtonText || "Live demo"}
            </Button>
          </a>
        </div>
        {props.PS ? (
          <p class="postscript text-center text-sm">{props.PS}</p>
        ) : null}
      </div>
    </div>
  );
}

export default Preview;
