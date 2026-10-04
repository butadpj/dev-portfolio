// Adapted from shadcn-solid. See THIRD_PARTY_NOTICES.md.
import type { ComponentProps, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";
import { Accordion as AccordionPrimitive } from "@kobalte/core/accordion";
import { cx } from "./utils";

export const Accordion = AccordionPrimitive;

export function AccordionItem<T extends ValidComponent = "div">(
  props: ComponentProps<typeof AccordionPrimitive.Item<T>>,
) {
  const [, rest] = splitProps(
    props as ComponentProps<typeof AccordionPrimitive.Item<"div">>,
    ["class"],
  );
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      class={cx("ui-accordion-item", props.class)}
      {...rest}
    />
  );
}

export function AccordionTrigger<T extends ValidComponent = "button">(
  props: ComponentProps<typeof AccordionPrimitive.Trigger<T>>,
) {
  const [, rest] = splitProps(
    props as ComponentProps<typeof AccordionPrimitive.Trigger<"button">>,
    ["class", "children"],
  );
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        class={cx("ui-accordion-trigger", props.class)}
        {...rest}
      >
        {props.children}
        <svg
          class="accordion-chevron"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="m6 9 6 6 6-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent<T extends ValidComponent = "div">(
  props: ComponentProps<typeof AccordionPrimitive.Content<T>>,
) {
  const [, rest] = splitProps(
    props as ComponentProps<typeof AccordionPrimitive.Content<"div">>,
    ["class", "children"],
  );
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      class="ui-accordion-content"
      {...rest}
    >
      <div class={cx("ui-accordion-body", props.class)}>{props.children}</div>
    </AccordionPrimitive.Content>
  );
}
