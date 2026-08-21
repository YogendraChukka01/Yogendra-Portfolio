const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const progress = $(".scroll-progress span");
const nav = $(".nav");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function updateScrollState() {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${height > 0 ? (window.scrollY / height) * 100 : 0}%`;
  nav.classList.toggle("is-scrolled", window.scrollY > 14);
}
window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();

const reveals = $$(".reveal");
if (reduceMotion.matches) {
  reveals.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px" });
  reveals.forEach((element) => revealObserver.observe(element));
}

const navLinks = $$(".nav-links a");
const sections = $$("main section[id]");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) navLinks.forEach((link) => link.classList.toggle("active", link.hash === `#${entry.target.id}`)); });
}, { rootMargin: "-28% 0px -62%", threshold: 0 });
sections.forEach((section) => sectionObserver.observe(section));

const menuButton = $(".menu-toggle"); const mobileMenu = $(".mobile-menu");
function closeMenu() { mobileMenu.hidden = true; menuButton.setAttribute("aria-expanded", "false"); menuButton.setAttribute("aria-label", "Open menu"); }
menuButton.addEventListener("click", () => { const isOpen = mobileMenu.hidden; mobileMenu.hidden = !isOpen; menuButton.setAttribute("aria-expanded", String(isOpen)); menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu"); });
$$("a", mobileMenu).forEach((link) => link.addEventListener("click", closeMenu));

const root = document.documentElement; const themeButton = $(".theme-toggle");
function setTheme(theme) { root.dataset.theme = theme; localStorage.setItem("portfolio-theme", theme); themeButton.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`); }
setTheme(localStorage.getItem("portfolio-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
themeButton.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

if (!reduceMotion.matches && window.matchMedia("(pointer: fine)").matches) {
  $$(".magnetic").forEach((button) => { button.addEventListener("pointermove", (event) => { const rect = button.getBoundingClientRect(); button.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * .06}px, ${(event.clientY - rect.top - rect.height / 2) * .06 - 2}px)`; }); button.addEventListener("pointerleave", () => { button.style.transform = ""; }); });
}

const nodeDescriptions = { input: "Start with a clear input: the user’s goal, context, and constraints shape every decision that follows.", router: "The router determines the best path: a direct response, a retrieval flow, or a tool-assisted task.", agent: "The agent plans a useful next step, balancing model reasoning with observable, bounded execution.", tools: "Tools and retrieval ground the system in current information and permit meaningful actions beyond the model.", response: "A strong response is clear, contextual, and actionable—not simply generated text." };
const nodeDetail = $(".node-detail");
$$(".agent-node").forEach((node) => node.addEventListener("click", () => { $$(".agent-node").forEach((item) => item.classList.toggle("is-active", item === node)); nodeDetail.textContent = nodeDescriptions[node.dataset.node]; }));

const palette = $(".command-palette"); const commandInput = $(".command-input");
function openPalette() { palette.showModal(); commandInput.value = ""; $$(".command-list button").forEach((button) => button.hidden = false); commandInput.focus(); }
$(".command-trigger").addEventListener("click", openPalette); $(".command-close").addEventListener("click", () => palette.close());
window.addEventListener("keydown", (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); if (!palette.open) openPalette(); } });
commandInput.addEventListener("input", () => { const query = commandInput.value.toLowerCase(); $$(".command-list button").forEach((button) => { button.hidden = !button.textContent.toLowerCase().includes(query); }); });
$$(".command-list button").forEach((button) => button.addEventListener("click", () => { const command = button.dataset.command; palette.close(); if (command === "theme") themeButton.click(); else $(command).scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth" }); }));
$(".back-to-top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" }));
