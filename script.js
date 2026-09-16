/*
  CONFIGURAÇÃO PRINCIPAL
  1) Troque WHATSAPP_NUMBER pelo número oficial da VetPet, somente números,
     com código do país. Ex.: 5574999999999
  2) Troque INSTAGRAM_URL pelo perfil oficial.
*/
const WHATSAPP_NUMBER = "55XXXXXXXXXXX";
const INSTAGRAM_URL = "https://www.instagram.com/vetpetclinica_/";

const whatsappMessage =
  "Olá! Vim pelo site da VetPet e gostaria de informações sobre atendimento.";

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
  link.target = "_blank";
  link.rel = "noopener";
});

document.querySelectorAll("[data-instagram]").forEach((link) => {
  link.href = INSTAGRAM_URL;
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(opened));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

/* Animação discreta ao entrar na tela */
const revealItems = document.querySelectorAll(
  ".service-card, .feature, .gallery-grid img, .location-card, .contact"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});
