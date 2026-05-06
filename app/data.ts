export const profile = {
  name: "Tushar Goyal",
  handle: "tgoyal63",
  title: "Backend Engineer",
  location: "Remote / India",
  email: "tgoyal63@gmail.com",
  phone: "+91-8094183788",
  phoneHref: "tel:+918094183788",
  github: "https://github.com/tgoyal63",
  linkedin: "https://linkedin.com/in/tgoyal63",
  resume: "/resume/",
  discord: "https://discord.com/users/518470816258588684",
  headline:
    "Backend Engineer building scalable systems, distributed infrastructure, and production APIs.",
  summary:
    "Backend engineer with 3+ years of experience building scalable APIs, distributed systems, production backend services, logging platforms, and commerce infrastructure.",
  availability:
    "Focused on backend, platform, infrastructure, and production engineering roles."
};

export const heroMetrics = [
  {
    value: "100k+",
    label: "community members supported",
    detail: "distributed Discord infrastructure"
  },
  {
    value: "200k+",
    label: "daily events processed",
    detail: "messages, moderation actions, voice activity"
  },
  {
    value: "+30%",
    label: "ONDC order volume lift",
    detail: "API work at Shiprocket"
  },
  {
    value: "~70%",
    label: "faster API responses",
    detail: "Redis-backed caching paths"
  }
];

export const expertise = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "C#", "Java", "Python", "SQL"]
  },
  {
    category: "Backend & Frameworks",
    items: ["Node.js", "Express.js", "ASP.NET", "Razor Pages", "Spring Boot", "REST APIs", "Microservices"]
  },
  {
    category: "Databases & Caching",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "schema design", "query optimization"]
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Azure", "GCP", "Amazon S3", "Azure Blob Storage", "Git"]
  },
  {
    category: "Real-time Systems",
    items: ["Discord gateway events", "Socket.IO", "voice workflows", "ModMail", "live monitoring"]
  },
  {
    category: "Event-driven Systems",
    items: ["event ingestion", "background jobs", "webhooks", "ERP integrations", "automation workflows"]
  }
];

export const philosophy = [
  {
    title: "Scalability",
    body:
      "I separate hot paths from operational workflows, cache the right reads, and design APIs around bounded payloads, clear ownership, and predictable failure modes."
  },
  {
    title: "Reliability",
    body:
      "Production code should make failure visible. I prefer explicit state transitions, durable logs, defensive integrations, and workflows that can be retried safely."
  },
  {
    title: "Maintainability",
    body:
      "I optimize for future operators: small service boundaries, readable handlers, intentional schemas, and documentation that explains tradeoffs instead of restating code."
  },
  {
    title: "Backend Ownership",
    body:
      "Owning a backend means caring about deploys, data integrity, observability, support workflows, and the humans who need to debug the system at 2 AM."
  },
  {
    title: "Observability",
    body:
      "I treat logs, audit trails, dashboards, and transcripts as product surfaces. They shorten incidents, explain system behavior, and build trust with internal teams."
  }
];

export const systems = [
  {
    name: "Discord Logging Platform",
    type: "Observability",
    scope: "Large Discord communities",
    detail:
      "Built distributed logging and moderation infrastructure that processes messages, moderation actions, and voice activity for real-time operational insight.",
    evidence: "100k+ members, 200k+ daily events"
  },
  {
    name: "ONDC API Layer",
    type: "API Platform",
    scope: "Shiprocket",
    detail:
      "Led scalable REST API development for ONDC order flow, tracking, operational event monitoring, and logistics-side service communication.",
    evidence: "+30% order volume"
  },
  {
    name: "Redis-backed API Paths",
    type: "Performance",
    scope: "Shiprocket",
    detail:
      "Implemented Redis-based caching for high-traffic API paths while keeping source-of-truth services and invalidation behavior explicit.",
    evidence: "~70% response-time reduction"
  },
  {
    name: "Commerce Workflow Automation",
    type: "Internal Platform",
    scope: "Magnolia Pearl",
    detail:
      "Designed delayed payment disbursement, automated auction reassignment, scheduled financial jobs, ERP integrations, and reporting workflows.",
    evidence: "Production commerce workflows"
  },
  {
    name: "Moderation Infrastructure",
    type: "Trust and Safety",
    scope: "Discord communities",
    detail:
      "Designed event ingestion and search workflows for real-time moderation insights, operational monitoring, and operator-facing automation.",
    evidence: "Real-time moderation insights"
  },
  {
    name: "Private Voice Channel System",
    type: "Real-time System",
    scope: "Discord communities",
    detail:
      "Created coin-based private voice channels with billing modes, access control, ownership transfer, and lifecycle cleanup.",
    evidence: "Live voice workflows"
  }
];

export type DiagramNode = {
  label: string;
  detail: string;
  kind?: "client" | "api" | "queue" | "data" | "worker" | "external";
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  role: string;
  problem: string;
  architecture: string;
  scalability: string;
  decisions: string[];
  impact: string[];
  metrics: string[];
  tech: string[];
  image?: string;
  links?: { label: string; href: string }[];
  diagram: DiagramNode[];
};

export type ArchitectureStudy = {
  title: string;
  summary: string;
  diagram: DiagramNode[];
};

export type ResumeProject = {
  title: string;
  time: string;
  tech: string[];
  points: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "discord-infrastructure-logging-platform",
    title: "Community Infrastructure and Logging Platform",
    eyebrow: "Real-time moderation, logging, and operator tooling",
    role: "Backend owner for Discord event ingestion, logging, and workflow design",
    problem:
      "Large Discord communities need message activity, moderation actions, and voice events to be ingested, searched, and explained fast enough for live operators.",
    architecture:
      "Discord gateway events flow through ingestion handlers, moderation workflows, Redis-backed operational paths, MongoDB persistence, and operator-facing insight surfaces.",
    scalability:
      "Separated interaction handling from event ingestion, kept moderation workflows permission-aware, and shaped event records for search, debugging, and operational monitoring.",
    decisions: [
      "Designed event ingestion around messages, moderation actions, and voice activity.",
      "Stored searchable context for real-time moderation insights and later review.",
      "Implemented backend automation systems and operational monitoring tools around event-driven workflows."
    ],
    impact: [
      "Built distributed logging and moderation infrastructure for communities with 100k+ members.",
      "Processed 200k+ daily events across messages, moderation actions, and voice activity.",
      "Made moderation activity easier to search, explain, monitor, and automate."
    ],
    metrics: ["100k+ members", "200k+ daily events", "real-time moderation insights"],
    tech: ["Node.js", "MongoDB", "Redis", "Discord.js", "event ingestion", "operational monitoring"],
    image: "/assets/projects/aui-bot.png",
    diagram: [
      { label: "Discord Gateway", detail: "messages, moderation, voice events", kind: "external" },
      { label: "Ingestion API", detail: "normalize and enrich events", kind: "api" },
      { label: "Workflow Services", detail: "moderation, logging, automation", kind: "worker" },
      { label: "MongoDB + Redis", detail: "durable records and hot state", kind: "data" },
      { label: "Operator Insights", detail: "search, monitoring, review", kind: "client" }
    ]
  },
  {
    slug: "ondc-shiprocket-backend-systems",
    title: "ONDC / Shiprocket Backend Systems",
    eyebrow: "Logistics APIs, caching, tracking, and service integration",
    role: "Graduate Engineer Trainee - backend APIs and integration workflows",
    problem:
      "Logistics order flow requires fast API responses, reliable tracking data, centralized logs, and integration paths that can handle marketplace and fulfillment-side constraints.",
    architecture:
      "ONDC-facing REST APIs connected order flow, Redis cache paths, structured S3 logs, monitoring workflows, and dashboard surfaces for operational visibility.",
    scalability:
      "Improved read performance with Redis-backed paths and moved operational logs into durable storage for inspection without slowing request handling.",
    decisions: [
      "Kept frequently accessed order and tracking reads behind Redis.",
      "Centralized structured application logs in Amazon S3 for monitoring and debugging.",
      "Built real-time monitoring workflows around live order and operational event activity."
    ],
    impact: [
      "Improved ONDC order volume by 30%.",
      "Reduced API response times by roughly 70% using Redis-based caching.",
      "Built real-time monitoring workflows for 500+ daily live orders and operational events."
    ],
    metrics: ["+30% order volume", "~70% response-time reduction", "500+ daily live orders", "S3-backed logs"],
    tech: ["Node.js", "Express.js", "MongoDB", "Redis", "Amazon S3", "REST APIs"],
    diagram: [
      { label: "ONDC Clients", detail: "order and tracking requests", kind: "client" },
      { label: "REST API Layer", detail: "validation and routing", kind: "api" },
      { label: "Redis Cache", detail: "hot reads and tracking lookups", kind: "data" },
      { label: "Order Services", detail: "source-of-truth workflows", kind: "worker" },
      { label: "S3 Logs", detail: "monitoring and debugging trail", kind: "data" }
    ]
  },
  {
    slug: "magnolia-pearl-backend-workflows",
    title: "Magnolia Pearl Backend Workflows",
    eyebrow: "Commerce operations, payments, ERP integrations, and reporting",
    role: "Software Developer for Magnolia Pearl commerce backend workflows",
    problem:
      "Commerce operations needed backend workflows for delayed payment disbursement, auction reassignment, financial processing, reporting, and external ERP integrations.",
    architecture:
      "ASP.NET and Razor Pages workflows coordinate PayPal delayed disbursements, scheduled background jobs, SQL reporting paths, Azure Blob Storage, and third-party ERP APIs.",
    scalability:
      "Designed transactional workflow boundaries for bidding and financial operations so scheduled jobs, reporting, and external integrations can evolve without fragile handoffs.",
    decisions: [
      "Designed PayPal delayed-disbursement flows around explicit payment states.",
      "Built automated auction reassignment logic with transactional consistency during bidding workflows.",
      "Optimized SQL queries for business-critical financial reporting and operational review."
    ],
    impact: [
      "Owned production backend workflows for a commerce platform.",
      "Automated financial processing, reporting, delayed disbursement, and auction reassignment workflows.",
      "Integrated third-party ERP systems and external APIs into secure commerce infrastructure."
    ],
    metrics: ["PayPal delayed disbursement", "scheduled background jobs", "ERP integrations"],
    tech: ["ASP.NET", "C#", "Razor Pages", "SQL", "Azure Blob Storage", "PayPal"],
    diagram: [
      { label: "Admin Actions", detail: "auctions, reports, payment review", kind: "client" },
      { label: "Commerce API", detail: "workflow state and validation", kind: "api" },
      { label: "PayPal", detail: "delayed disbursement", kind: "external" },
      { label: "Background Jobs", detail: "financial processing and reporting", kind: "worker" },
      { label: "SQL + Blob Storage", detail: "reports, assets, operational data", kind: "data" }
    ]
  },
  {
    slug: "real-time-voice-and-support-systems",
    title: "Real-time Voice and Support Systems",
    eyebrow: "Voice channels, billing, access control, and live support",
    role: "Backend developer for real-time community systems",
    problem:
      "Live communities need voice-channel lifecycle automation, access control, user support, and moderation feedback loops that work while people are actively using them.",
    architecture:
      "Gateway events drive voice-channel state, coin billing, membership permissions, support actions, and cleanup jobs.",
    scalability:
      "Designed workflows around explicit ownership, membership state, and cleanup paths so real-time resources do not drift out of sync with user actions.",
    decisions: [
      "Modeled private voice channels as resources with owners, members, billing mode, and lifecycle state.",
      "Used permission-aware commands for add, remove, hide, transfer, public, private, and delete actions.",
      "Kept support workflows close to moderation logs so operators can resolve issues quickly."
    ],
    impact: [
      "Enabled paid and private voice-channel workflows for Discord communities.",
      "Reduced manual voice-channel management for moderators and owners.",
      "Created clearer user support paths through panels, transcripts, and action history."
    ],
    metrics: ["live PVC workflows", "coin-based billing", "permission-aware controls"],
    tech: ["Discord gateway events", "Node.js", "MongoDB", "access control", "real-time state"],
    image: "/assets/projects/foxy-bot.png",
    diagram: [
      { label: "Voice Events", detail: "join, leave, owner actions", kind: "external" },
      { label: "State Engine", detail: "owner, members, billing mode", kind: "worker" },
      { label: "Permission Layer", detail: "access, transfer, visibility", kind: "api" },
      { label: "Billing Rules", detail: "coin balance and channel cost", kind: "worker" },
      { label: "Cleanup Jobs", detail: "delete and reconcile resources", kind: "queue" }
    ]
  }
];

export const resumeProjects: ResumeProject[] = [
  {
    title: "Community Infrastructure & Logging Platform",
    time: "May 2023",
    tech: ["Node.js", "MongoDB", "Redis", "Discord.js"],
    points: [
      "Built distributed logging and moderation infrastructure for large Discord communities with 100k+ members.",
      "Processed 200k+ daily events including messages, moderation actions, and voice activity.",
      "Designed scalable event ingestion and search workflows for real-time moderation insights.",
      "Implemented backend automation systems, event-driven workflows, and operational monitoring tools."
    ]
  },
  {
    title: "D-SPAM",
    time: "Jan 2023",
    tech: ["Node.js", "Next.js", "Solidity", "Polygon", "Web3.js", "Filecoin", "IPFS"],
    href: "https://d-spam.vercel.app/",
    points: [
      "Built a decentralized application and deployed Solidity smart contracts on the Polygon network.",
      "Integrated Web3 functionality into a production-ready Next.js frontend to report spam IP addresses."
    ]
  },
  {
    title: "HackOverflow",
    time: "Apr 2022",
    tech: ["Node.js", "React.js", "MongoDB", "HTML", "CSS"],
    href: "https://hackoverflow-kappa.vercel.app/",
    points: [
      "Integrated GitHub, HackerRank, and CodeChef APIs to aggregate coding statistics.",
      "Implemented search, voting, social networking features, and leaderboard rankings."
    ]
  }
];

export const architectureStudies: ArchitectureStudy[] = [
  {
    title: "Event Ingestion Pipeline",
    summary:
      "A request path that keeps user-facing actions fast while preserving enough context for retries, audits, and operator review.",
    diagram: [
      { label: "Event Source", detail: "webhook, gateway, API request", kind: "external" },
      { label: "Validate", detail: "schema, auth, idempotency key", kind: "api" },
      { label: "Dispatch", detail: "workflow handler or queue", kind: "queue" },
      { label: "Persist", detail: "state change and audit log", kind: "data" },
      { label: "Observe", detail: "dashboard, transcript, alert", kind: "client" }
    ]
  },
  {
    title: "Logging and Audit System",
    summary:
      "Operational logs are designed as a product surface: queryable, explainable, and tied to the user or workflow that created them.",
    diagram: [
      { label: "Action", detail: "moderation or order event", kind: "external" },
      { label: "Context Builder", detail: "actor, target, correlation id", kind: "worker" },
      { label: "Durable Log", detail: "S3, database, transcript", kind: "data" },
      { label: "Review Surface", detail: "dashboard or support thread", kind: "client" }
    ]
  },
  {
    title: "Caching Layer",
    summary:
      "Cache hot reads close to the API while keeping source-of-truth ownership and invalidation rules explicit.",
    diagram: [
      { label: "Client Request", detail: "order, tracking, profile", kind: "client" },
      { label: "API Contract", detail: "bounded response shape", kind: "api" },
      { label: "Redis", detail: "fast path for repeat reads", kind: "data" },
      { label: "Primary Service", detail: "authoritative state", kind: "worker" },
      { label: "Refresh", detail: "TTL or write-through update", kind: "queue" }
    ]
  }
];

export const experience = [
  {
    role: "Software Developer",
    company: "Magnolia Pearl",
    time: "Jan 2024 - Present",
    location: "Texas, US",
    stack: "ASP.NET, C#, Razor Pages, SQL, Azure Blob Storage, PayPal",
    points: [
      "Designed and implemented backend workflows for delayed payment disbursement using PayPal APIs.",
      "Built automated auction reassignment logic ensuring transactional consistency during bidding workflows.",
      "Developed scheduled background jobs, automated financial processing workflows, reporting paths, optimized SQL queries, and secure ERP integrations."
    ]
  },
  {
    role: "Graduate Engineer Trainee",
    company: "Shiprocket",
    time: "Jun 2022 - May 2023",
    location: "New Delhi, IN",
    stack: "Node.js, Express.js, MongoDB, Redis, Amazon S3",
    points: [
      "Led development of scalable REST APIs for the ONDC initiative, contributing to a 30% increase in order volume.",
      "Implemented Redis-based caching, reducing API response times by roughly 70%.",
      "Built secure backend data pipelines, centralized structured application logs in Amazon S3, and real-time monitoring workflows for 500+ daily live orders."
    ]
  },
  {
    role: "Software Engineer Trainee",
    company: "Roxiler Systems",
    time: "Jul 2021 - Oct 2021",
    location: "Remote, IN",
    stack: "Node.js, Express.js, PostgreSQL",
    points: [
      "Assisted in developing and maintaining Node.js and PostgreSQL backend services.",
      "Integrated Slack, Telegram, and Discord APIs for automated notifications and workflows."
    ]
  },
  {
    role: "Backend Developer Intern",
    company: "Gocal",
    time: "Nov 2020 - Feb 2021",
    location: "Remote, IN",
    stack: "Node.js, Express.js, MongoDB, Bcrypt, JWT",
    points: [
      "Designed backend architecture and REST APIs for a delivery platform supporting real-time inventory and scheduled deliveries.",
      "Optimized database schemas to improve query performance.",
      "Implemented JWT-based authentication, role-based authorization, scheduled deliveries, and real-time inventory management."
    ]
  }
];

export const education = {
  school: "DIT University",
  degree: "Bachelor of Technology",
  major: "Computer Science and Engineering",
  location: "Dehradun, IN",
  time: "Aug 2018 - May 2022",
  detail: "CGPA: 8.82/10"
};

export const awards = [
  {
    title: "Winner: Open Innovation Track",
    event: "LNMHacks 5.0",
    time: "Jan 2023"
  },
  {
    title: "Winner: NABARD-ONDC Hackathon Integration Challenge",
    event: "ONDC ecosystem challenge",
    time: "Jul 2022"
  }
];

export const engineeringNotes = [
  {
    title: "Redis Caching Is a Contract, Not a Shortcut",
    signal: "Latency and correctness",
    body:
      "The cache has to make ownership explicit: what is authoritative, how entries expire, which paths can tolerate stale reads, and what operators should inspect when behavior diverges."
  },
  {
    title: "Event Logs Should Explain the System",
    signal: "Observability",
    body:
      "A useful log stream carries actor, target, workflow, correlation id, and state transition. That makes moderation and order systems debuggable without reconstructing history from raw noise."
  },
  {
    title: "Background Jobs Need Product Semantics",
    signal: "Workflow reliability",
    body:
      "Payment disbursement, auction reassignment, reporting, and cleanup jobs should map to clear business states so retries are safe and failures are visible to humans."
  },
  {
    title: "Real-time Systems Fail Through Drift",
    signal: "State reconciliation",
    body:
      "Voice channels, permissions, and live moderation flows need cleanup and reconciliation paths. The hard part is keeping resources aligned after disconnects, retries, and manual intervention."
  }
];

export const navigation = [
  { label: "Systems", href: "#systems" },
  { label: "Dossiers", href: "#dossiers" },
  { label: "Architecture", href: "#architecture" },
  { label: "Notes", href: "#notes" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];
