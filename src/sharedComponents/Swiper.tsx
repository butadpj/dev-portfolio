import { For, Show, type JSX } from "solid-js";
import { register } from "swiper/element/bundle";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": any;
      "swiper-slide": any;
    }
  }
}

interface Props {
  className?: string;
  children?: JSX.Element;
  bgImageUrl?: string;
  slides?: Array<SlideProps>;
}

register();

export default function Swiper(props: Props) {
  const spaceBetween = 10;
  const onProgress = (e) => {
    const [swiper, progress] = e.detail;
    console.log(progress);
  };
  const onSlideChange = (e) => {
    console.log("slide changed");
  };
  return (
    <swiper-container
      style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
      class={props.className}
      slides-per-view={1}
      space-between={spaceBetween}
      centered-slides={true}
      navigation="true"
      pagination={{
        clickable: true,
      }}
      onSwiperprogress={onProgress}
      onSwiperslidechange={onSlideChange}
      parallax="true"
    >
      <BgImage url={props.bgImageUrl} />
      <Show when={props.slides && props.slides.length > 0}>
        <For each={props.slides}>
          {(slide) => (
            <Slide title={slide.title} description={slide.description} />
          )}
        </For>
      </Show>
    </swiper-container>
  );
}

function BgImage(props: { url?: string }) {
  return (
    <div
      slot="container-start"
      class="parallax-bg absolute left-0 top-0 h-full w-[130%] bg-cover bg-center"
      style={{
        "background-image": `url(${
          props.url || "https://swiperjs.com/demos/images/nature-1.jpg"
        })`,
      }}
      data-swiper-parallax="-23%"
    ></div>
  );
}

export interface SlideProps {
  title: string;
  description: string;
}

function Slide(props: SlideProps) {
  return (
    <swiper-slide class="flex flex-col items-center justify-center gap-5 text-center text-white md:gap-8 lg:gap-12">
      <div class="title text-2xl md:text-4xl lg:text-5xl">{props.title}</div>
      <p class="text max-w-xs md:max-w-sm md:text-xl lg:max-w-xl lg:text-2xl">
        {props.description}
      </p>
    </swiper-slide>
  );
}
