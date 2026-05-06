import Image from "next/image";
import { CommandMenu } from "./components/CommandMenu";
import {
  architectureStudies,
  awards,
  education,
  experience,
  expertise,
  heroMetrics,
  navigation,
  philosophy,
  profile,
  projects,
  systems,
  type DiagramNode,
  type Project
} from "./data";

function SectionHeader({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="sectionHeader">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

function ArchitectureFlow({
  nodes,
  compact = false,
  label
}: {
  nodes: DiagramNode[];
  compact?: boolean;
  label: string;
}) {
  return (
    <ol className={compact ? "diagramFlow diagramFlowCompact" : "diagramFlow"} aria-label={label}>
      {nodes.map((node) => (
        <li className={`diagramNode ${node.kind ?? "api"}`} key={`${node.label}-${node.detail}`}>
          <strong>{node.label}</strong>
          <span>{node.detail}</span>
        </li>
      ))}
    </ol>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="projectCard" id={project.slug}>
      <div className="projectIndex">0{index + 1}</div>
      <div className="projectMain">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p className="roleLine">{project.role}</p>

        <div className="projectGrid">
          <div>
            <h4>Engineering Problem</h4>
            <p>{project.problem}</p>
          </div>
          <div>
            <h4>Architecture Overview</h4>
            <p>{project.architecture}</p>
          </div>
          <div>
            <h4>Scalability Considerations</h4>
            <p>{project.scalability}</p>
          </div>
          <div>
            <h4>Production Impact</h4>
            <ul className="plainList">
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="decisionBlock">
          <h4>System Design Decisions</h4>
          <ul>
            {project.decisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </div>

        <div className="metricRow" aria-label={`${project.title} metrics`}>
          {project.metrics.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>

        <div className="techStack" aria-label={`${project.title} technologies`}>
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <aside className="projectDiagram" aria-label={`${project.title} architecture`}>
        {project.image ? (
          <div className="projectImage">
            <Image src={project.image} alt={`${project.title} interface preview`} width={420} height={240} />
          </div>
        ) : null}
        <ArchitectureFlow nodes={project.diagram} compact label={`${project.title} event flow`} />
      </aside>
    </article>
  );
}

function SystemPanel() {
  const logRows = [
    "api.gateway request_id=9f42 route=/orders status=202 latency=38ms",
    "worker.audit persisted actor=moderator action=close_ticket transcript=true",
    "cache.redis hit key=tracking:ondc ttl=84s source=shiprocket",
    "workflow.payments hold=created provider=paypal state=pending_release"
  ];

  return (
    <aside className="systemPanel" aria-label="Production backend system snapshot">
      <div className="panelHeader">
        <span className="statusDot" aria-hidden="true" />
        <span>prod-backend-control-plane</span>
      </div>
      <ArchitectureFlow
        compact
        label="Hero API request flow"
        nodes={[
          { label: "Client", detail: "request", kind: "client" },
          { label: "API", detail: "validate", kind: "api" },
          { label: "Queue", detail: "dispatch", kind: "queue" },
          { label: "Worker", detail: "process", kind: "worker" },
          { label: "Logs", detail: "observe", kind: "data" }
        ]}
      />
      <div className="terminal" aria-label="Production log examples">
        {logRows.map((row) => (
          <code key={row}>{row}</code>
        ))}
      </div>
      <div className="panelFooter">
        <span>p95 latency</span>
        <strong>tracked</strong>
        <span>audit trail</span>
        <strong>durable</strong>
      </div>
    </aside>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: "https://tushar.codes",
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    "Backend engineering",
    "Distributed systems",
    "Scalable APIs",
    "Production infrastructure",
    "Observability",
    "Real-time systems",
    "Event-driven architecture"
  ]
};

export default function Home() {
  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <header className="siteHeader">
        <div className="headerInner">
          <a className="brand" href="#home" aria-label="Tushar Goyal home">
            <span className="brandMark">tg</span>
            <span>
              Tushar Goyal
              <small>Backend Engineer</small>
            </span>
          </a>
          <nav aria-label="Primary navigation">
            {navigation.slice(0, 5).map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <CommandMenu />
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="container heroGrid">
            <div className="heroCopy">
              <p className="eyebrow">Backend Engineer - APIs, infrastructure, production systems</p>
              <h1>{profile.headline}</h1>
              <p className="heroLead">{profile.summary}</p>
              <div className="heroActions" aria-label="Primary links">
                <a className="button primary" href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="button" href={profile.resume}>
                  Resume
                </a>
                <a className="button" href={`mailto:${profile.email}`}>
                  Contact
                </a>
                <a className="button subtle" href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
              <dl className="heroMetrics">
                {heroMetrics.map((metric) => (
                  <div key={metric.label}>
                    <dt>{metric.value}</dt>
                    <dd>{metric.label}</dd>
                    <small>{metric.detail}</small>
                  </div>
                ))}
              </dl>
            </div>
            <SystemPanel />
          </div>
        </section>

        <section className="section compactSection" aria-label="Positioning summary">
          <div className="container signalBar">
            <span>Production APIs</span>
            <span>Distributed workflows</span>
            <span>Logging and observability</span>
            <span>Real-time infrastructure</span>
            <span>Commerce integrations</span>
          </div>
        </section>

        <section className="section" id="systems">
          <div className="container">
            <SectionHeader
              eyebrow="Systems I have built"
              title="Backend work presented as operational systems, not demos."
              body="Recruiters and engineering managers should be able to scan the page and see what I owned, where it ran, and why the architecture mattered."
            />
            <div className="systemsGrid">
              {systems.map((system) => (
                <article className="systemCard" key={system.name}>
                  <div>
                    <p>{system.type}</p>
                    <h3>{system.name}</h3>
                  </div>
                  <p>{system.detail}</p>
                  <footer>
                    <span>{system.scope}</span>
                    <strong>{system.evidence}</strong>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section surface" id="projects">
          <div className="container">
            <SectionHeader
              eyebrow="Selected backend projects"
              title="Production-oriented case studies with architecture and tradeoffs."
              body="Each project focuses on the backend problem, the system shape, scaling considerations, and the operational result."
            />
            <div className="projectStack">
              {projects.map((project, index) => (
                <ProjectCard project={project} index={index} key={project.slug} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="architecture">
          <div className="container">
            <SectionHeader
              eyebrow="Architecture and system design"
              title="How I think about request paths, events, logs, and state."
              body="The patterns below show how I break backend workflows into observable, retriable, maintainable pieces."
            />
            <div className="architectureGrid">
              {architectureStudies.map((study) => (
                <article className="architectureCard" key={study.title}>
                  <h3>{study.title}</h3>
                  <p>{study.summary}</p>
                  <ArchitectureFlow nodes={study.diagram} compact label={`${study.title} diagram`} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section surface" id="philosophy">
          <div className="container">
            <SectionHeader
              eyebrow="Engineering philosophy"
              title="I value systems that are understandable under pressure."
              body="Good backend work is not just passing tests. It is the ability to operate, debug, evolve, and trust a system after it ships."
            />
            <div className="philosophyGrid">
              {philosophy.map((item) => (
                <article className="philosophyItem" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="expertise">
          <div className="container">
            <SectionHeader
              eyebrow="Technical expertise"
              title="A backend stack organized by how production systems are built."
              body="The emphasis is service design, persistence, integrations, and operational workflows rather than a long unstructured keyword wall."
            />
            <div className="expertiseGrid">
              {expertise.map((group) => (
                <article className="expertiseCard" key={group.category}>
                  <h3>{group.category}</h3>
                  <div>
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section surface" id="experience">
          <div className="container">
            <SectionHeader
              eyebrow="Experience"
              title="Backend ownership across commerce, logistics, and community infrastructure."
              body="A concise view of the roles where I shipped APIs, automation, integrations, and production workflows."
            />
            <div className="timeline">
              {experience.map((job) => (
                <article className="timelineItem" key={`${job.company}-${job.time}`}>
                  <div className="timelineDate">{job.time}</div>
                  <div>
                    <h3>
                      {job.role} <span>{job.company}</span>
                    </h3>
                    <p>{job.location}</p>
                    <p className="stackLine">{job.stack}</p>
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="credentials">
          <div className="container">
            <SectionHeader
              eyebrow="Education and awards"
              title="Academic foundation plus applied systems wins."
              body="A compact view of the credentials and competitions from the resume that reinforce backend, integrations, and product-minded engineering."
            />
            <div className="credentialsGrid">
              <article className="credentialCard">
                <p className="eyebrow">Education</p>
                <h3>{education.school}</h3>
                <p>
                  {education.degree}, {education.major}
                </p>
                <footer>
                  <span>{education.location}</span>
                  <strong>{education.time}</strong>
                  <span>{education.detail}</span>
                </footer>
              </article>
              {awards.map((award) => (
                <article className="credentialCard" key={award.title}>
                  <p className="eyebrow">Award</p>
                  <h3>{award.title}</h3>
                  <p>{award.event}</p>
                  <footer>
                    <strong>{award.time}</strong>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contactSection" id="contact">
          <div className="container contactGrid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Available for backend and platform engineering conversations.</h2>
              <p>
                {profile.availability} I am strongest where APIs, integrations, production debugging,
                and infrastructure ownership meet.
              </p>
            </div>
            <div className="contactActions">
              <a className="button primary" href={`mailto:${profile.email}`}>
                Email
              </a>
              <a className="button" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="button subtle" href={profile.resume}>
                Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="siteFooter">
        <div className="container">
          <span>{profile.name}</span>
          <span>Backend systems, APIs, infrastructure, observability.</span>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
    </>
  );
}
