import type { JSXElement } from "solid-js";

interface ButtonProps {
  // add props here
  children?: JSXElement;
  theme?: "dark" | "outline" | "outline-light" | "outline-dark";
  class?: string;
}

function Button(props: ButtonProps) {
  const getButtonTheme = () => {
    switch (props.theme) {
      case "dark":
        return "border-dark bg-dark text-light";

      case "outline":
        return "border-primaryDark bg-transparent text-primaryDark hover:text-light hover:border-primaryDark hover:shadow-[inset_12rem_0_0_0_var(--primaryDark)]";

      case "outline-light":
        return "border-light bg-transparent text-light hover:text-dark hover:border-light hover:shadow-[inset_12rem_0_0_0_var(--light)]";

      case "outline-dark":
        return "border-dark dark:border-light bg-transparent text-dark dark:text-light hover:text-light dark:hover:text-dark hover:border-dark dark:hover:border-light hover:shadow-[inset_12rem_0_0_0_var(--dark)] dark:hover:shadow-[inset_12rem_0_0_0_var(--light)]";

      default:
        return "border-primaryDark bg-primaryDark text-light";
    }
  };

  return (
    <button
      class={`cursor-pointer rounded-md border p-2 transition-all duration-500 ${getButtonTheme()} ${
        props.class
      }`}
    >
      {props.children}
    </button>
  );
}

export default Button;
