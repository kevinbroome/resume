const infoBar = document.querySelector(".info-bar")
const splashPage = document.querySelector(".splash-page")

const shadeObserver = new IntersectionObserver(function (
  entries,
  shadeObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      infoBar.classList.add("shade-header");
    } else {
      infoBar.classList.remove("shade-header");
    }
  });
});

shadeObserver.observe(splashPage);

const skillReveal = document.querySelector(".skill-grid")
const revealOptions = {
  rootMargin: "-250px 0px 0px 0px"
};

const revealObserver = new IntersectionObserver(function (
  entries,
  revealObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      skillReveal.classList.add("skill-reveal");
    } else {
      skillReveal.classList.remove("skill-reveal");
    }
  });
},
  revealOptions);

revealObserver.observe(splashPage);