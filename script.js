const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = [...document.querySelectorAll(".nav-links a")];
const internalLinks = links.filter((link) => link.getAttribute("href")?.startsWith("#"));
const sections = internalLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const behanceGrid = document.querySelector("[data-behance-projects]");
const langButtons = [...document.querySelectorAll("[data-lang]")];

const cvLinks = {
  es: "https://drive.google.com/file/d/1AgIDnWdaa_mRJhGZ4rLisIrc1UOXmnBN/view",
  en: "https://drive.google.com/file/d/1MtwFP8ZQ4RF1bOmSdMyXFCuoiijZkGe7/view?usp=sharing",
};

const copy = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      cv: "Ver CV",
    },
    metaDescription:
      "Portfolio de Giovanna Antonucci, Product Designer, UX/UI y Digital Designer.",
    brandLabel: "Ir al inicio",
    menuLabel: "Navegación principal",
    langLabel: "Cambiar idioma",
    heroRole: "Product Designer —<br />UX/UI —<br />Digital Designer —",
    heroDescription:
      "Diseñadora Digital con +3 años de experiencia creando experiencias digitales y sistemas visuales que conectan necesidades de negocio con usuarios reales.",
    scrollCue: "Scroll para explorar",
    headings: {
      experience: "Experiencia",
      education: "Educación",
      projects: "Proyectos",
      contact: "Contacto",
    },
    experience: [
      {
        date: "Jul 2024 - Mar 2026",
        location: "Argentina — Remoto",
        role: "Diseñadora UX/UI",
        bullets: [
          "Diseño end-to-end de +25 productos digitales (apps mobile, sistemas B2B y sitios web)",
          "Creación e implementación de Design Systems en Figma",
          "Diseño de interfaces escalables adaptables a productos existentes",
          "Colaboración con equipos multidisciplinarios para validar soluciones",
        ],
      },
      {
        date: "Jun 2023 — Jul 2024",
        location: "España — Remoto",
        role: "Diseñadora UX/UI",
        bullets: [
          "Co-desarrollo y mantenimiento del Design System de la compañía",
          "Diseño de sitio web corporativo y múltiples landing pages",
          "Optimización de experiencia de usuario en flujos clave",
          "Trabajo conjunto con desarrollo para asegurar implementación correcta",
        ],
      },
      {
        date: "Jun 2023 — Actualidad",
        location: "La Plata, BA",
        role: "Diseñadora Digital",
        bullets: [
          "Diseño de sitios web, identidades visuales y presentaciones",
          "Desarrollo de sistemas visuales coherentes adaptados a cada marca",
          "Piezas para redes sociales orientadas a engagement y posicionamiento",
          "Gestión integral de proyectos y contacto directo con clientes",
        ],
      },
    ],
    education: [
      {
        date: "Agosto 2023 — En curso (4to año)",
        status: "En curso",
        credential: "Licenciatura en Diseño Digital",
        description:
          "Actualmente en el último año de la carrera, integrando diseño, tecnología y comunicación visual estratégica.",
      },
      {
        date: "Junio 2026",
        status: "Completado",
        credential: "Certificación en Marketing digital y Paid Media",
        description:
          "Introducción al marketing digital, desde sus fundamentos hasta la aplicación práctica de estrategias publicitarias en plataformas digitales. Creación de estrategias de marketing y optimización de campañas. Formación práctica en plataformas como Meta, TikTok, LinkedIn, Snapchat y X.",
      },
      {
        date: "Octubre 2025 — Diciembre 2025",
        status: "Completado",
        credential: "Certificación en Arte Digital y Video Generativo con IA",
        description:
          "Exploración del potencial creativo de la IA para generar imágenes y videos. Dominio de herramientas de IA generativa, creación de avatares y efectos visuales.",
      },
      {
        date: "Marzo 2023 — Julio 2023",
        status: "Completado",
        credential: "Certificación en UX/UI Design",
        description:
          "Formación intensiva en diseño de experiencias digitales. Base teórica y práctica en investigación de usuario, wireframing, prototipado y validación de interfaces.",
      },
    ],
    skills: [
      {
        category: "Diseño",
        items: ["UX/UI Design", "Design Systems", "Branding", "Visual Design"],
      },
      {
        category: "Herramientas",
        items: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects"],
      },
      {
        category: "Tecnologías",
        items: ["HTML", "CSS", "JavaScript"],
      },
      {
        category: "Habilidades",
        items: [
          "Pensamiento Estratégico",
          "Comunicación Visual",
          "Resolución de Problemas",
          "Diseño Educativo",
        ],
      },
    ],
    projectsCta: "Ver portfolio en Behance",
    projectSmall: "Ver en Behance",
    contactTitleWork: "Trabajemos ",
    contactTitleTogether: "juntos",
    phone: "Teléfono",
    footerLocation: "La Plata, Buenos Aires — Disponible para proyectos remotos",
  },
  en: {
    nav: {
      about: "About me",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      cv: "View CV",
    },
    metaDescription:
      "Portfolio of Giovanna Antonucci, Product Designer, UX/UI and Digital Designer.",
    brandLabel: "Go to home",
    menuLabel: "Main navigation",
    langLabel: "Change language",
    heroRole: "Product Designer —<br />UX/UI —<br />Digital Designer —",
    heroDescription:
      "Digital Designer with +3 years of experience creating digital experiences and visual systems that connect business needs with real users.",
    scrollCue: "Scroll to explore",
    headings: {
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
    },
    experience: [
      {
        date: "Jul 2024 - Mar 2026",
        location: "Argentina — Remote",
        role: "UX/UI Designer",
        bullets: [
          "End-to-end design of +25 digital products (mobile apps, B2B systems and websites)",
          "Creation and implementation of Design Systems in Figma",
          "Design of scalable interfaces adaptable to existing products",
          "Collaboration with multidisciplinary teams to validate solutions",
        ],
      },
      {
        date: "Jun 2023 — Jul 2024",
        location: "Spain — Remote",
        role: "UX/UI Designer",
        bullets: [
          "Co-development and maintenance of the company's Design System",
          "Design of a corporate website and multiple landing pages",
          "Optimization of user experience in key flows",
          "Collaboration with development to ensure accurate implementation",
        ],
      },
      {
        date: "Jun 2023 — Present",
        location: "La Plata, BA",
        role: "Digital Designer",
        bullets: [
          "Design of websites, visual identities and presentations",
          "Development of coherent visual systems adapted to each brand",
          "Social media assets focused on engagement and positioning",
          "End-to-end project management and direct client communication",
        ],
      },
    ],
    education: [
      {
        date: "August 2023 — Ongoing (4th year)",
        status: "Ongoing",
        credential: "Bachelor's Degree in Digital Design",
        description:
          "Currently in the final year of the degree, integrating design, technology and strategic visual communication.",
      },
      {
        date: "June 2026",
        status: "Completed",
        credential: "Certification in Digital Marketing and Paid Media",
        description:
          "Introduction to digital marketing, from fundamentals to the practical application of advertising strategies on digital platforms. Creation of marketing strategies and campaign optimization. Practical training on platforms such as Meta, TikTok, LinkedIn, Snapchat and X.",
      },
      {
        date: "October 2025 — December 2025",
        status: "Completed",
        credential: "Certification in Digital Art and Generative AI Video",
        description:
          "Exploration of the creative potential of AI for image and video generation. Mastery of generative AI tools, avatar creation and visual effects.",
      },
      {
        date: "March 2023 — July 2023",
        status: "Completed",
        credential: "Certification in UX/UI Design",
        description:
          "Intensive training in digital experience design. Theoretical and practical foundations in user research, wireframing, prototyping and interface validation.",
      },
    ],
    skills: [
      {
        category: "Design",
        items: ["UX/UI Design", "Design Systems", "Branding", "Visual Design"],
      },
      {
        category: "Tools",
        items: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects"],
      },
      {
        category: "Technologies",
        items: ["HTML", "CSS", "JavaScript"],
      },
      {
        category: "Skills",
        items: [
          "Strategic Thinking",
          "Visual Communication",
          "Problem Solving",
          "Educational Design",
        ],
      },
    ],
    projectsCta: "View portfolio on Behance",
    projectSmall: "View on Behance",
    contactTitleWork: "Let's work ",
    contactTitleTogether: "together",
    phone: "Phone",
    footerLocation: "La Plata, Buenos Aires — Available for remote projects",
  },
};

const behanceProjects = [
  {
    title: "Vientos del Sur",
    category: { es: "Manual de marca", en: "Brand manual" },
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/1bd36e246429847.Y3JvcCw3ODQsNjEzLDQ0MCwyMw.jpg",
    url: "https://www.behance.net/gallery/246429847/Vientos-del-sur-Manual-de-marca",
  },
  {
    title: "Mente Clara",
    category: { es: "Reporte UX - App", en: "UX Report - App" },
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/92f088238653395.Y3JvcCwyMjQzLDE3NTUsMTcyLDA.png",
    url: "https://www.behance.net/gallery/238653395/REPORTE-UX-APP-MENTECLARA",
  },
  {
    title: "Hospital Italiano",
    category: {
      es: "Investigación UX & rediseño web",
      en: "UX research & web redesign",
    },
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f9f871233593701.Y3JvcCwxNzA4LDEzMzYsMjksMA.png",
    url: "https://www.behance.net/gallery/233593701/INVESTIGACION-UX-REDISENO-Web",
  },
  {
    title: "Franui",
    category: { es: "Diseño web & prototipado", en: "Web design & prototyping" },
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/dbfea1217867467.Y3JvcCwxODQxLDE0NDAsNDEsMA.png",
    url: "https://www.behance.net/gallery/217867467/Franui-Diseno-Web-Prototipado",
  },
  {
    title: "Las Verbenas",
    category: {
      es: "Diseño de sitio & prototipado",
      en: "Website design & prototyping",
    },
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/177109217864209.Y3JvcCwxODQxLDE0NDAsNDEsMA.png",
    url: "https://www.behance.net/gallery/217864209/Las-Verbenas-Diseno-de-Sitio-Prototipado",
  },
  {
    title: "Dermaglós",
    category: {
      es: "Investigación UX & rediseño",
      en: "UX research & redesign",
    },
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/474844217863533.Y3JvcCwxODQxLDE0NDAsNzIsMA.png",
    url: "https://www.behance.net/gallery/217863533/Dermaglos-Invesigacion-UX-Rediseno",
  },
  {
    title: "EmergenciAPP",
    category: { es: "Reporte UX/UI", en: "UX/UI Report" },
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3a1e66174223215.Y3JvcCw4ODgsNjk1LDM0NSww.jpg",
    url: "https://www.behance.net/gallery/174223215/REPORTE-UXUI-EMERGENCIAPP",
  },
];

let currentLanguage = localStorage.getItem("language") || "es";
if (!copy[currentLanguage]) currentLanguage = "es";

const setText = (selector, text) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
};

const setHtml = (selector, html) => {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = html;
};

const setList = (container, items) => {
  if (!container) return;
  container.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
};

const renderProjects = (lang) => {
  if (!behanceGrid) return;
  const t = copy[lang];
  const profileUrl = behanceGrid.dataset.profileUrl;

  behanceGrid.innerHTML = behanceProjects
    .map(
      (project, index) => `
        <a class="project-card" href="${project.url || profileUrl}" target="_blank" rel="noreferrer">
          <img src="${project.image}" alt="${project.title}" loading="lazy" />
          <span class="project-card-overlay">
            <h3>${project.title}</h3>
            <p class="eyebrow">${project.category[lang]}</p>
            <small>${t.projectSmall}</small>
          </span>
          <strong>${String(index + 1).padStart(2, "0")}</strong>
        </a>
      `
    )
    .join("");
};

const applyLanguage = (lang) => {
  currentLanguage = lang;
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;

  const t = copy[lang];
  const cvLink = document.querySelector(".nav-cv");
  const langToggle = document.querySelector(".lang-toggle");
  const metaDescription = document.querySelector('meta[name="description"]');

  document.querySelector(".nav")?.setAttribute("aria-label", t.menuLabel);
  document.querySelector(".brand")?.setAttribute("aria-label", t.brandLabel);
  langToggle?.setAttribute("aria-label", t.langLabel);
  if (metaDescription) metaDescription.setAttribute("content", t.metaDescription);

  setText('.nav-links a[href="#inicio"]', t.nav.about);
  setText('.nav-links a[href="#experiencia"]', t.nav.experience);
  setText('.nav-links a[href="#proyectos"]', t.nav.projects);
  setText('.nav-links a[href="#contacto"]', t.nav.contact);
  setText(".nav-cv", t.nav.cv);
  if (cvLink) cvLink.href = cvLinks[lang];

  setHtml(".hero-role", t.heroRole);
  setText(".hero-bottom p", t.heroDescription);
  setText(".scroll-cue", t.scrollCue);
  document.querySelector(".scroll-cue")?.prepend(document.createElement("span"));

  setText("#experiencia .section-heading h2", t.headings.experience);
  setText("#educacion .section-heading h2", t.headings.education);
  setText("#proyectos .section-heading h2", t.headings.projects);
  setText("#contacto .section-heading h2", t.headings.contact);

  document.querySelectorAll(".timeline-item").forEach((item, index) => {
    const data = t.experience[index];
    if (!data) return;
    setTextIn(item, ".timeline-meta strong", data.date);
    setTextIn(item, ".timeline-meta em", data.location);
    setTextIn(item, ".eyebrow", data.role);
    setList(item.querySelector("ul"), data.bullets);
  });

  document.querySelectorAll(".education-grid article").forEach((item, index) => {
    const data = t.education[index];
    if (!data) return;
    const paragraphs = item.querySelectorAll("p");
    if (paragraphs[0]) paragraphs[0].textContent = data.date;
    const strong = item.querySelector("strong");
    if (strong) strong.innerHTML = `<span>${data.status}</span> ${data.credential}`;
    if (paragraphs[1]) paragraphs[1].textContent = data.description;
  });

  document.querySelectorAll(".skills-grid article").forEach((item, index) => {
    const data = t.skills[index];
    if (!data) return;
    setTextIn(item, "p", data.category);
    setList(item.querySelector("ul"), data.items);
  });

  setText(".project-actions a", t.projectsCta);
  renderProjects(lang);

  setText(".contact-title-work", t.contactTitleWork);
  setText(".contact-title-together", t.contactTitleTogether);
  setText('.contact-links a[href^="tel:"] span', t.phone);
  setText(".footer p:last-child", t.footerLocation);

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const setTextIn = (root, selector, text) => {
  const element = root.querySelector(selector);
  if (element) element.textContent = text;
};

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

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      internalLinks.forEach((link) => {
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

applyLanguage(currentLanguage);
settleInicioScroll();
