import "./hero";

const nav = document.querySelector("nav") as HTMLDivElement;

const addOpen = (entries, observer) => {
  entries.forEach((entry) => {
    let classes = entry.classList;
    if (!classes.contains("open")) {
      classes.add("open");
    }
    entry.classList = classes;
  });
};

const obsOptions = {};
const obs = new IntersectionObserver(addOpen, obsOptions);

const els = document.querySelectorAll(":not(.open)");
els.forEach((elem) => {
  obs.observe(elem);
});

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
