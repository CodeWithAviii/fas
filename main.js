const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open")
  menuBtnIcon.setAttribute("class","ri-menu-line");
});

const scrolllRevealOption = {
  origin:"bottom",
  distance:"50px",
  duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
  ...scrolllRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header_content h1", {
  ...scrolllRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header_content p", {
  ...scrolllRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header_btns", {
  ...scrolllRevealOption,
  delay: 1500,
});

const banner = document.querySelector(".banner_container")

const bannerContent = Array.from(banner.children);

bannerContent.forEach(item => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true)
  banner.appendChild(duplicateNode)
});

ScrollReveal().reveal(".arrival_card ", {
  ...scrolllRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".sale_image img", {
  ...scrolllRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".sale_content h2", {
  ...scrolllRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".sale_content p", {
  ...scrolllRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".sale_content h4", {
  ...scrolllRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".sale_btns", {
  ...scrolllRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".favourite_card ", {
  ...scrolllRevealOption,
  interval: 500,
});