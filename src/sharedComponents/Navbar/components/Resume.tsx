import { FaSolidFileArrowDown } from "solid-icons/fa";

export default function Resume(props: { class?: string }) {
  return (
    <div class="my-resume hoverable">
      <a
        class={`flex items-center gap-2 ${props.class}`}
        href="./Paul's Resume.pdf"
        download
      >
        My Resume <FaSolidFileArrowDown />
      </a>
    </div>
  );
}
