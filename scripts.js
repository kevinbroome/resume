import splide from '@splidejs/splide';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

//info-bar shading anim
const splashPage = document.querySelector(".splash-page")
const infoBar = document.querySelector(".info-bar")
const splashOptions = {
  rootMargin: "-200px 0px 0px 0px"
}

const shadeObserver = new IntersectionObserver(function (
  entries,
  shadeObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      infoBar.classList.add("shade-header");
      infoBar.classList.remove("black")
    } else {
      infoBar.classList.remove("shade-header");
      infoBar.classList.add("black")
    }
  });
}, splashOptions);
shadeObserver.observe(splashPage);

//Experience grow colour
const targetScroll = document.querySelector(".carousel-inner");
const wrapHeight = document.querySelector(".exp-wrapper");

targetScroll.addEventListener("scroll", () => {
  const scrollDist = targetScroll.scrollLeft;
  const heightAdj = scrollDist / 5.8;
  wrapHeight.style.height = `${heightAdj}px`
  console.log(scrollDist);
})

//community stripe
const commAnimOne = document.querySelector(".comm-anim1")
const commAnimTwo = document.querySelector(".comm-anim2")
const community = document.querySelector(".community")

const communityObserver = new IntersectionObserver(function (
  entries,
  communityObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      commAnimOne.classList.add("on1");
      commAnimTwo.classList.add("on2");

    } else {
      commAnimOne.classList.remove("on1");
      commAnimTwo.classList.remove("on2");
    }
  });
});

communityObserver.observe(community);

//education stripe
const iop = document.querySelector(".iop")
const coshh = document.querySelector(".coshh")
const manHan = document.querySelector(".man-han")
const hrIOP = document.querySelector(".edu-hr-iop")
const hrCOSHH = document.querySelector(".edu-hr-coshh")
const hrMANHAN = document.querySelector(".edu-hr-man-han")

const iopObserver = new IntersectionObserver(function (
  entries,
  iopObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      hrIOP.classList.add("activate");

    } else {
      hrIOP.classList.remove("activate");
    }
  });
});

iopObserver.observe(iop);

const coshhObserver = new IntersectionObserver(function (
  entries,
  coshhObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      hrCOSHH.classList.add("activate");

    } else {
      hrCOSHH.classList.remove("activate");
    }
  });
});

coshhObserver.observe(coshh);

const manHanObserver = new IntersectionObserver(function (
  entries,
  manHanObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      hrMANHAN.classList.add("activate");

    } else {
      hrMANHAN.classList.remove("activate");
    }
  });
});

manHanObserver.observe(manHan);