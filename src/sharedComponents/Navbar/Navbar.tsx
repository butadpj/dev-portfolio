import { createSignal, onMount } from "solid-js";
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
  scrollToActiveLink,
  updateActiveLinkOnScroll,
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
    updateActiveLinkOnScroll(setActiveLink);
    scrollToActiveLink(setActiveLink);
  });

  return (
    <>
      <nav class="navbar glassmorphism fixed z-30 flex w-full items-center justify-between border-b border-b-primary bg-background px-6 py-4 transition-transform duration-300 md:px-10 md:py-6 lg:border-none lg:!bg-transparent lg:px-16 lg:py-8 lg:!shadow-none lg:!backdrop-blur-none">
        <div
          class={`navbar-logo scrollToTop hoverable flex items-end gap-2 ${
            isContentOpen() ? "opacity-0" : "opacity-100"
          } `}
        >
          <img
            class="md:w-8"
            src="/assets/logo-transparent.svg"
            alt="butadpj's logo"
            width="22"
          />
          <span class="navbar-logo-text text-shadow-sm font-k2d text-xl font-bold italic text-primary md:text-2xl">
            butadpj
          </span>
        </div>

        <div
          onClick={openNav}
          class="navbar-bars hoverable cursor-pointer rounded-md bg-primary p-2 text-white"
        >
          <FaSolidBars class="text-xl md:text-2xl lg:text-3xl" />
        </div>
      </nav>

      <Content
        class="glassmorphism-primary"
        isOpen={isContentOpen()}
        closeButtonClick={closeNav}
      >
        <Content.Links links={initLinks()} setActiveLink={setActiveLink} />
        <Content.Resume />
        <Content.Socials
          class="text-3xl md:text-5xl"
          socials={[
            {
              href: "https://github.com/butadpj",
              icon: <FaBrandsSquareGithub />,
            },
            {
              href: "https://dev.to/butadpj",
              icon: <FaBrandsDev />,
            },
            {
              href: "https://www.youtube.com/@butadpj",
              icon: <FaBrandsSquareYoutube />,
            },
            {
              href: "https://www.linkedin.com/in/paul-john-butad-5bb70a218",
              icon: <FaBrandsLinkedin />,
            },
          ]}
        />
      </Content>
    </>
  );
}
