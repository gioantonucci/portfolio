const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = [...document.querySelectorAll(".nav-links a")];
const sections = links
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const behanceGrid = document.querySelector("[data-behance-projects]");

const behanceProjects = [
  {
    title: "Vientos del Sur",
    category: "Manual de marca",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/1bd36e246429847.Y3JvcCw3ODQsNjEzLDQ0MCwyMw.jpg",
    url: "https://www.behance.net/gallery/246429847/Vientos-del-sur-Manual-de-marca",
  },
  {
    title: "Mente Clara",
    category: "Reporte UX - App",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/92f088238653395.Y3JvcCwyMjQzLDE3NTUsMTcyLDA.png",
    url: "https://www.behance.net/gallery/238653395/REPORTE-UX-APP-MENTECLARA",
  },
  {
    title: "Hospital Italiano",
    category: "Investigación UX & rediseño web",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f9f871233593701.Y3JvcCwxNzA4LDEzMzYsMjksMA.png",
    url: "https://www.behance.net/gallery/233593701/INVESTIGACION-UX-REDISENO-Web",
  },
  {
    title: "Franui",
    category: "Diseño web & prototipado",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/dbfea1217867467.Y3JvcCwxODQxLDE0NDAsNDEsMA.png",
    url: "https://www.behance.net/gallery/217867467/Franui-Diseno-Web-Prototipado",
  },
  {
    title: "Las Verbenas",
    category: "Diseño de sitio & prototipado",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/177109217864209.Y3JvcCwxODQxLDE0NDAsNDEsMA.png",
    url: "https://www.behance.net/gallery/217864209/Las-Verbenas-Diseno-de-Sitio-Prototipado",
  },
  {
    title: "Dermaglós",
    category: "Investigación UX & rediseño",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/474844217863533.Y3JvcCwxODQxLDE0NDAsNzIsMA.png",
    url: "https://www.behance.net/gallery/217863533/Dermaglos-Invesigacion-UX-Rediseno",
  },
  {
    title: "EmergenciAPP",
    category: "Reporte UX/UI",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3a1e66174223215.Y3JvcCw4ODgsNjk1LDM0NSww.jpg",
    url: "https://www.behance.net/gallery/174223215/REPORTE-UXUI-EMERGENCIAPP",
  },
];

const scrollInicioToTop = () => {
  if (window.location.hash !== "#inicio") return;
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};

const scrollToNavTarget = (hash, behavior = "smooth") => {
  const target = document.querySelector(hash);
  if (!target) return;

  const navHeight = menuButton?.closest(".nav")?.offsetHeight ?? 78;
  const top =
    hash === "#inicio"
      ? 0
      : Math.max(0, target.getBoundingClientRect().top + window.scrollY - navHeight);

  window.scrollTo({ top, left: 0, behavior });
};

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const settleInicioScroll = () => {
  scrollInicioToTop();
  requestAnimationFrame(scrollInicioToTop);
  window.setTimeout(scrollInicioToTop, 120);
  window.setTimeout(scrollInicioToTop, 360);
};

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");

    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    if (!hash?.startsWith("#")) return;

    event.preventDefault();
    history.pushState(null, "", hash);
    scrollToNavTarget(hash);

    if (hash === "#inicio") {
      requestAnimationFrame(settleInicioScroll);
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
);

sections.forEach((section) => observer.observe(section));

window.addEventListener("load", settleInicioScroll);
window.addEventListener("pageshow", settleInicioScroll);
window.addEventListener("hashchange", settleInicioScroll);
settleInicioScroll();

if (behanceGrid) {
  const profileUrl = behanceGrid.dataset.profileUrl;

  behanceGrid.innerHTML = behanceProjects
    .map(
      (project, index) => `
        <a class="project-card" href="${project.url || profileUrl}" target="_blank" rel="noreferrer">
          <img src="${project.image}" alt="${project.title}" loading="lazy" />
          <span class="project-card-overlay">
            <h3>${project.title}</h3>
            <p class="eyebrow">${project.category}</p>
            <small>Ver en Behance</small>
          </span>
          <strong>${String(index + 1).padStart(2, "0")}</strong>
        </a>
      `
    )
    .join("");
}
