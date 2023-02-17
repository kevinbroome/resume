const infoBar = document.querySelector(".info-bar")
const splashPage = document.querySelector(".splash-page")


const shadeObserver = new IntersectionObserver(function (
  entries,
  shadeObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      infoBar.classList.add('shade-header');
    } else {
      infoBar.classList.remove('shade-header');
    }
  });
});

shadeObserver.observe(splashPage);