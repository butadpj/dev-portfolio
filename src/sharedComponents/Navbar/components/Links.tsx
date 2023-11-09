import { For } from "solid-js";

export interface Link {
  to: string;
  name: string;
  isActive?: boolean;
}

interface LinksProps {
  links: Link[];
}

export default function Links(props: LinksProps) {
  return (
    <ul class="links mb-10 flex list-none flex-col items-center gap-10 font-k2d text-3xl font-semibold">
      <For each={props.links}>
        {(link) => (
          <a class="nav-link" href={link.to}>
            <li class="hoverable">{link.name}</li>
          </a>
        )}
      </For>
    </ul>
  );
}
