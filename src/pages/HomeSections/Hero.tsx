import Section from "../../sharedComponents/Section";
import ScrollDown from "../../sharedComponents/ScrollDown/ScrollDown";

interface HeroProps {
  // add props here
}

function Hero(props: HeroProps) {
  return (
    <Section
      class="flex flex-col items-center p-8 pt-28"
      id="home"
      title={{ name: "Home" }}
      noTitle
    >
      <div class="home-img relative w-[90%] max-w-md">
        <img
          class="coder parallax w-full"
          data-rate="1"
          src="./assets/coder.svg"
          alt="illustration-coder"
          width="255"
        />
        <div class="dots parallax absolute right-[-3%] top-[20%]" data-rate="5">
          <img src="./assets/dots.svg" alt="dots-img" width="26" />
        </div>
      </div>

      <h1
        class="home-text parallax text-shadow px-10 py-0 text-center text-5xl leading-[5.5rem] tracking-wide text-primary"
        data-rate="-2.5"
      >
        I am a Developer
        <div>&lt;/&gt;</div>
      </h1>

      <ScrollDown />
    </Section>
  );
}

export default Hero;
