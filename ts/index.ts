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

let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.id = "nav-open";
    setTimeout(() => {
      nav.id = "nav-closed";
    }, 1000);
  } else {
    nav.id = "nav-closed";
  }

  lastScrollY = window.scrollY;
});
