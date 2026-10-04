import { createSignal, For, onCleanup, onMount } from "solid-js";
import { FiArrowUpRight, FiMenu, FiX } from "solid-icons/fi";
import { navigation, profile } from "../../data/portfolio";
import { Button, buttonVariants } from "../../components/ui/button";
import ThemeToggle from "../../components/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = createSignal(false);
  let header: HTMLElement | undefined;
  let trigger: HTMLButtonElement | undefined;

  onMount(() => {
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header?.contains(event.target))
        setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open()) {
        setOpen(false);
        trigger?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const resize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    desktop.addEventListener("change", resize);
    onCleanup(() => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
      desktop.removeEventListener("change", resize);
    });
  });

  return (
    <header class="site-header" ref={header}>
      <div class="site-container header-inner">
        <a href="/" class="wordmark" aria-label="butadpj home">
          <img
            src="/assets/logo-transparent.svg"
            alt=""
            width="29"
            height="34"
          />
          <span>
            butadpj<span class="wordmark-dot">.</span>
          </span>
        </a>
        <nav class="desktop-nav" aria-label="Main navigation">
          <For each={navigation}>
            {(item) => <a href={item.href}>{item.label}</a>}
          </For>
        </nav>
        <div class="header-actions">
          <ThemeToggle />
          <a
            class={buttonVariants({
              variant: "outline",
              size: "sm",
              class: "header-resume",
            })}
            href={profile.resume}
            download
          >
            Resume <FiArrowUpRight aria-hidden="true" />
          </a>
          <Button
            ref={trigger}
            variant="ghost"
            size="icon"
            class="menu-toggle"
            aria-expanded={open()}
            aria-controls="mobile-navigation"
            aria-label={open() ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open())}
          >
            {open() ? (
              <FiX aria-hidden="true" />
            ) : (
              <FiMenu aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        class="mobile-nav site-container"
        hidden={!open()}
        aria-label="Mobile navigation"
      >
        <For each={navigation}>
          {(item) => (
            <a href={item.href} onClick={() => setOpen(false)}>
              {item.label}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </For>
        <a href={profile.resume} download onClick={() => setOpen(false)}>
          Download resume <FiArrowUpRight aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
