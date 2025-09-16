// Data (you can edit freely)
const bots = [
  {
    id: "aui",
    title: "AUI-Bot",
    thumb: "assets/projects/aui-bot.png",
    color: "#5865F2",
    invite:
      "https://discord.com/oauth2/authorize?client_id=1068531863469174876&scope=bot+applications.commands&permissions=8",
    liveBadge: "Live on Among Us India",
    tagline: "Discord bot for Among Us India (44k+): moderation, utility and AI-powered tools.",
    features: [
      "Moderation, utility & AI features for 44k+ members",
      "Voice user movement, ban/warn system, AI summaries",
      "Integrated ModMail system to handle user queries",
      "Move all users from one voice channel to another or move individual users",
      "Check user's current joined voice channel instantly",
      "Suggestion system with configure, handle, approve, reject commands",
      "Reminder commands for custom reminders and automated moderation reminders",
      "VCLogs to view voice logs for any user/channel from the last 30 days",
      "Moderation commands: ban, unban, warn, remove warn, add/view user notes",
      "AI-powered commands: 'explain' to explain words, 'ask' to ask anything",
      "AI-powered 'summary' command to summarize last X messages in a channel",
    ],
    images: [
      {
        src: "assets/projects/aui.png",
        caption:
          "Overview: ModMail, reminders, suggestions, and VC logs in action.",
      },
    ],
  },
  {
    id: "foxy",
    title: "Foxy-Bot",
    thumb: "assets/projects/foxy-bot.png",
    color: "#F59E0B",
    invite:
      "https://discord.com/oauth2/authorize?client_id=1329511720284196915&scope=bot+applications.commands&permissions=8",
    liveBadge: "Live on Among Us India",
    tagline: "Private VC and economy bot for paid voice channels and in-server coins.",
    features: [
      "Pay-as-you-go or one-time billing for private VCs",
      "In-server economy with coins, !work, !daily, !lb",
      "Transfer VC ownership, add/remove users, manage roles",
      "Create private voice channels using in-server coins",
      "Automatic coin deduction on VC creation (one-time or pay-as-you-go)",
      "Add/Remove users from your private VC with simple commands",
      "Add friends to always allow them in your VC without manual access",
      "Transfer ownership of the VC to another user",
      "Economy system with commands: !work, !daily, !bal, !lb, !give, !store",
      "Manager commands for items, roles, and incomes",
      "Fun games like blackjack, rock-paper-scissors, and guess-the-number",
    ],
    images: [
      {
        src: "assets/projects/foxy.png",
        caption:
          "Private VC creation flow and economy commands (balance, leaderboard, store).",
      },
    ],
  },
];

const projects = [
  {
    title: "D-SPAM",
    image: "assets/projects/d-spam.png",
    link: "https://d-spam.vercel.app/",
    bullets: [
      "Built a blockchain-based platform to report spam IP addresses",
      "Authored the smart contract using Solidity for secure and efficient transactions",
      "Deployed the smart contract on Polygon network and integrated it using Next.js",
    ],
    tags: [
      "Node.js",
      "Next.js",
      "Solidity",
      "Polygon",
      "Web3.js",
      "Filecoin",
      "IPFS",
      "Jan 2023",
    ],
  },
  {
    title: "HackOverflow",
    image: "assets/projects/hackoverflow.png",
    link: "https://hackoverflow-kappa.vercel.app/",
    bullets: [
      "Built an integration platform using GitHub, HackerRank and CodeChef APIs to display user coding statistics",
      "Added search-by-username and upvote/downvote interactions for profiles",
      "Designed leaderboards with both global and friend categories",
      "Introduced social features: send, view and accept friend requests",
    ],
    tags: ["Node.js", "React.js", "MongoDB", "HTML", "CSS", "Apr 2022"],
  },
];

const experience = [
  {
    title: "Software Developer — Magnolia Pearl",
    time: "Jan 2024 – Present (Remote)",
    bullets: [
      "Lead backend developer for Magnolia Pearl Trade (MPT) platform",
      "Built auctions, commission reports, Avalara tax & ShipStation shipping",
      "Integrated PayPal delayed disbursements and reporting dashboards",
      "Improved performance and optimized internal processes",
    ],
  },
  {
    title: "Graduate Engineer Trainee — Shiprocket",
    time: "Jun 2022 – May 2023",
    bullets: [
      "Developed ONDC APIs boosting order flow by 30%",
      "Implemented Redis caching to improve speed by 70%",
      "Created order tracking dashboards and S3 logging system",
      "Collaborated on scaling backend microservices",
    ],
  },
  {
    title: "Software Engineer Trainee — Roxiler Systems",
    time: "Jul 2021 – Oct 2021",
    bullets: [
      "Developed backend APIs and automation tools",
      "Integrated Slack, Telegram, and Discord bots",
      "Streamlined real-time updates and team communication",
    ],
  },
  {
    title: "Backend Developer Intern — Gocal",
    time: "Nov 2020 – Feb 2021",
    bullets: [
      "Built delivery backend with JWT auth & scheduling APIs",
      "Redesigned DB schemas and optimized query performance",
      "Implemented secure authentication and role system",
    ],
  },
];

// Render helpers
const $ = (sel, root = document) => root.querySelector(sel);

function imgFallback(ev) {
  ev.target.onerror = null;
  ev.target.src = "assets/placeholder.svg";
}

function renderProjects() {
  const list = $("#projectList");
  if (!list) return;
  list.innerHTML = "";
  projects.forEach((p) => {
    const item = document.createElement("article");
    item.className = "message reveal";
    item.innerHTML = `
      <img class="avatar" src="https://cdn.discordapp.com/avatars/518470816258588684/a_7117360c43f9b30a53e4ea5176808472.gif?size=240" alt="Tushar"/>
      <div>
        <div class="author"><span>Tushar</span> <span class="timestamp">posted a project</span></div>
        <div class="embed-card" role="button" tabindex="0">
          <div class="embed-inner">
            <img class="embed-thumb" src="${p.image}" alt="${
      p.title
    }" onerror="imgFallback(event)"/>
            <div>
            <h4 class="embed-title">${p.title}</h4>
            <div class="embed-badges">${(p.tags || p.bullets.slice(1, 4))
              .map((b) => `<span class='embed-badge'>${b}</span>`)
              .join("")}</div>
              ${
                p.bullets.length > 0
                  ? `<ul class=\"tight\">${p.bullets
                      .map((b) => `<li>${b}</li>`)
                      .join("")}</ul>`
                  : ""
              }
            </div>
          </div>
          <div class="embed-footer">
            <span>${new Date().getFullYear()}</span>
            ${
              p.link
                ? `<a class="btn ghost" href="${p.link}" target="_blank" rel="noopener">Open ↗</a>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
    list.appendChild(item);
  });
}

function renderExperience() {
  const list = $("#experienceList");
  list.innerHTML = "";
  experience.forEach((job) => {
    const card = document.createElement("article");
    card.className = "card job_card reveal";
    card.innerHTML = `
      <h3 class="h3">${job.title}</h3>
      <p class="muted">${job.time}</p>
      <ul class="tight">${job.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
    `;
    list.appendChild(card);
  });
}

// Small UI niceties
function scrollReveal() {
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
}

function initYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

// Bots rendering as Discord-style embeds
function renderBots() {
  const list = $("#botsList");
  if (!list) return;
  list.innerHTML = "";
  bots.forEach((b) => {
    const item = document.createElement("article");
    item.className = "message reveal";
    item.innerHTML = `
      <img class="avatar" src="https://cdn.discordapp.com/avatars/518470816258588684/a_7117360c43f9b30a53e4ea5176808472.gif?size=240" alt="Tushar"/>
      <div>
        <div class="author"><span>Tushar</span> <span class="timestamp">shared a bot</span></div>
        
        <div class="embed-card" data-bot-id="${
          b.id
        }" style="border-left-color:${b.color}">
          <div class="embed-inner">
            <img class="embed-thumb" src="${b.thumb}" alt="${
      b.title
    }" onerror="imgFallback(event)"/>
            <div>
              <h4 class="embed-title">${b.title}</h4>
              <p class="embed-desc">${b.tagline ?? ""}</p>
              ${
                b.features && b.features.length
                  ? `<ul class=\"tight\">${b.features
                      .map((f) => `<li>${f}</li>`)
                      .join("")}</ul>`
                  : ""
              }
              <div class="embed-badges">
                ${
                  b.liveBadge
                    ? `<span class="embed-badge">${b.liveBadge}</span>`
                    : ""
                }
                ${
                  b.invite
                    ? `<span class="embed-badge">Invite Ready</span>`
                    : ""
                }
              </div>
            </div>
          </div>
          <div class="embed-footer">
            ${
              b.invite
                ? `<a class="btn ghost" href="${b.invite}" target="_blank" rel="noopener">Invite ↗</a>`
                : ""
            }
            <button type="button" class="link-btn view-shots" data-open-gallery aria-label="Open ${
              b.title
            } screenshots">Click to view screenshots</button>
          </div>
        </div>
      </div>
    `;
    list.appendChild(item);
  });

  // Only open gallery via explicit button/link inside the card
  list.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-open-gallery]");
    if (!trigger) return;
    const card = trigger.closest(".embed-card");
    if (card && card.dataset.botId) {
      openGallery(card.dataset.botId);
    }
  });
  list.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const trigger = e.target.closest("[data-open-gallery]");
      if (trigger) {
        e.preventDefault();
        const card = trigger.closest(".embed-card");
        if (card && card.dataset.botId) {
          openGallery(card.dataset.botId);
        }
      }
    }
  });
}

// Simple gallery modal
let galleryState = { bot: null, index: 0 };
let lastFocusedBeforeModal = null;

function openGallery(botId) {
  const bot = bots.find((b) => b.id === botId);
  if (!bot) return;
  galleryState = { bot, index: 0 };
  const modal = $("#galleryModal");
  const img = $("#galleryImage");
  const caption = $("#galleryCaption");
  const dots = $("#galleryDots");
  dots.innerHTML = "";
  bot.images.forEach((_, i) => {
    const d = document.createElement("button");
    d.setAttribute("aria-label", `Go to image ${i + 1}`);
    if (i === 0) d.classList.add("active");
    d.addEventListener("click", () => setGalleryIndex(i));
    dots.appendChild(d);
  });
  setGalleryIndex(0);
  lastFocusedBeforeModal = document.activeElement;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  modal.setAttribute("aria-modal", "true");
  document.body.style.overflow = "hidden";
  const closeBtn = modal.querySelector(".gallery-close");
  if (closeBtn) closeBtn.focus();
}

function setGalleryIndex(i) {
  const { bot } = galleryState;
  if (!bot) return;
  galleryState.index = (i + bot.images.length) % bot.images.length;
  const img = $("#galleryImage");
  const caption = $("#galleryCaption");
  const entry = bot.images[galleryState.index];
  const src = typeof entry === "string" ? entry : entry && entry.src;
  const desc =
    typeof entry === "string"
      ? ""
      : entry && (entry.caption || entry.alt || "");
  img.onerror = imgFallback;
  img.src = src || "assets/placeholder.svg";
  img.alt = desc || `${bot.title} screenshot ${galleryState.index + 1}`;
  const indexText = `${bot.title} — ${galleryState.index + 1}/${
    bot.images.length
  }`;
  caption.textContent = desc ? `${indexText} · ${desc}` : indexText;
  const dots = Array.from($("#galleryDots").children);
  dots.forEach((d, idx) =>
    d.classList.toggle("active", idx === galleryState.index)
  );
}

function closeGallery() {
  const modal = $("#galleryModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modal.removeAttribute("aria-modal");
  document.body.style.overflow = "";
  if (lastFocusedBeforeModal && document.contains(lastFocusedBeforeModal)) {
    lastFocusedBeforeModal.focus();
  }
}

function initGalleryControls() {
  const modal = $("#galleryModal");
  modal.addEventListener("click", (e) => {
    if (e.target.closest('[data-close="gallery"], .gallery-backdrop'))
      closeGallery();
  });
  $("#galleryPrev").addEventListener("click", () =>
    setGalleryIndex(galleryState.index - 1)
  );
  $("#galleryNext").addEventListener("click", () =>
    setGalleryIndex(galleryState.index + 1)
  );
  window.addEventListener("keydown", (e) => {
    if (modal.classList.contains("open")) {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowLeft") setGalleryIndex(galleryState.index - 1);
      if (e.key === "ArrowRight") setGalleryIndex(galleryState.index + 1);
    }
  });

  // Basic focus trap within modal
  modal.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open") || e.key !== "Tab") return;
    const focusables = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const list = Array.from(focusables).filter(
      (el) => !el.hasAttribute("disabled")
    );
    if (list.length === 0) return;
    const first = list[0];
    const last = list[list.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

// Presence pill (simulated rotating status)
const presenceStates = [
  { cls: "online", text: "Online — Building Discord bots" },
  { cls: "idle", text: "Idle — Listening to Spotify" },
  { cls: "dnd", text: "Do Not Disturb — In focus mode" },
];

function initPresence() {
  const pill = $("#presencePill");
  if (!pill) return;
  let i = 0;
  const apply = () => {
    const { cls, text } = presenceStates[i % presenceStates.length];
    const dot = pill.querySelector(".dot");
    dot.className = `dot ${cls}`;
    pill.querySelector(".text").textContent = text;
    i++;
  };
  apply();
  setInterval(apply, 6000);
}

// Theme switching
function setTheme(mode) {
  const root = document.documentElement;
  root.classList.toggle("theme-dark", mode === "dark");
  root.classList.toggle("theme-light", mode === "light");
  localStorage.setItem("theme", mode);
  updateThemeButtons(mode);
}

function themeIcon(mode) {
  if (mode === "dark") {
    // moon icon
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>';
  }
  // sun icon
  return '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79l1.8-1.79zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zM4.84 20.83l1.79-1.79l-1.8-1.79l-1.79 1.79l1.8 1.79zM20 11v2h3v-2h-3zm-2.93-6.16l1.79-1.79l1.41 1.41l-1.79 1.79l-1.41-1.41zM12 6a6 6 0 100 12A6 6 0 0012 6zm7.16 14.83l-1.79-1.79l-1.41 1.41l1.79 1.79l1.41-1.41z"/></svg>';
}

function updateThemeButtons(mode) {
  const btns = [
    document.getElementById("themeToggle"),
    document.getElementById("themeToggleSide"),
  ].filter(Boolean);
  const next = mode === "dark" ? "light" : "dark";
  for (const b of btns) {
    b.innerHTML = themeIcon(next);
    b.setAttribute("aria-label", `Switch to ${next} theme`);
    b.title = `Switch to ${next} theme`;
  }
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const mode = saved || (prefersDark ? "dark" : "light");
  setTheme(mode);
  const toggle = () =>
    setTheme(
      (localStorage.getItem("theme") || mode) === "dark" ? "light" : "dark"
    );
  const a = document.getElementById("themeToggle");
  const b = document.getElementById("themeToggleSide");
  if (a) a.addEventListener("click", toggle);
  if (b) b.addEventListener("click", toggle);
}

// Mobile nav toggle
function initNavToggle() {
  const nav = document.querySelector(".discord-nav");
  const btn = document.getElementById("navToggle");
  if (!nav || !btn) return;
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
    btn.classList.toggle("active", open);
  });
  nav.addEventListener("click", (e) => {
    if (nav.classList.contains("open") && e.target.closest(".nav-links a")) {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.classList.remove("active");
    }
  });
  // Click outside to close mobile menu
  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("open")) return;
    if (e.target.closest(".discord-nav")) return;
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    btn.classList.remove("active");
  });
  // Escape closes menu
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initPresence();
  renderBots();
  renderProjects();
  renderExperience();
  initGalleryControls();
  initNavToggle();
  initYear();
  scrollReveal();
  // Smooth scroll for nav links (with close on mobile)
  document.querySelectorAll('.nav-links a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      const el =
        document.getElementById(id) ||
        document.querySelector(`[id='${CSS.escape(id)}']`);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
