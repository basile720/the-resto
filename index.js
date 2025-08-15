const propos = document.querySelector(".home");
propos.addEventListener("click", () => {
  window.scrollTo({
    top: 10,
    left: 0,
    behavior: "smooth",
  });
});
const reservations = document.querySelector(".reservations");
reservations.addEventListener("click", () => {
  window.scrollTo({
    top: 2250,
    left: 0,
    behavior: "smooth",
  });
});
const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  window.scrollTo({
    top: 1400,
    left: 0,
    behavior: "smooth",
  });
});
const blog = document.querySelector(".blog");
blog.addEventListener("click", () => {
  window.scrollTo({
    top: 3400,
    left: 0,
    behavior: "smooth",
  });
});
const pages = document.querySelector(".page");
pages.addEventListener("click", () => {
  window.scrollTo({
    top: 700,
    left: 0,
    behavior: "smooth",
  });
});
const shop = document.querySelector(".shop");
shop.addEventListener("click", () => {
  window.scrollTo({
    top: 2900,
    left: 0,
    behavior: "smooth",
  });
});
const contact = document.querySelector(".contact");
contact.addEventListener("click", () => {
  window.scrollTo({
    top: 5000,
    left: 0,
    behavior: "smooth",
  });
});
const section1 = document.querySelector(".section1-left");
section1.addEventListener("scroll", () => {
  window.scrollTo({
    top: 5000,
    left: 0,
    behavior: "smooth",
  });
});
const anime = document.getElementById("animeImg");
const anime0 = document.getElementById("animeImg1");
const anime1 = document.getElementById("animeImg2");
const anime2 = document.getElementById("animeImg3");
const anime3 = document.getElementById("animeImg4");
const anime4 = document.getElementById("animeImg5");
const anime5 = document.getElementById("animeImg6");
const anime6 = document.getElementById("animeImg7");
const sectionLeft = document.querySelector(".section1-left");
const sectionRight = document.querySelector(".section1-right");
const section3 = document.querySelector(".section3-container");
const place = document.querySelector(".place");
const place2 = document.querySelector(".place2");
const place3 = document.querySelector(".place-3");
const chef = document.querySelector(".chef-2");
const section5 = document.querySelector(".section5");

window.addEventListener("scroll", () => {
  if (scrollY < 100) {
    sectionLeft.style.transform = "translateX(0)";
    sectionLeft.style.opacity = "1";
    sectionRight.style.transform = "translateX(0)";
    sectionRight.style.opacity = "1";
  }
  if (scrollY > 950) {
    anime.style.animation = "animeImg 3s ";
    anime0.style.animation = "animeImg 3s ";
    anime1.style.animation = "animeImg 3s ";
    anime2.style.animation = "animeImg 3s ";
    anime3.style.animation = "animeImg 3s ";
    anime4.style.animation = "animeImg 3s ";
    anime5.style.animation = "animeImg 3s ";
    anime6.style.animation = "animeImg 3s ";
  }
  if (scrollY > 2000) {
    section3.style.animation = "Anim 3s forwards";
  }
  if (scrollY > 2600) {
    place.style.animation = "placeAnim 2s forwards";
    place2.style.animation = "placeAnim 2s forwards";
    place3.style.animation = "placeAnim 2s forwards";
  }
  if (scrollY > 3050) {
    chef.style.animation = "AnimChef 4s forwards";
    section5.style.setProperty("--after-opacity", "1");
    section5.style.setProperty("--after-scale", "1");
console.log(after.position);

  }
});
