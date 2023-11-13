import Section from "../Section/Section";

interface HeroProps {
  // add props here
}

function Hero(props: HeroProps) {
  return (
    <Section
      class="p-8 pt-28 flex flex-col items-center"
      id="home"
      title={{ name: "Home" }}
      noTitle
    >
      <div class="home-img relative w-[90%] z-[2] max-w-md">
        <img
          class="coder parallax w-full"
          data-rate="1"
          src="./assets/coder.svg"
          alt="illustration-coder"
          width="255"
        />
        <div
          class="dots parallax absolute top-[20%] right-[-3%] z-[-1]"
          data-rate="5"
        >
          <img src="./assets/dots.svg" alt="dots-img" width="26" />
        </div>
      </div>

      <h1
        class="home-text parallax text-center text-primary text-5xl px-10 py-0 tracking-wide text-shadow leading-[5.5rem]"
        data-rate="-2.5"
      >
        I am a Developer
        <div>&lt;/&gt;</div>
      </h1>

      <div class="scroll-down parallax-opacity" data-rate="-1">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </div>
    </Section>
  );
}

export default Hero;
