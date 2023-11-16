export function collapsibleLogic(collapsible: HTMLDivElement) {
  const angleDownPath =
    "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  const angleRightPath =
    "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z";

  const trigger = collapsible.querySelector(".trigger") as HTMLElement | null;

  if (!trigger) {
    throw new Error("<Trigger /> component is needed inside <Collapsible />");
  }

  const content = collapsible.querySelector(".content") as HTMLElement | null;

  if (!content) {
    throw new Error("<Content /> component is needed inside <Collapsible />");
  }

  trigger.addEventListener("click", () => {
    const toggleIconPath = trigger.querySelector("svg")?.querySelector("path");

    if (collapsible.classList.contains("open")) {
      toggleIconPath?.setAttribute("d", angleRightPath);
      collapsible.classList.remove("open");
      content.style.maxHeight = "0";
    } else {
      toggleIconPath?.setAttribute("d", angleDownPath);
      collapsible.classList.add("open");
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  });

  // Initialize the maxHeight value
  if (collapsible.classList.contains("open")) {
    content.style.maxHeight = `${content.scrollHeight}px`;

    // Bad hack - ensure the toggle icon renders first
    setTimeout(() => {
      const toggleIconPath = trigger
        .querySelector("svg")
        ?.querySelector("path");

      toggleIconPath?.setAttribute("d", angleDownPath);
    }, 0);
  }
}
