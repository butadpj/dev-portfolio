import { FaSolidFileArrowDown } from "solid-icons/fa";

export default function Resume(props: { class?: string }) {
  return (
    <div class="my-resume hoverable">
      <a
        class={`flex items-center gap-2 ${props.class}`}
        href="./my_resume.pdf"
        download
      >
        My Resume <FaSolidFileArrowDown />
      </a>
    </div>
  );
}
