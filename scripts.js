
const splashPage = document.querySelector(".splash-page")

//skill grid and shading anim
const infoBar = document.querySelector(".info-bar")
const skillReveal = document.querySelector(".skill-grid")

const shadeObserver = new IntersectionObserver(function (
  entries,
  shadeObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      infoBar.classList.add("shade-header");
      skillReveal.classList.add("skill-reveal");
    } else {
      infoBar.classList.remove("shade-header");
    }
  });
});

shadeObserver.observe(splashPage);

//accent stripe anim
const stripe = document.querySelector(".stripe")
const revealOptions = {
  rootMargin: "-600px 0px 0px 0px"
};

const stripeObserver = new IntersectionObserver(function (
  entries,
  stripeObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      stripe.classList.add("stripe-anim")

    } else {
      stripe.classList.remove("stripe-anim");
    }
  });
},
  revealOptions);

stripeObserver.observe(splashPage);

window.addEventListener("scroll", function () {

  const jobOne = document.querySelector(".job1");
  const jobTwo = document.querySelector(".job2");
  const jobThree = document.querySelector(".job3");
  const jobFour = document.querySelector(".job4");
  const jobFive = document.querySelector(".job5");

  let scrolled = window.pageYOffset;
  let rate = scrolled * -0.3;
  if (window.innerHeight < 1000) {
    jobOne.style.transform = `translateX(${rate + 1100}%)`;
    jobTwo.style.transform = `translateX(${rate + 1200}%)`;
    jobThree.style.transform = `translateX(${rate + 1300}%)`;
    jobFour.style.transform = `translateX(${rate + 1400}%)`;
    jobFive.style.transform = `translateX(${rate + 1500}%)`;
  }
  else {
    jobOne.style.transform = `translateX(${rate + 700}%)`;
    jobTwo.style.transform = `translateX(${rate + 750}%)`;
    jobThree.style.transform = `translateX(${rate + 800}%)`;
    jobFour.style.transform = `translateX(${rate + 850}%)`;
    jobFive.style.transform = `translateX(${rate + 900}%)`;
  }

})

//community stripe
const commAnimOne = document.querySelector(".comm-anim1")
const commAnimTwo = document.querySelector(".comm-anim2")
const community = document.querySelector(".community")
const communityOptions = {
  rootMargin: "0px 0px 0px 0px"
};

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
},
  communityOptions);

communityObserver.observe(community);