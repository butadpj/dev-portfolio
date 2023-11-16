import Section from "../../../sharedComponents/Section";
import Preview from "./components/Preview";

interface ProjectsProps {
  // add props here
}

function Projects(props: ProjectsProps) {
  return (
    <Section class="px-6 py-16" id="projects" title={{ name: "Projects" }}>
      <div class="project-previews mt-20 flex flex-wrap items-start justify-center gap-8">
        <Preview
          isSuperProject
          logo={
            <img src="./assets/game-antena-logo.svg" alt="game-antena-logo" />
          }
          description="Browse Top Games and Streams from popular platforms like Twitch &
        Youtube"
          tags={["Fullstack", "User Auth", "Caching", "Email Confirm"]}
          demoLink="https://game-antena.com"
        />

        <Preview
          class="no-highlight"
          logo={<p>Game-Antena's (API) backend</p>}
          description="Game-Antena's API made with Typescript (NestJS)"
          tags={["API Integration", "Docker", "CI/CD", "PostgreSQL"]}
          demoLink="https://api.game-antena.com/twitch/gaming-streams"
        />

        <Preview
          isSuperProject
          class="no-highlight"
          logo={
            <>
              <img src="./assets/modern-web-dev-logo.svg" width="30" alt="" />
              <p>modern-web-dev</p>
            </>
          }
          description="Setup lightweight modern web app development with no configuration"
          tags={[
            "Boilerplate",
            "Package",
            "Multi-page apps",
            "Static websites",
          ]}
          demoLink="https://www.npmjs.com/package/create-modern-web-dev"
          demoButtonText="Check on NPM"
          PS={
            <>
              <a class="underline" href="https://vitejs.dev/" target="_blank">
                Vite
              </a>{" "}
              killed this project lol 💀
            </>
          }
        />

        <Preview
          class="no-highlight"
          logo="Bracketour"
          description="Tournament bracket generator using JavaScript"
          tags={["Vanilla JS", "Jest (Testing)", "Modularized Code"]}
          demoLink="https://butadpj.github.io/bracketour/"
        />
      </div>
    </Section>
  );
}

export default Projects;
