import { type Setter } from "solid-js";

function debounce(func: () => void, delay: number) {
  let timeoutId: number | undefined;

  // Clear the previous timeout
  clearTimeout(timeoutId);

  // Set a new timeout
  timeoutId = setTimeout(() => {
    func();
  }, delay);
}
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
  const navbar = document.querySelector("nav");
  const navbarLogo = document.querySelector(".navbar-logo");
  const navbarContent = document.querySelector(".navbar-content");

  const BODY = document.documentElement || document.body;

  const handler = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        setActiveLink(section.id);
      }

      if (
        section.id === "contact" &&
        BODY.scrollTop >= section.offsetTop - 70
      ) {
        navbar?.classList.add("hide");
        navbarContent?.classList.remove("show");
      } else {
        navbar?.classList.remove("hide");
        navbarLogo?.classList.remove("hide");
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

    if (target.matches(".hoverable")) {
      const sectionId = `#${target.textContent?.toLowerCase()}`;
      const section = document.querySelector(sectionId) as HTMLElement;

      setActiveLink(section.id);
      BODY.scrollTop = section.offsetTop - 70;
    }
  });
}
