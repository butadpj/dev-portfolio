import { FaSolidArrowLeft } from "solid-icons/fa";

export default function BackButton(props: { className?: string }) {
  return (
    <button
      onClick={() => {
        if (history.length) history.back();
        else window.location.href = "/";
      }}
      class={`hoverable flex items-center gap-2 font-k2d text-xl font-bold text-primaryDark ${props.className}`}
    >
      <FaSolidArrowLeft /> Go back
    </button>
  );
}
