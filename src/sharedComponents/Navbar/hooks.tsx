import { onCleanup, type Setter } from "solid-js";

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

  onCleanup(() => document.removeEventListener("click", handler));
}

export function updateActiveLinks(setActiveLink: Setter<string>) {
  const sections = document.querySelectorAll("section");
  const navbar = document.querySelector("nav");
  const navbarLogo = document.querySelector(".navbar-logo");
  const navbarContent = document.querySelector(".navbar-content");

  const BODY = document.documentElement || document.body;

  const handler = () => {
    sections.forEach((section) => {
      if (section.offsetTop - 70 <= BODY.scrollTop) {
        debounce(() => {
          setActiveLink(section.id);
        }, 100);
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

    onCleanup(() => window.removeEventListener("scroll", handler));
  }
}

export function smoothSectionScrolling() {
  // const navLinks = document.querySelectorAll(".nav-link");
  // const BODY = document.documentElement || document.body;
  // if (navLinks.length > 0) {
  //   navLinks.forEach((link) => {
  //     link.addEventListener("click", (e) => {
  //       const sectionId = link.getAttribute("href");
  //       console.log(sectionId);
  //       if (sectionId?.[0] === "#") {
  //         e.preventDefault();
  //         const section = document.querySelector(sectionId);
  //         console.log(section.offsetTop);
  //         // Scroll with offset
  //         BODY.scrollTop = section.offsetTop - 70;
  //         location.hash = "SADSDA";
  //       }
  //     });
  //   });
  // }
}
