import { type Setter } from "solid-js";

const OFFSET = 71;

export function closeWhenClickOutside(closeNav: () => void) {
  const navbarBars = document.querySelector(".navbar-bars");
  const navbarContent = document.querySelector(".navbar-content");

  const handler = (event: Event) => {
    let target = event.target as HTMLDivElement;
    if (
      !navbarContent?.contains(target) &&
      !navbarBars?.contains(target) &&
      !target.classList.contains("hoverable")
    ) {
      closeNav();
    }
  };

  document.addEventListener("click", handler);
}

export function updateActiveLinkOnScroll(setActiveLink: Setter<string>) {
  const sections = document.querySelectorAll("section");
  const BODY = document.documentElement || document.body;

  const handler = () => {
    sections.forEach((section) => {
      if (section.offsetTop - OFFSET <= BODY.scrollTop) {
        setActiveLink(section.id);
      }
    });
  };

  if (sections.length) {
    window.addEventListener("scroll", handler);
  }
}

export function scrollToActiveLink(setActiveLink: Setter<string>) {
  const navLinks = document.querySelector(".navbar-links");
  const BODY = document.documentElement || document.body;

  navLinks?.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const anchorElement = target.parentNode as HTMLElement;

    if (anchorElement?.matches(".nav-link")) {
      const sectionId = anchorElement.getAttribute("href") || "";
      const section = document.querySelector(sectionId) as HTMLElement;

      setActiveLink(section.id);
      BODY.scrollTop = section.offsetTop - OFFSET;
    }
  });
}
