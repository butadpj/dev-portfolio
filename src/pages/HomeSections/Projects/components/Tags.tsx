import { For, Show } from "solid-js";

interface TagsProps {
  tags: string[];
}

function Tags(props: TagsProps) {
  return (
    <Show when={props.tags.length > 0}>
      <div class="tags flex flex-row flex-wrap gap-4">
        <For each={props.tags}>
          {(tag) => (
            <span class="rounded-full bg-dark px-4 py-2 font-k2d text-sm font-medium text-light">
              {tag}
            </span>
          )}
        </For>
      </div>
    </Show>
  );
}

export default Tags;
