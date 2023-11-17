export function parallax() {
  const parallaxElements = document.querySelectorAll(".parallax");
  const parallaxOpacityElements =
    document.querySelectorAll(".parallax-opacity");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    if (parallaxElements.length) {
      parallaxElements.forEach((element) => {
        const el = element as HTMLElement;
        const rate = Number(el.dataset.rate);

        if (rate) {
          const pos = scrolled * (rate / 10);
          el.style.transform = `translate3d(0px, ${pos}px, 0px)`;
          return;
        }

        el.style.transform = `translate3d(0px, ${scrolled * -0.3}px, 0px)`;
      });
    }

    if (parallaxOpacityElements.length) {
      parallaxOpacityElements.forEach((element) => {
        const el = element as HTMLElement;
        const offset = el.offsetTop - 110;
        const opacity = (scrolled / offset - 1) * -1;
        el.style.opacity = String(opacity);

        const rate = Number(el.dataset.rate);
        if (rate) {
          const pos = scrolled * (rate / 10);
          el.style.transform = `translate3d(0px, ${pos}px, 0px)`;
          return;
        }

        el.style.transform = `translate3d(0px, ${scrolled * -0.3}px, 0px)`;
      });
    }
  });
}
