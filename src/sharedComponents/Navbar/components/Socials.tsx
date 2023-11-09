import { For, type JSX } from "solid-js";

interface SocialProps {
  href: string;
  icon: JSX.Element;
}

interface SocialsProps {
  socials: SocialProps[];
}

export default function Socials(props: SocialsProps) {
  return (
    <div class="socials flex flex-row flex-wrap items-center justify-center gap-3 px-8">
      <For each={props.socials}>
        {({ href, icon }) => (
          <a class="hoverable" href={href} target="_blank">
            {icon}
          </a>
        )}
      </For>
    </div>
  );
}
