import splide from '@splidejs/splide';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.full-page').classList.add('loaded');
    console.log('test');
  }, 1);
});