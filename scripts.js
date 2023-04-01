
const splashPage = document.querySelector(".splash-page")

//skill grid and shading anim
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


window.addEventListener("scroll", function () {

  const jobOne = document.querySelector(".job1");
  const jobTwo = document.querySelector(".job2");
  const jobThree = document.querySelector(".job3");
  const jobFour = document.querySelector(".job4");
  const jobFive = document.querySelector(".job5");

  let scrolled = window.pageYOffset;
  let rate = scrolled * -0.3;

  if (window.innerWidth < 400) {
    jobOne.style.transform = `translateX(${rate + 1100}%)`;
    jobTwo.style.transform = `translateX(${rate + 1200}%)`;
    jobThree.style.transform = `translateX(${rate + 1300}%)`;
    jobFour.style.transform = `translateX(${rate + 1400}%)`;
    jobFive.style.transform = `translateX(${rate + 1500}%)`;
    console.log(`small ${rate}`);
  }
  else if (window.innerWidth < 600) {
    jobOne.style.transform = `translateX(${rate + 900}%)`;
    jobTwo.style.transform = `translateX(${rate + 1000}%)`;
    jobThree.style.transform = `translateX(${rate + 1100}%)`;
    jobFour.style.transform = `translateX(${rate + 1200}%)`;
    jobFive.style.transform = `translateX(${rate + 1300}%)`;
    console.log(`med-small ${rate}`);
  }
  else if (window.innerWidth < 900) {
    jobOne.style.transform = `translateX(${rate + 750}%)`;
    jobTwo.style.transform = `translateX(${rate + 800}%)`;
    jobThree.style.transform = `translateX(${rate + 850}%)`;
    jobFour.style.transform = `translateX(${rate + 900}%)`;
    jobFive.style.transform = `translateX(${rate + 950}%)`;
    console.log(`medium ${rate}`);
  }
  else {
    jobOne.style.transform = `translateX(${rate + 700}%)`;
    jobTwo.style.transform = `translateX(${rate + 750}%)`;
    jobThree.style.transform = `translateX(${rate + 800}%)`;
    jobFour.style.transform = `translateX(${rate + 850}%)`;
    jobFive.style.transform = `translateX(${rate + 900}%)`;
    console.log(`large ${rate}`);
  }

});

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