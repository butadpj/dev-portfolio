// Adapted from shadcn-solid. See THIRD_PARTY_NOTICES.md.
import type { ComponentProps } from "solid-js";
import { splitProps } from "solid-js";
import { cx } from "./utils";

export function Card(props: ComponentProps<"div">) {
  const [, rest] = splitProps(props, ["class"]);
  return <div data-slot="card" class={cx("ui-card", props.class)} {...rest} />;
}

export function CardHeader(props: ComponentProps<"div">) {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <div
      data-slot="card-header"
      class={cx("ui-card-header", props.class)}
      {...rest}
    />
  );
}

export function CardTitle(props: ComponentProps<"h3">) {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <h3
      data-slot="card-title"
      class={cx("ui-card-title", props.class)}
      {...rest}
    />
  );
}

export function CardDescription(props: ComponentProps<"p">) {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <p
      data-slot="card-description"
      class={cx("ui-card-description", props.class)}
      {...rest}
    />
  );
}

export function CardContent(props: ComponentProps<"div">) {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <div
      data-slot="card-content"
      class={cx("ui-card-content", props.class)}
      {...rest}
    />
  );
}

export function CardFooter(props: ComponentProps<"div">) {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <div
      data-slot="card-footer"
      class={cx("ui-card-footer", props.class)}
      {...rest}
    />
  );
}
