import Collapsible from "../../sharedComponents/Collapsible/Collapsible";
import Section from "../../sharedComponents/Section";

interface AboutProps {
  // add props here
}

function About(props: AboutProps) {
  return (
    <Section
      id="about"
      noTitle
      class="mx-auto my-0 flex max-w-[40rem] flex-col gap-y-8 px-10 py-8"
    >
      <h2 class="about-hello text-3xl text-primaryDark">
        Hello <span class="wave">👋</span>,
      </h2>
      <div class="about-text text mb-4 text-xl font-medium">
        I'm Paul, I love solving people's problems with my passion in{" "}
        <span>technology</span> and <span>design</span>.
      </div>
      <Collapsible>
        <Collapsible.Trigger label="Experiences:" />
        <Collapsible.Content>
          <ul class="flex list-inside list-disc flex-col gap-3">
            <li>
              3 years of experience in <span>Frontend Development</span>
            </li>
            <li>
              2 years of experience in <span>ReactJS</span> and{" "}
              <span>UI/UX design</span>
            </li>
            <li>
              2 years of experience in <span>Backend (API) Development</span>
            </li>
          </ul>
        </Collapsible.Content>
      </Collapsible>

      <Collapsible>
        <Collapsible.Trigger label="More info:" />
        <Collapsible.Content>
          <ul class="flex list-inside list-disc flex-col gap-3">
            <li>Self taught ✨</li>
            <li>From Philippines 🇵🇭</li>
          </ul>
        </Collapsible.Content>
      </Collapsible>

      <Collapsible initiallyClose>
        <Collapsible.Trigger label="Fun facts about me:" />
        <Collapsible.Content>
          <ul class="flex list-inside list-disc flex-col gap-3">
            <li>I love boxing 🥊</li>
            <li>I love rap music 🎵</li>
          </ul>
        </Collapsible.Content>
      </Collapsible>
    </Section>
  );
}

export default About;
