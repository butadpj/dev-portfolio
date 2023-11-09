import { createSignal, createEffect, onCleanup } from "solid-js";
import Content from "./components/Content";
import {
  FaBrandsDev,
  FaBrandsLinkedin,
  FaBrandsSquareGithub,
  FaBrandsSquareYoutube,
  FaSolidBars,
} from "solid-icons/fa";

export default function Navbar() {
  const [isContentOpen, setIsContentOpen] = createSignal(false);

  const handleNavOpen = () => {
    setIsContentOpen(true);
  };

  const handleNavClose = () => {
    setIsContentOpen(false);
  };

  createEffect(() => {
    const closeWhenClickOutside = (event: Event) => {
      let target = event.target as HTMLDivElement;
      if (
        !target.closest(".navbar-content") &&
        !target.closest(".navbar-bars")
      ) {
        handleNavClose();
      }
    };

    document.addEventListener("click", closeWhenClickOutside);

    onCleanup(() =>
      document.removeEventListener("click", closeWhenClickOutside)
    );
  });

  return (
    <>
      <nav class="navbar fixed z-10 flex w-full items-center justify-between border-b border-b-primary bg-background px-8 py-6">
        <div class="navbar-logo scrollToTop flex items-end gap-2">
          <img
            src="/assets/logo-transparent.svg"
            alt="butadpj's logo"
            width="33"
          />
          <span class="navbar-logo-text text-shadow-sm font-k2d text-3xl font-bold italic text-primary">
            butadpj
          </span>
        </div>

        <div
          onClick={handleNavOpen}
          class="navbar-bars hoverable cursor-pointer rounded-md bg-primary p-2.5 text-white"
        >
          <FaSolidBars size={35} />
        </div>
      </nav>

      <Content isOpen={isContentOpen()} closeButtonClick={handleNavClose}>
        <Content.Links
          links={[
            { to: "/", name: "Home" },
            { to: "#about", name: "About" },
            { to: "/#projects", name: "Projects" },
            { to: "/#contact", name: "Contact" },
          ]}
        />
        <Content.Resume />
        <Content.Socials
          socials={[
            {
              href: "https://github.com/butadpj",
              icon: <FaBrandsSquareGithub size={50} />,
            },
            {
              href: "https://dev.to/butadpj",
              icon: <FaBrandsDev size={50} />,
            },
            {
              href: "https://www.youtube.com/@butadpj",
              icon: <FaBrandsSquareYoutube size={50} />,
            },
            {
              href: "https://www.linkedin.com/in/paul-john-butad-5bb70a218",
              icon: <FaBrandsLinkedin size={50} />,
            },
          ]}
        />
      </Content>
    </>
  );
}
