// Modern JavaScript for Sinra Website

// Utility: throttle
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Animate statistics (.stat-number in features section)
const animateStats = () => {
  const statNumbers = document.querySelectorAll('.stat-number');

  statNumbers.forEach(stat => {
    const dataTarget = stat.getAttribute('data-target');
    // Extract only the numeric part (handles "4", "40%", "100%", etc.)
    const numericValue = parseInt(dataTarget.replace(/[^0-9]/g, ''));
    const suffix = dataTarget.replace(/[0-9]/g, ''); // Gets "%" or empty string

    // Skip animation if not a number
    if (isNaN(numericValue)) {
      return;
    }

    const duration = 2000;
    const increment = numericValue / (duration / 16);
    let current = 0;

    const updateStat = () => {
      current += increment;
      if (current < numericValue) {
        stat.textContent = Math.floor(current) + suffix;
        requestAnimationFrame(updateStat);
      } else {
        stat.textContent = numericValue + suffix;
      }
    };

    // Start animation when element is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateStat();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(stat);
  });
};

// Parallax effects on .screenshot elements
const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.screenshot');
  if (!parallaxElements.length) return;

  const handleParallax = () => {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + (index * 0.1);
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  };

  window.addEventListener('scroll', throttle(handleParallax, 16));
};

// Header scroll effect (toggles .scrolled -> header.navbar.scrolled in CSS)
const initHeaderEffects = () => {
  const header = document.querySelector('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  header.classList.remove('scrolled');
  window.addEventListener('scroll', throttle(handleScroll, 16));
  handleScroll();
};

// Navigation: DaisyUI dropdown close, active-link highlighting, smooth anchor scroll
const initNavigation = () => {
  // Close DaisyUI dropdown when a navigation item is clicked
  const dropdownItems = document.querySelectorAll('.dropdown-content li > a');
  const dropdownButton = document.querySelector('.dropdown > button');

  dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      if (dropdownButton) {
        dropdownButton.blur();
      }
    });
  });

  // Active page highlighting for DaisyUI navbar
  const currentPath = window.location.pathname.split('/').filter(p => p).join('/');
  const navLinks = document.querySelectorAll('.navbar a[href], .dropdown-content a[href], .menu a[href]');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.includes('http') && href !== '/') {
      const linkPath = href.split('/').filter(p => p).join('/');
      if (currentPath.includes(linkPath) || currentPath === linkPath) {
        link.classList.add('active');
      }
    }
  });

  // Smooth scroll for in-page anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
};

// Email spam protection - decode protected mailto links
const decodeEmails = () => {
  document.querySelectorAll('.pml').forEach(el => {
    const email = el.dataset.u + '@' + el.dataset.h;
    const a = document.createElement('a');
    a.href = 'mailto:' + email;
    a.textContent = email;
    a.className = 'link link-primary';
    el.replaceWith(a);
  });
};

// Initialize all effects when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initParallax();
  initHeaderEffects();
  initNavigation();
  animateStats();
  decodeEmails();
});
