gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.full-page').classList.add('loaded');
    console.log('test');
  }, 1);
});

new Splide('#splide').mount();

gsap.to('#splide', {
  scrollTrigger: {
    trigger: '#splide',
    start: '0% top',
    end: '200% top',
    scrub: 1,
    markers: true,
  },
  x: 100,
  opacity: 0,
});