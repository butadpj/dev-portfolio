import { type JSX } from "solid-js";
import Links from "./Links";
import Resume from "./Resume";
import Socials from "../../Socials";
import { FaSolidArrowRight } from "solid-icons/fa";

interface ContentProps {
  children: JSX.Element;
  class?: string;
  isOpen: boolean;
  closeButtonClick: () => void;
}

function Content(props: ContentProps) {
  const translateX = () =>
    props.isOpen ? "translate-x-0" : "translate-x-full";

  return (
    <div
      class={`navbar-content fixed bottom-0 left-1/4  right-0 top-0 ${translateX()} z-40 flex flex-col items-center justify-end gap-[8vh] bg-primary pb-[8vh] text-xl text-white transition-all duration-200 md:text-2xl lg:left-[40%] ${
        props.class
      }`}
    >
      <div
        class="close-button hoverable absolute right-2 top-3 cursor-pointer px-5 py-3 text-3xl md:right-5 md:text-4xl lg:right-11 lg:top-6 lg:text-[2.5rem]"
        onClick={() => props.closeButtonClick()}
      >
        <FaSolidArrowRight />
      </div>

      {props.children}
    </div>
  );
}

Content.Links = Links;
Content.Resume = Resume;
Content.Socials = Socials;

export default Content;
