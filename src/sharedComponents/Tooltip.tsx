import { Tooltip as _Tooltip } from "@kobalte/core/tooltip";
import { createSignal, type JSX } from "solid-js";

export default function Tooltip(props: {
  trigger?: JSX.Element;
  content?: JSX.Element;
}) {
  const [open, setOpen] = createSignal(false);

  return (
    <_Tooltip
      open={open()}
      onOpenChange={setOpen}
      openDelay={200}
      closeDelay={200}
      fitViewport
    >
      <_Tooltip.Trigger
        class="text-left underline"
        onclick={() => {
          setOpen(true);
        }}
      >
        {props.trigger || "Hover me!"}
      </_Tooltip.Trigger>
      <_Tooltip.Portal>
        <_Tooltip.Content class="z-50 max-w-sm origin-[var(--kb-tooltip-content-transform-origin)] rounded-lg border border-white bg-dark px-3 py-2 font-normal text-primary md:max-w-lg lg:max-w-2xl">
          <_Tooltip.Arrow />
          {props.content || <div>Tooltip content</div>}
        </_Tooltip.Content>
      </_Tooltip.Portal>
    </_Tooltip>
  );
}
