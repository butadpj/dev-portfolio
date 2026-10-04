// Adapted from shadcn-solid. See THIRD_PARTY_NOTICES.md.
import type { ComponentProps, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";
import { Root as ButtonPrimitive } from "@kobalte/core/button";
import { cx } from "./utils";

type ButtonVariant = "default" | "outline" | "ghost" | "link";
type ButtonSize = "default" | "sm" | "icon";

export function buttonVariants(
  props: {
    variant?: ButtonVariant;
    size?: ButtonSize;
    class?: string;
  } = {},
) {
  return cx(
    "ui-button",
    `ui-button--${props.variant ?? "default"}`,
    `ui-button--size-${props.size ?? "default"}`,
    props.class,
  );
}

export type ButtonProps<T extends ValidComponent = "button"> = ComponentProps<
  typeof ButtonPrimitive<T>
> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button<T extends ValidComponent = "button">(
  props: ButtonProps<T>,
) {
  const [, rest] = splitProps(props as ButtonProps, [
    "class",
    "variant",
    "size",
  ]);
  return (
    <ButtonPrimitive
      data-slot="button"
      class={buttonVariants(props)}
      {...rest}
    />
  );
}
