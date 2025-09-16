// Data (you can edit freely)
const projects = [
  {
    title: "AUI-Bot",
    image: "assets/projects/aui.png",
    link: "https://discord.com/oauth2/authorize?client_id=1068531863469174876&scope=bot+applications.commands&permissions=8",
    liveBadge: "Live on Among Us India",
    bullets: [
      "Moderation, utility & AI features for 44k+ member community",
      "ModMail, reminders, suggestion handling & VC logs",
      "Voice user movement, ban/warn system, AI summaries"
    ]
  },
  {
    title: "Foxy-Bot",
    image: "assets/projects/foxy.png",
    link: "https://discord.com/oauth2/authorize?client_id=1329511720284196915&scope=bot+applications.commands&permissions=8",
    liveBadge: "Live on Among Us India",
    bullets: [
      "Private VC bot with pay-as-you-go billing system",
      "In-server economy with coins, !work, !daily, !lb",
      "Transfer VC ownership, add/remove users, manage roles"
    ]
  },
  {
    title: "D-SPAM",
    image: "assets/projects/d-spam.png",
    link: "https://d-spam.vercel.app/",
    bullets: [
      "Blockchain-based spam IP reporting platform",
      "Solidity contracts on Polygon with Filecoin/IPFS",
      "Next.js frontend with secure backend integration"
    ]
  },
  {
    title: "HackOverflow",
    image: "assets/projects/hackoverflow.png",
    link: "https://hackoverflow-kappa.vercel.app/",
    bullets: [
      "Developer stats aggregator and leaderboard",
      "GitHub, Hackerrank & CodeChef API integration",
      "Friend system and search-based leaderboards"
    ]
  }
];

const experience = [
  {
    title: "Software Developer — Magnolia Pearl",
    time: "Jan 2024 – Present (Remote)",
    bullets: [
      "Lead backend developer for Magnolia Pearl Trade (MPT) platform",
      "Built auctions, commission reports, Avalara tax & ShipStation shipping",
      "Integrated PayPal delayed disbursements and reporting dashboards",
      "Improved performance and optimized internal processes"
    ]
  },
  {
    title: "Graduate Engineer Trainee — Shiprocket",
    time: "Jun 2022 – May 2023",
    bullets: [
      "Developed ONDC APIs boosting order flow by 30%",
      "Implemented Redis caching to improve speed by 70%",
      "Created order tracking dashboards and S3 logging system",
      "Collaborated on scaling backend microservices"
    ]
  },
  {
    title: "Software Engineer Trainee — Roxiler Systems",
    time: "Jul 2021 – Oct 2021",
    bullets: [
      "Developed backend APIs and automation tools",
      "Integrated Slack, Telegram, and Discord bots",
      "Streamlined real-time updates and team communication"
    ]
  },
  {
    title: "Backend Developer Intern — Gocal",
    time: "Nov 2020 – Feb 2021",
    bullets: [
      "Built delivery backend with JWT auth & scheduling APIs",
      "Redesigned DB schemas and optimized query performance",
      "Implemented secure authentication and role system"
    ]
  }
];

// Render helpers
const $ = (sel, root=document) => root.querySelector(sel);

function renderProjects(){
  const grid = $("#projectGrid");
  grid.innerHTML = "";
  projects.forEach(p => {
    const card = document.createElement("article");
    card.className = "project_card reveal";
    card.innerHTML = `
      <img class="project_img" src="${p.image}" alt="${p.title}" onerror="this.src='assets/placeholder.jpg'"/>
      <div class="project_body">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:.5rem;margin-bottom:.35rem;">
          <h3 class="h3">${p.title}</h3>
          ${p.liveBadge ? `<span class="badge">${p.liveBadge}</span>` : ""}
        </div>
        <ul class="tight">
          ${p.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
        ${p.link ? `<div style="margin-top:.6rem"><a class="btn ghost" href="${p.link}" target="_blank" rel="noopener">Open ↗</a></div>` : ""}
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderExperience(){
  const list = $("#experienceList");
  list.innerHTML = "";
  experience.forEach(job => {
    const card = document.createElement("article");
    card.className = "card job_card reveal";
    card.innerHTML = `
      <h3 class="h3">${job.title}</h3>
      <p class="muted">${job.time}</p>
      <ul class="tight">${job.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>
    `;
    list.appendChild(card);
  });
}

// Small UI niceties
function scrollReveal(){
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(entries => {
    for(const e of entries){
      if(e.isIntersecting){
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    }
  },{threshold:.12});
  items.forEach(el => io.observe(el));
}

function initYear(){
  const y = document.getElementById("year");
  if(y) y.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderExperience();
  initYear();
  scrollReveal();
});
