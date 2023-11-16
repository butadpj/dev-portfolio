import { createEffect, createSignal, onMount } from "solid-js";
import Content from "./components/Content";
import {
  FaBrandsDev,
  FaBrandsLinkedin,
  FaBrandsSquareGithub,
  FaBrandsSquareYoutube,
  FaSolidBars,
} from "solid-icons/fa";
import {
  closeWhenClickOutside,
  smoothSectionScrolling,
  updateActiveLinks,
} from "./hooks";

export default function Navbar() {
  const [activeLink, setActiveLink] = createSignal<string>("home");
  const [isContentOpen, setIsContentOpen] = createSignal(false);

  const openNav = () => {
    setIsContentOpen(true);
  };

  const closeNav = () => {
    setIsContentOpen(false);
  };

  const initLinks = () => {
    const links = [
      { to: "#home", name: "Home" },
      { to: "#about", name: "About" },
      { to: "#projects", name: "Projects" },
      { to: "#contact", name: "Contact" },
    ];

    return links.map((link) => {
      if (link.name.toLowerCase() === activeLink()) {
        return { ...link, isActive: true };
      }
      return link;
    });
  };

  onMount(() => {
    closeWhenClickOutside(closeNav);
    updateActiveLinks(setActiveLink);
    smoothSectionScrolling();
  });

  return (
    <>
      <nav class="navbar fixed z-10 flex w-full items-center justify-between border-b border-b-primary bg-background px-6 py-4">
        <div
          class={`navbar-logo scrollToTop hoverable flex items-end gap-2 ${
            isContentOpen() ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src="/assets/logo-transparent.svg"
            alt="butadpj's logo"
            width="22"
          />
          <span class="navbar-logo-text text-shadow-sm font-k2d text-xl font-bold italic text-primary">
            butadpj
          </span>
        </div>

        <div
          onClick={openNav}
          class="navbar-bars hoverable cursor-pointer rounded-md bg-primary p-2 text-white"
        >
          <FaSolidBars size={22} />
        </div>
      </nav>

      <Content
        class="text-2xl text-white"
        isOpen={isContentOpen()}
        closeButtonClick={closeNav}
      >
        <Content.Links links={initLinks()} setActiveLink={setActiveLink} />
        <Content.Resume class="text-xl" />
        <Content.Socials
          socials={[
            {
              href: "https://github.com/butadpj",
              icon: <FaBrandsSquareGithub size={45} />,
            },
            {
              href: "https://dev.to/butadpj",
              icon: <FaBrandsDev size={45} />,
            },
            {
              href: "https://www.youtube.com/@butadpj",
              icon: <FaBrandsSquareYoutube size={45} />,
            },
            {
              href: "https://www.linkedin.com/in/paul-john-butad-5bb70a218",
              icon: <FaBrandsLinkedin size={45} />,
            },
          ]}
        />
      </Content>
    </>
  );
}
