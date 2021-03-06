import "./hero";

const nav = document.querySelector("nav") as HTMLDivElement;

const addOpen = (entries: IntersectionObserverEntry[], observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("open");
    }
  });
};

const obsOptions = {
  root: null,
  threshold: 0.3,
};
const obs = new IntersectionObserver(addOpen, obsOptions);
const entryHeads = document.querySelectorAll(".section-heading");

entryHeads.forEach((elem) => obs.observe(elem));
obs.observe(document.querySelector("#hero-head-cont"));
obs.observe(document.querySelector("#hero-par"));
obs.observe(document.querySelector("#hero-link"));
obs.observe(document.querySelector("#hero-img"));

let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollY > window.scrollY) {
    nav.id = "nav-open";
  } else {
    nav.id = "nav-closed";
  }

  if (window.scrollY === 0) {
    nav.id = "nav-open";
  }

  lastScrollY = window.scrollY;
});

const mailInput = document.querySelector(
  "#mailing-email > input"
) as HTMLInputElement;
const mailBtn = document.querySelector(
  "#mailing-email > .right-arr"
) as HTMLDivElement;

mailBtn.addEventListener("click", () => (mailInput.value = ""));
