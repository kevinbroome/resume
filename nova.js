const Obs = document.querySelector(".blender-observer")
const ble = document.querySelector(".ble")
const nder = document.querySelector(".nder")
const blenderOptions = {
  rootMargin: "100px 0px -400px 0px"
}

const blenderObserver = new IntersectionObserver(function (
  entries,
  blenderObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      ble.classList.add("ble-anim");
      nder.classList.add("nder-anim");
    } else {
      ble.classList.remove("ble-anim");
      nder.classList.remove("nder-anim");
    }
  });
}, blenderOptions);

blenderObserver.observe(Obs);

const doughnut = document.querySelector(".doughnut")
const cup = document.querySelector(".cup")
const earlyOptions = {
  rootMargin: "0px 0px -800px 0px"
}

const earlyObs = new IntersectionObserver(function (
  entries,
  earlyObs
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      doughnut.classList.add("doughnut-anim");
      cup.classList.add("cup-anim");
    }
  });
}, earlyOptions);

earlyObs.observe(Obs);