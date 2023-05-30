import { For, JSX, Show, children, createSignal, mergeProps } from "solid-js";

interface Link {
  to: string;
  name: string;
}

function Navbar(props: {
  links?: Array<Link>;
  children?: JSX.Element;
  hideResume?: boolean;
  hideSocials?: boolean;
}) {
  const defaultProps = {
    links: [{ to: "/", name: "Home" }],
    hideResume: false,
    hideSocials: false,
  };

  const { links, hideResume, hideSocials } = mergeProps(defaultProps, props);

  const [isSideNavOpen, setIsSideNavOpen] = createSignal(false);

  const translateX = () =>
    isSideNavOpen() ? "translate-x-0" : "translate-x-full";

  const handleNavOpen = () => {
    setIsSideNavOpen(true);
  };

  const handleNavClose = () => {
    setIsSideNavOpen(false);
  };

  return (
    <>
      <nav class="navbar fixed z-10 flex w-full items-center justify-between border-b border-b-primary bg-background px-6 py-4">
        <div class="navbar-logo scrollToTop flex items-center gap-1 ">
          <img
            src="/assets/logo-transparent.svg"
            alt="butadpj's logo"
            width="22"
          />
          <span class="navbar-logo-text text-shadow-sm font-mitr text-xl font-medium italic text-primary">
            butadpj
          </span>
        </div>

        <div
          onClick={handleNavOpen}
          class="navbar-bars hoverable cursor-pointer rounded-md bg-primary px-2 py-1 text-2xl text-light"
        >
          <i class="fa-solid fa-bars"></i>
        </div>
      </nav>

      <div
        class={`content fixed bottom-0 left-1/4 right-0 top-0 ${translateX()} z-10 flex flex-col items-center justify-end gap-8 bg-primary pb-10 transition-all duration-200`}
      >
        <div
          class="close-button hoverable absolute right-3 top-3 cursor-pointer px-5 py-3"
          onClick={handleNavClose}
        >
          <i class="fa-solid fa-arrow-right text-4xl text-light"></i>
        </div>

        <Show when={links.length}>
          <ul class="links mb-10 flex list-none flex-col items-center gap-8 font-k2d text-lg font-semibold">
            <For each={links}>
              {(link) => (
                <a class="nav-link" href={link.to}>
                  <li class="hoverable">{link.name}</li>
                </a>
              )}
            </For>
          </ul>
        </Show>

        <Show when={hideResume === false}>
          <div class="my-resume hoverable">
            <a href="./my_resume.pdf" download>
              My Resume <i class="fa-solid fa-file-arrow-down"></i>
            </a>
          </div>
        </Show>

        <Show when={hideSocials === false}>
          <div class="socials flex flex-row flex-wrap items-center justify-center gap-3 px-8 text-4xl">
            <a
              class="hoverable"
              href="https://github.com/butadpj"
              target="_blank"
            >
              <i class="fa-brands fa-github-square"></i>
            </a>
            <a class="hoverable" href="https://dev.to/butadpj" target="_blank">
              <i class="fa-brands fa-dev"></i>
            </a>
            <a
              class="hoverable"
              href="https://www.youtube.com/channel/UCm5yxy-NWpLemAsF278NsUQ"
              target="_blank"
            >
              <i class="fa-brands fa-youtube-square"></i>
            </a>
            <a
              class="hoverable"
              href="https://www.linkedin.com/in/paul-john-butad-5bb70a218/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </Show>
      </div>
    </>
  );
}

export default Navbar;
