const hero = document.querySelector("#hero") as HTMLDivElement;
const heroPar = document.querySelector("#hero-par") as HTMLParagraphElement;
const heroImg = document.querySelector("#hero-img") as HTMLDivElement;
const heroSvg = document.querySelector("#hero-svg") as HTMLImageElement;
const heroLink = document.querySelector("#hero-link") as HTMLDivElement;
const nextElem = document.querySelector("#next") as HTMLButtonElement;
const prevElem = document.querySelector("#prev") as HTMLButtonElement;
let currElem = 0;
let touchstartX = 0;
let touchendX = 0;

const setElemValue = () => {
  heroPar.innerText = elements[currElem].text;
  heroImg.style.backgroundImage = `url("${elements[currElem].image}")`;
  heroLink.innerText = elements[currElem].link;
  heroImg.classList.add("open");
  heroImg.classList.remove("close");
  heroPar.classList.add("open");
  heroLink.classList.add("open");

  if (currElem === 0) {
    heroSvg.style.opacity = "1";
  } else {
    heroSvg.style.opacity = "0";
  }
};

const setElem = () => {
  heroImg.classList.remove("open");
  heroImg.classList.add("close");
  heroPar.classList.remove("open");
  heroLink.classList.remove("open");

  setTimeout(setElemValue, 600);
};

const elements = [
  {
    text: "Phase One is free & open daily",
    image: "../img/hero/img1.avif",
    link: "Plan your visit",
  },
  {
    text: "Turning historic tracks into an unparalleled park",
    image: "img/hero/img2.avif",
    link: "See the full version",
  },
];

setElemValue();

nextElem.addEventListener("click", () => {
  currElem = 1 - currElem;
  setElem();
});

prevElem.addEventListener("click", () => {
  currElem = 1 - currElem;
  setElem();
});

hero.addEventListener("touchstart", (evt) => {
  touchstartX = evt.changedTouches[0].screenX;
});

hero.addEventListener("touchend", (evt) => {
  touchendX = evt.changedTouches[0].screenX;
  if (touchendX !== touchstartX) {
    currElem = 1 - currElem;
    setElem();
  }
});
