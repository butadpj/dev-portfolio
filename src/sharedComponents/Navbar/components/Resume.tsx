import { FaSolidFileArrowDown } from "solid-icons/fa";

export default function Resume() {
  return (
    <div class="my-resume hoverable">
      <a
        class="flex items-center gap-2 text-2xl"
        href="./my_resume.pdf"
        download
      >
        My Resume <FaSolidFileArrowDown />
      </a>
    </div>
  );
}
