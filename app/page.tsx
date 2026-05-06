import Image from "next/image";
import { CommandMenu } from "./components/CommandMenu";
import {
  architectureStudies,
  awards,
  education,
  engineeringNotes,
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
  label
}: {
  nodes: DiagramNode[];
  label: string;
}) {
  return (
    <ol className="flowRail" aria-label={label}>
      {nodes.map((node, index) => (
        <li className={`flowStep ${node.kind ?? "api"}`} key={`${node.label}-${node.detail}`}>
          <span className="stepIndex">{String(index + 1).padStart(2, "0")}</span>
          <strong>{node.label}</strong>
          <small>{node.detail}</small>
        </li>
      ))}
    </ol>
  );
}

function MetricCard({
  value,
  label,
  detail
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="metricCell">
      <strong>{value}</strong>
      <span>{label}</span>
      <small>{detail}</small>
    </div>
  );
}

function ServiceMap() {
  const services = [
    { name: "gateway.events", status: "ingesting", tone: "ok" },
    { name: "moderation.workflow", status: "hot path", tone: "ok" },
    { name: "redis.cache", status: "hit-heavy", tone: "warn" },
    { name: "s3.logs", status: "durable", tone: "ok" },
    { name: "payment.jobs", status: "scheduled", tone: "ok" },
    { name: "operator.search", status: "queryable", tone: "ok" }
  ];

  return (
    <div className="serviceMap" aria-label="Backend service map">
      {services.map((service) => (
        <div className={`serviceNode ${service.tone}`} key={service.name}>
          <span>{service.name}</span>
          <small>{service.status}</small>
        </div>
      ))}
    </div>
  );
}

function LogStream() {
  const logs = [
    "[ingest] discord.gateway event=message_create normalized=true partition=community",
    "[cache] redis key=tracking:ondc ttl=84s source=shiprocket result=hit",
    "[audit] moderation action=close_ticket actor=operator transcript=attached",
    "[jobs] paypal.disbursement state=pending_release retryable=true",
    "[observe] s3.log_stream flushed batch=512 correlation_id=7b91"
  ];

  return (
    <div className="logStream" aria-label="Operational log stream">
      <div className="panelTitle">
        <span className="pulseDot" aria-hidden="true" />
        <span>live system activity</span>
      </div>
      {logs.map((log) => (
        <code key={log}>{log}</code>
      ))}
    </div>
  );
}

function OperatorPanel() {
  const focus = ["event ingestion", "production APIs", "Redis cache paths", "logging systems"];

  return (
    <aside className="operatorPanel" aria-label="Engineer identity panel">
      <div className="operatorHeader">
        <span className="avatarText">TG</span>
        <div>
          <h2>{profile.name}</h2>
          <p>backend systems operator</p>
        </div>
      </div>
      <div className="operatorStatus">
        <span className="pulseDot" aria-hidden="true" />
        <strong>available for backend/platform roles</strong>
      </div>
      <dl className="operatorFacts">
        <div>
          <dt>base</dt>
          <dd>{profile.location}</dd>
        </div>
        <div>
          <dt>contact</dt>
          <dd>{profile.email}</dd>
        </div>
        <div>
          <dt>phone</dt>
          <dd>{profile.phone}</dd>
        </div>
      </dl>
      <div className="focusList" aria-label="Engineering focus">
        {focus.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </aside>
  );
}

function SystemDossier({ project, index }: { project: Project; index: number }) {
  return (
    <article className="dossier" id={project.slug}>
      <header className="dossierHeader">
        <div>
          <p className="eyebrow">system dossier / {String(index + 1).padStart(2, "0")}</p>
          <h3>{project.title}</h3>
          <p>{project.role}</p>
        </div>
        <div className="dossierMetrics">
          {project.metrics.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>
      </header>

      <div className="dossierBody">
        <div className="dossierStory">
          <section>
            <h4>Problem</h4>
            <p>{project.problem}</p>
          </section>
          <section>
            <h4>Architecture</h4>
            <p>{project.architecture}</p>
          </section>
          <section>
            <h4>Scalability / Reliability</h4>
            <p>{project.scalability}</p>
          </section>
          <section>
            <h4>Operational Complexity</h4>
            <ul>
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="dossierOps" aria-label={`${project.title} event flow`}>
          <ArchitectureFlow nodes={project.diagram} label={`${project.title} backend event flow`} />
          {project.image ? (
            <div className="artifactPreview">
              <Image src={project.image} alt={`${project.title} operational artifact`} width={520} height={300} />
            </div>
          ) : null}
        </aside>
      </div>

      <footer className="dossierFooter">
        <div>
          <h4>Technical decisions</h4>
          <ul>
            {project.decisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </div>
        <div className="techInventory" aria-label={`${project.title} technology inventory`}>
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </footer>
    </article>
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
              tushar@systems
              <small>backend command center</small>
            </span>
          </a>
          <nav aria-label="Primary navigation">
            {navigation.slice(0, 6).map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <CommandMenu />
        </div>
      </header>

      <main id="main" className="commandCenter">
        <section className="heroWorkspace" id="home">
          <div className="container workspaceGrid">
            <OperatorPanel />

            <section className="heroConsole" aria-label="Portfolio overview">
              <div className="terminalBar">
                <span>/home/tushar/backend-systems</span>
                <span>node: production</span>
              </div>
              <p className="eyebrow">backend engineer / distributed systems / operational tooling</p>
              <h1>Building backend systems, event-driven infrastructure, and operational tooling at scale.</h1>
              <p className="heroLead">{profile.summary}</p>
              <div className="heroActions" aria-label="Primary links">
                <a className="button primary" href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="button" href={profile.resume}>
                  Resume
                </a>
                <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="button subtle" href={`mailto:${profile.email}`}>
                  Contact
                </a>
              </div>
              <div className="metricGrid" aria-label="Scale and production metrics">
                {heroMetrics.map((metric) => (
                  <MetricCard key={metric.label} {...metric} />
                ))}
              </div>
            </section>

            <aside className="controlDeck" aria-label="System control deck">
              <div className="panelTitle">
                <span className="pulseDot" aria-hidden="true" />
                <span>service topology</span>
              </div>
              <ServiceMap />
              <LogStream />
            </aside>
          </div>
        </section>

        <section className="section thinSection" aria-label="Operational identity">
          <div className="container signalConsole">
            <span>API contracts</span>
            <span>event ingestion</span>
            <span>cache design</span>
            <span>audit logs</span>
            <span>background jobs</span>
            <span>operator workflows</span>
          </div>
        </section>

        <section className="section" id="systems">
          <div className="container">
            <SectionHeader
              eyebrow="Systems I've built"
              title="Infrastructure, workflows, and backend surfaces I have operated."
              body="This section is intentionally not a project gallery. It is a scan of the systems, scale, constraints, and production responsibilities behind the work."
            />
            <div className="systemsMatrix">
              {systems.map((system) => (
                <article className="systemTile" key={system.name}>
                  <div className="tileTop">
                    <span>{system.type}</span>
                    <strong>{system.evidence}</strong>
                  </div>
                  <h3>{system.name}</h3>
                  <p>{system.detail}</p>
                  <footer>{system.scope}</footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section dossierSection" id="dossiers">
          <div className="container">
            <SectionHeader
              eyebrow="System dossiers"
              title="Architecture, scale, decisions, and operational concerns."
              body="Each dossier explains the backend problem, why the architecture mattered, and how the system behaves under real operational pressure."
            />
            <div className="dossierStack">
              {projects.map((project, index) => (
                <SystemDossier project={project} index={index} key={project.slug} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="architecture">
          <div className="container">
            <SectionHeader
              eyebrow="Architecture visualization"
              title="Request lifecycles, logging pipelines, and workflow maps."
              body="These diagrams show the pattern language I use: validate the boundary, isolate the workflow, persist enough context, and make the system observable."
            />
            <div className="playbookGrid">
              {architectureStudies.map((study) => (
                <article className="playbookCard" key={study.title}>
                  <div className="panelTitle">
                    <span className="pulseDot" aria-hidden="true" />
                    <span>{study.title}</span>
                  </div>
                  <p>{study.summary}</p>
                  <ArchitectureFlow nodes={study.diagram} label={`${study.title} diagram`} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section notesSection" id="notes">
          <div className="container">
            <SectionHeader
              eyebrow="Engineering notes"
              title="Backend lessons from operating systems, not just building them."
              body="Short writeups that make the portfolio feel like a working notebook: cache semantics, logging quality, background jobs, and real-time state."
            />
            <div className="notesGrid">
              {engineeringNotes.map((note) => (
                <article className="noteCard" key={note.title}>
                  <span>{note.signal}</span>
                  <h3>{note.title}</h3>
                  <p>{note.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="expertise">
          <div className="container">
            <SectionHeader
              eyebrow="Technical inventory"
              title="The stack behind the systems."
              body="Grouped by how backend work actually gets done: language, service layer, persistence, cloud primitives, and event-driven workflows."
            />
            <div className="stackInventory">
              {expertise.map((group) => (
                <article className="stackGroup" key={group.category}>
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

        <section className="section experienceSection" id="experience">
          <div className="container">
            <SectionHeader
              eyebrow="Production timeline"
              title="Commerce, logistics, and community infrastructure."
              body="Roles where I shipped APIs, scheduled jobs, integrations, logging paths, monitoring workflows, and operator-facing automation."
            />
            <div className="timeline">
              {experience.map((job) => (
                <article className="timelineItem" key={`${job.company}-${job.time}`}>
                  <div className="timelineDate">{job.time}</div>
                  <div>
                    <h3>
                      {job.role} <span>{job.company}</span>
                    </h3>
                    <p>
                      {job.location} / {job.stack}
                    </p>
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

        <section className="section" id="philosophy">
          <div className="container">
            <SectionHeader
              eyebrow="Operating philosophy"
              title="The rules I come back to when systems get real."
              body="The more operational pressure a backend takes, the more it rewards clear ownership, explicit state, useful logs, and boring reliability."
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

        <section className="section" id="credentials">
          <div className="container">
            <SectionHeader
              eyebrow="Credentials"
              title="Education and applied engineering wins."
              body="A compact view of the academic and hackathon credentials behind the backend work."
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
              <p className="eyebrow">Open a channel</p>
              <h2>Backend, platform, infrastructure, and production engineering conversations.</h2>
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
          <span>backend systems / APIs / infrastructure / observability</span>
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
