import type { Metadata } from "next";
import { awards, education, experience, expertise, profile, resumeProjects, systems } from "../data";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume for Tushar Goyal, backend engineer focused on scalable APIs, distributed systems, infrastructure, and production workflows.",
  alternates: {
    canonical: "/resume/"
  }
};

export default function ResumePage() {
  return (
    <main className="resumePage">
      <section className="resumeSheet" aria-label="Resume">
        <header className="resumeHeader">
          <div>
            <a className="resumeBack" href="/">
              Back to portfolio
            </a>
            <h1>{profile.name}</h1>
            <p>{profile.headline}</p>
          </div>
          <address>
            <a href={profile.phoneHref}>{profile.phone}</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github}>github.com/{profile.handle}</a>
            <a href={profile.linkedin}>linkedin.com/in/{profile.handle}</a>
            <span>{profile.location}</span>
          </address>
        </header>

        <section className="resumeSection">
          <h2>Summary</h2>
          <p>{profile.summary}</p>
        </section>

        <section className="resumeSection">
          <h2>Selected Systems</h2>
          <div className="resumeGrid">
            {systems.slice(0, 6).map((system) => (
              <article key={system.name}>
                <h3>{system.name}</h3>
                <p>{system.detail}</p>
                <strong>{system.evidence}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="resumeSection">
          <h2>Experience</h2>
          {experience.map((job) => (
            <article className="resumeJob" key={`${job.company}-${job.time}`}>
              <header>
                <h3>
                  {job.role}, {job.company}
                </h3>
                <span>
                  {job.time} - {job.location}
                </span>
              </header>
              <p className="resumeStack">{job.stack}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="resumeSection">
          <h2>Project Evidence</h2>
          {resumeProjects.map((project) => (
            <article className="resumeProject" key={project.title}>
              <h3>{project.title}</h3>
              <p>
                {project.time} - {project.tech.join(", ")}
              </p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div>
                {project.tech.slice(0, 5).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="resumeSection">
          <h2>Technical Expertise</h2>
          <div className="resumeSkills">
            {expertise.map((group) => (
              <p key={group.category}>
                <strong>{group.category}:</strong> {group.items.join(", ")}
              </p>
            ))}
          </div>
        </section>

        <section className="resumeSection">
          <h2>Education</h2>
          <article className="resumeJob">
            <header>
              <h3>
                {education.school}, {education.degree}
              </h3>
              <span>
                {education.location} - {education.time}
              </span>
            </header>
            <p>
              Major in {education.major}. {education.detail}
            </p>
          </article>
        </section>

        <section className="resumeSection">
          <h2>Awards</h2>
          {awards.map((award) => (
            <article className="resumeJob" key={award.title}>
              <header>
                <h3>{award.title}</h3>
                <span>{award.time}</span>
              </header>
              <p>{award.event}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
