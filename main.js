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

// ======== showcase slider ==================

const slides = Array.from(document.querySelectorAll(".slide"));
const sliderCounter = document.querySelector("#slider-counter");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const auto = true;
const intervalTime = 5000;
let interval;
let counter = 0;

function reset() {
  slides.forEach((slide) => slide.classList.remove("active"));
}

function slider() {
  counter++;
  if (counter > slides.length - 1) {
    counter = 0;
  }
  reset();
  slides[counter].classList.add("active");

  sliderCounter.textContent = counter + 1;
}

// auto slide
if (auto) {
  interval = setInterval(slider, intervalTime);
}

// next slide
next.addEventListener("click", () => {
  const active = document.querySelector(".slide.active");
  const nextSlide = active.nextElementSibling;
  const index = slides.findIndex((i) => i === nextSlide);

  reset();
  counter = index;
  sliderCounter.textContent = counter + 1;
  if (counter < 1) {
    sliderCounter.textContent = 1;
  }

  if (nextSlide && nextSlide !== null) {
    nextSlide.classList.add("active");
  } else {
    slides[0].classList.add("active");
  }

  if (auto) {
    clearInterval(interval);
    interval = setInterval(slider, intervalTime);
  }
});

// prev slide
prev.addEventListener("click", () => {
  const active = document.querySelector(".slide.active");
  const prevSlide = active.previousElementSibling;
  const index = slides.findIndex((i) => i === prevSlide);

  reset();
  counter = index;
  sliderCounter.textContent = index + 1;
  if (index < 0) {
    sliderCounter.textContent = 4;
  }

  if (prevSlide && prevSlide !== null) {
    prevSlide.classList.add("active");
  } else {
    slides[slides.length - 1].classList.add("active");
    // counter = index;
  }

  if (auto) {
    clearInterval(interval);
    interval = setInterval(slider, intervalTime);
  }
});

// ============= sticky header ==================

const header = document.querySelector("#header");

function stickyHeader() {
  const height = header.offsetHeight;
  if (window.scrollY > 0) {
    header.classList.add("sticky-header");
    document.body.style.marginTop = height + "px";
  }
}

window.addEventListener("scroll", stickyHeader);

// ================ contact form ================
const contactForm = document.querySelector("#contact-form");
const fname = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

contactForm.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  const nameValue = fname.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (nameValue === "" || nameValue === null) {
    error(fname, "Please insert your full name!");
  } else {
    success(fname);
  }

  if (emailValue === "" || emailValue === null) {
    error(email, "Please insert your email!");
  } else {
    success(email);
  }

  if (messageValue === "" || messageValue === null) {
    error(message, "Please insert your message!");
  } else {
    success(message);
  }

  fname.value = "";
  email.value = "";
  message.value = "";
}

function error(input, msg) {
  const inputContainer = input.parentElement;
  const small = inputContainer.querySelector("small");

  inputContainer.className = "input-container error";
  small.textContent = msg;
}

function success(input) {
  const inputContainer = input.parentElement;
  const small = inputContainer.querySelector("small");

  inputContainer.className = "input-container success";
  small.textContent = "";
}
