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

const exampleObs = document.querySelector(".ex-obs")
const doughnut = document.querySelector(".doughnut")
const cup = document.querySelector(".cup")
const earlyOptions = {
  rootMargin: "0px 0px 0px 0px"
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

earlyObs.observe(exampleObs);

const tronObs = document.querySelector(".tron-observer");
const dark = document.querySelector(".dark-tron");
const light = document.querySelector(".light-tron");
const day = document.querySelector(".day-tron");

const tronOptions = {
  rootMargin: "0px 0px 0px 0px"
}

const tronObserver = new IntersectionObserver(function (
  entries,
  tronObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      dark.classList.add("dark-anim");
      light.classList.add("light-anim");
      day.classList.add("day-anim");
    }
  });
}, tronOptions);

tronObserver.observe(tronObs);

const novaObs = document.querySelector(".nova-text-mid");
const novaTop = document.querySelector(".nova-text-top");
const novaBot = document.querySelector(".nova-text-bot");
const novaTrans = document.querySelector(".nova-trans");
const novaNormal = document.querySelector(".nova-normal");
const novaSecond = document.querySelector(".nova-second");
const novaBots = document.querySelector(".nova-bots");

const novaObserver = new IntersectionObserver(function (
  entries,
  novaObsserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      novaTop.classList.add("nova-top-anim");
      novaBot.classList.add("nova-bot-anim");
      novaTrans.classList.add("trans-anim");
      novaNormal.classList.add("normal-anim");
      novaSecond.classList.add("second-anim");
      novaBots.classList.add("bots-anim");
    } else {
      novaTop.classList.remove("nova-top-anim");
      novaBot.classList.remove("nova-bot-anim");
      novaTrans.classList.remove("trans-anim");
      novaNormal.classList.remove("normal-anim");
      novaSecond.classList.remove("second-anim");
      novaBots.classList.remove("bots-anim");
    }
  });
});

novaObserver.observe(novaObs);