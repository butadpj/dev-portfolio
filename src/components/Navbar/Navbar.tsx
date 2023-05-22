import { createSignal } from "solid-js";

function Navbar() {
  const [isSideNavOpen, setIsSideNavOpen] = createSignal(false);

  const translateX = () => (isSideNavOpen() ? "0" : "full");

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
          <span class="navbar-logo-text text-shadow-sm font-mitr text-xl font-medium italic text-primary ">
            butadpj
          </span>
        </div>

        <div
          onClick={handleNavOpen}
          class="navbar-bars cursor-pointer rounded-md bg-primary px-2 py-1 text-2xl text-light transition-all duration-300 hover:brightness-75"
        >
          <i class="fa-solid fa-bars"></i>
        </div>
      </nav>

      <div
        class={`content fixed bottom-0 left-1/4 right-0 top-0 translate-x-${translateX()} z-10 flex-col items-center justify-end gap-8 bg-primary transition-all`}
      >
        <div
          class="close-button absolute right-3 top-3 cursor-pointer px-5 py-3"
          onClick={handleNavClose}
        >
          <i class="fa-solid fa-arrow-right text-4xl text-light"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
