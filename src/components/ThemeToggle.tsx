import { createSignal, onCleanup, onMount } from "solid-js";
import { FiMoon, FiSun } from "solid-icons/fi";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const [dark, setDark] = createSignal(false);
  onMount(() => {
    const sync = () =>
      setDark(document.documentElement.classList.contains("dark"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    onCleanup(() => observer.disconnect());
  });

  function toggle() {
    const next = !dark();
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* Theme still works without storage. */
    }
    setDark(next);
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={dark() ? "Switch to light theme" : "Switch to dark theme"}
    >
      <FiSun class="theme-sun" aria-hidden="true" />
      <FiMoon class="theme-moon" aria-hidden="true" />
    </Button>
  );
}
