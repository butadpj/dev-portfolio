import { For } from "solid-js";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { experience } from "../../data/portfolio";

export default function Experience() {
  return (
    <section
      class="experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div class="section-heading compact-heading">
        <h2 id="experience-title">Where I've been building.</h2>
        <p>A little more context.</p>
      </div>
      <Accordion collapsible defaultValue={["pioneer"]} class="experience-list">
        <For each={experience}>
          {(job) => (
            <AccordionItem value={job.id}>
              <AccordionTrigger>
                <span class="experience-main">
                  <span class="experience-company">{job.company}</span>
                  <span class="experience-role">{job.role}</span>
                </span>
                <span class="experience-meta">
                  <span>{job.dates}</span>
                  <span>{job.focus}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul class="experience-details">
                  <For each={job.details}>{(detail) => <li>{detail}</li>}</For>
                </ul>
              </AccordionContent>
            </AccordionItem>
          )}
        </For>
      </Accordion>
    </section>
  );
}
