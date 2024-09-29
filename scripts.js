/**
 * Adding DOM loaded animation
 */
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.full-page').classList.add('loaded');

    /**
     * Obscure my email
     */
    (() => {
      const emailLinks = document.querySelectorAll('.email');
      const email = 'kbroome88' + '@' + 'gmail.com';
      emailLinks.forEach(emailLink => {
        emailLink.setAttribute('href', 'mailto:' + email);
      });
    })();
  }, 1);
});

/**
 * Intersection Observer for .full-page
 */
(() => {
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


  const topElement = document.querySelector('.top');
  if (topElement) {
    observer.observe(topElement);
  }
})();

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
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: Math.random() * 5
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

/**
 * Hero follow GSAP
 */
(() => {
  const hero = document.querySelector('.hero');

  gsap.to(hero.querySelector('.details'), {
    scrollTrigger: {
      trigger: hero,
      start: '50% center',
      end: '100% center',
      scrub: 3,
    },
    yPercent: 100,
  });
})();

/**
 * IntObs for right menu after hero
 */
(() => {
  // Intersection Observer for .hero
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const rightMenu = document.querySelector('.side-menu .kbRight .socials');
      if (entry.isIntersecting) {
        rightMenu.classList.remove('active');
      } else {
        rightMenu.classList.add('active');
      }
    });
  });

  const heroElement = document.querySelector('.hero');
  if (heroElement) {
    observer.observe(heroElement);
  }
})();

/**
 * count up numbers
 */
(() => {
  gsap.registerPlugin(ScrollTrigger);

  const animateCount = (element, target, updateFn) => {
    const duration = 2; // 2 seconds in GSAP
    gsap.to(element, {
      duration: duration,
      innerText: target,
      roundProps: "innerText",
      onUpdate: function () {
        updateFn(element, this.targets()[0].innerText);
      }
    });
  };

  const numbers = document.querySelectorAll('.number-wrapper .number');
  numbers.forEach(number => {
    const target = +number.getAttribute('data-num');
    ScrollTrigger.create({
      trigger: number,
      start: "10% bottom",
      onEnter: () => {
        animateCount(number, target, (el, value) => {
          el.textContent = value;
        });
      }
    });
  });

  const wrappers = document.querySelectorAll('.number-wrapper');
  wrappers.forEach(wrapper => {
    ScrollTrigger.create({
      trigger: wrapper,
      start: "10% bottom",
      onEnter: () => {
        gsap.to(wrapper, {
          duration: 2,
          '--rotation': '360deg',
          onUpdate: function () {
            const rotation = parseFloat(gsap.getProperty(wrapper, '--rotation'));
            const percent = (rotation / 360) * 100;
            wrapper.setAttribute('data-percent', percent.toFixed(0));
          }
        });

        const accoladesItems = document.querySelectorAll('.accolades .item');
        accoladesItems.forEach(item => {
          item.classList.add('active');
        });
      }
    });
  });
})();

// new Splide('#splide').mount();

// gsap.to('#splide', {
//   scrollTrigger: {
//     trigger: '#splide',
//     start: '0% top',
//     end: '200% top',
//     scrub: 1,
//     markers: true,
//   },
//   x: 100,
//   opacity: 0,
// });