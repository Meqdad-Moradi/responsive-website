const togglerEl = document.querySelector(".toggler");
const headerNave = document.querySelector(".header-nav");
const headerLinks = document.querySelectorAll(".nav-list li a");

function hamburgerMenu(e) {
  togglerEl.classList.toggle("active");
  headerNave.classList.toggle("active");
}

togglerEl.addEventListener("click", hamburgerMenu);

headerLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    headerLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
    hamburgerMenu();
  })
);

// ======== showcase slider
const slides = Array.from(document.querySelectorAll(".slide"));
const auto = true;
const intervalTime = 5000;
let interval;
let counter = 0;

function slider() {
  counter++;
  if (counter > slides.length - 1) {
    counter = 0;
  }
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[counter].classList.add("active");
}

// auto slide
if (auto) {
  interval = setInterval(() => {
    slider();
  }, intervalTime);
}
