import { type JSX } from "solid-js";
import Links from "./Links";
import Resume from "./Resume";
import Socials from "./Socials";
import { FaSolidArrowRight } from "solid-icons/fa";

interface ContentProps {
  children: JSX.Element;
  isOpen: boolean;
  closeButtonClick: () => void;
}

function Content(props: ContentProps) {
  const translateX = () =>
    props.isOpen ? "translate-x-0" : "translate-x-full";

  return (
    <div
      class={`navbar-content fixed bottom-0 left-1/4 right-0 top-0 ${translateX()} z-10 flex flex-col items-center justify-end gap-20 bg-primary pb-20 transition-all duration-200`}
    >
      <div
        class="close-button hoverable absolute right-4 top-6 cursor-pointer px-5 py-3"
        onClick={() => props.closeButtonClick()}
      >
        <FaSolidArrowRight size={45} />
      </div>

      {props.children}
    </div>
  );
}

Content.Links = Links;
Content.Resume = Resume;
Content.Socials = Socials;

export default Content;
