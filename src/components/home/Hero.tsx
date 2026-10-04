import { FiArrowDown, FiArrowUpRight, FiDownload } from "solid-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { buttonVariants } from "../ui/button";
import { profile } from "../../data/portfolio";

export default function Hero() {
  return (
    <section class="hero site-container" id="home" aria-labelledby="hero-title">
      <div class="hero-intro">
        <p class="eyebrow">
          <span class="status-dot" aria-hidden="true" />
          Paul John Butad <span class="eyebrow-slash">/</span> AI Engineer &
          Founder
        </p>
        <p class="hero-location">From the Philippines, with a lot of coffee.</p>
      </div>
      <div class="hero-grid">
        <div class="hero-copy">
          <h1 id="hero-title">
            Build it.
            <br />
            Check it.
            <br />
            <span class="hero-emphasis">Improve it.</span>
          </h1>
          <p class="hero-description">
            I'm Paul. I build AI systems, evaluate what works, and use that
            feedback to make them better.
          </p>
          <div class="hero-actions">
            <a href="#projects" class={buttonVariants()}>
              Explore my work <FiArrowDown aria-hidden="true" />
            </a>
            <a
              href={profile.resume}
              download
              class={buttonVariants({ variant: "ghost" })}
            >
              My resume <FiDownload aria-hidden="true" />
            </a>
          </div>
          <div class="hero-note">
            <span class="code-sign" aria-hidden="true">
              &lt;/&gt;
            </span>
            <p>
              Still solving people's problems
              <br />
              with technology & design.
            </p>
          </div>
        </div>
        <div class="impact-grid" aria-labelledby="highlights-title">
          <h2 id="highlights-title" class="sr-only">
            Selected career contributions
          </h2>
          <Card class="impact-card impact-quality">
            <CardHeader>
              <p class="eyebrow">PioneerDev.AI / Quality</p>
              <CardTitle>
                AI needs a<br />
                feedback loop.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="metric-value">
                90% <span>fewer</span>
              </p>
              <p class="metric-description">
                Production AI chat regressions after introducing LLM-as-a-judge
                evaluations.
              </p>
              <div class="regression-chart" aria-hidden="true">
                {Array.from({ length: 40 }, (_, i) => (
                  <i class={i < 4 ? "remaining" : ""} />
                ))}
              </div>
              <p class="chart-caption">Relative regressions after evaluation</p>
            </CardContent>
          </Card>
          <Card class="impact-card impact-time">
            <CardHeader>
              <p class="eyebrow">Egoist Labs / Mentor time</p>
              <CardTitle>
                A whole day.
                <br />
                Now, half an hour.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="metric-value time-value">
                20–30<span> min</span>
              </p>
              <p class="metric-description">
                One mentor. Five learners. Differentiated lesson planning and
                task assignment, with AI.
              </p>
              <div class="time-comparison">
                <span class="old-time">A full day</span>
                <span aria-hidden="true">↗</span>
                <strong>Time to teach.</strong>
              </div>
            </CardContent>
          </Card>
          <Card class="impact-card impact-curriculum">
            <CardHeader>
              <p class="eyebrow">Egoist Labs / Curriculum</p>
              <CardTitle>
                Human feedback.
                <br />A better next version.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol class="feedback-flow">
                <li>Skill-based curriculum</li>
                <li>Expert review</li>
                <li>
                  AI regeneration <span aria-hidden="true">↺</span>
                </li>
              </ol>
              <p class="metric-description">
                Capability Studio supports updates for each 3–6-month cohort.
              </p>
            </CardContent>
          </Card>
          <Card class="impact-card impact-delivery">
            <CardHeader>
              <p class="eyebrow">PioneerDev.AI / Delivery</p>
              <CardTitle>
                Less repeated work.
                <br />
                More room to ship.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="metric-value">4×</p>
              <p class="metric-description">
                Feature deployment velocity with CI/CD and automated integration
                tests.
              </p>
              <a class="text-link" href="#experience">
                The work behind it <FiArrowUpRight aria-hidden="true" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
      <div class="hero-bottom">
        <p>
          <span class="small-label">Currently building</span>{" "}
          <a
            href="https://www.egoistlabs.com/"
            target="_blank"
            rel="noreferrer"
          >
            Egoist Labs <FiArrowUpRight aria-hidden="true" />
          </a>
        </p>
        <p class="hero-bottom-note">
          AI engineering · Evaluation · Learning systems
        </p>
      </div>
    </section>
  );
}
