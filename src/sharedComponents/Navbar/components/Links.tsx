import { For, type Setter } from "solid-js";

export interface Link {
  to: string;
  name: string;
  isActive?: boolean;
}

interface LinksProps {
  class?: string;
  links: Link[];
  setActiveLink: Setter<"Home" | "Projects" | "About" | "Contact" | string>;
}

export default function Links(props: LinksProps) {
  const activeLinkClass = () =>
    "active text-shadow underline underline-offset-8 decoration-4";

  return (
    <ul
      class={`navbar-links mb-10 flex list-none flex-col items-center gap-10 font-k2d font-semibold ${props.class}`}
    >
      <For each={props.links}>
        {(link) => (
          <a
            onClick={() => props.setActiveLink(link.name.toLowerCase())}
            class={`nav-link ${link.isActive ? activeLinkClass() : ""}`}
            href={link.to}
          >
            <li class="hoverable">{link.name}</li>
          </a>
        )}
      </For>
    </ul>
  );
}
