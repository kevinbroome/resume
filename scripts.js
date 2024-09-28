gsap.registerPlugin(ScrollTrigger);

/**
 * Adding DOm loaded animation
 */
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.full-page').classList.add('loaded');

    /**
     * Obscure my email
     */
    (() => {
      const emailLink = document.querySelector('.email');
      const email = 'kbroome88' + '@' + 'gmail.com';
      emailLink.setAttribute('href', 'mailto:' + email);
      emailLink.textContent = 'Mail me';
    })();
  }, 1);
});

// Intersection Observer for .full-page
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const fullPageElement = document.querySelector('.full-page');
    if (entry.isIntersecting) {
      fullPageElement.classList.remove('scroll');
    } else {
      fullPageElement.classList.add('scroll');
    }
  });
});

/**
 * Hero BG Words
 */
(() => {
  // Array of words
  const words = [
    '<section id="#anchor">',
    'CSS3',
    'HTML5',
    'JavaScript',
    '{display: grid;}',
    '<div class="hero">',
    '{color: $col-primary}',
    'GSAP',
    'AWS',
    'Sass',
    'Node.js',
    'Webpack',
    'document.addEventListener',
    'const query',
    'if (!query) return;',
    'fetch()',
    'localStorage',
    'aria-hidden="true"',
    'Blender',
    '3D Modeling',
    'Vue',
    'Figma',
    'Photoshop',
    'Affinity',
    'ThreeJS',
  ];

  // Select the .bg-words container
  const bgWordsContainer = document.querySelector('.bg-words');

  // Store GSAP animations
  const animations = [];

  // Append each word to the .bg-words container at random positions
  words.forEach(word => {
    const wordElement = document.createElement('div');
    wordElement.textContent = word;
    wordElement.style.position = 'absolute';
    wordElement.style.top = `${Math.random() * 100}%`;
    wordElement.style.left = `${Math.random() * 100}%`;
    wordElement.style.fontSize = `${Math.random() * 2 + 1}rem`;
    bgWordsContainer.appendChild(wordElement);

    // Animate the word randomly
    const animation = gsap.fromTo(wordElement,
      { opacity: 0 },
      {
        opacity: 0.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: Math.random() * 3 + 1
      }
    );

    // Store the animation
    animations.push(animation);
  });

  // Intersection Observer for .hero
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Resume animations
        animations.forEach(animation => animation.resume());
      } else {
        // Pause animations
        animations.forEach(animation => animation.pause());
      }
    });
  });

  const heroElement = document.querySelector('.hero');
  if (heroElement) {
    observer.observe(heroElement);
  }
})();

const topElement = document.querySelector('.top');
if (topElement) {
  observer.observe(topElement);
}

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