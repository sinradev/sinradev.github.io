// Modern JavaScript for Sinra Website

// Utility functions
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

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

// Animate statistics
const animateStats = () => {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateStat = () => {
      current += increment;
      if (current < target) {
        stat.textContent = Math.floor(current);
        requestAnimationFrame(updateStat);
      } else {
        stat.textContent = target;
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

// Create floating particles
const createParticles = () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  
  const particlesContainer = document.querySelector('.hero-particles');
  if (!particlesContainer) return;
  
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: ${['var(--neon-pink)', 'var(--neon-blue)', 'var(--neon-green)'][Math.floor(Math.random() * 3)]};
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: particleFloat ${Math.random() * 8 + 4}s linear infinite;
      animation-delay: ${Math.random() * 4}s;
      opacity: 0;
    `;
    particlesContainer.appendChild(particle);
  }
};

// Scroll progress indicator
const createScrollIndicator = () => {
  const indicator = document.createElement('div');
  indicator.className = 'scroll-indicator';
  document.body.appendChild(indicator);

  const updateScrollProgress = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    indicator.style.setProperty('--scroll-width', `${scrollPercent}%`);
  };

  window.addEventListener('scroll', throttle(updateScrollProgress, 16));
};

// Parallax effects
const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.screenshot');
  
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

// Smooth reveal animations
const initScrollReveal = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        
        // Add staggered animation for child elements
        const children = entry.target.querySelectorAll('.feature, .screenshot');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('revealed');
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe elements
  document.querySelectorAll('.index-section, .feature, .screenshot, .testimonial-section').forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });
};

// Enhanced header effects - GitHub style
const initHeaderEffects = () => {
  const header = document.querySelector('header');
  
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    
    // Add scrolled class when scrolling down
    if (scrollTop > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Ensure header starts transparent
  header.classList.remove('scrolled');
  
  // Add scroll listener
  window.addEventListener('scroll', throttle(handleScroll, 16));
  
  // Initial check
  handleScroll();
};

// Enhanced button interactions
const initButtonEffects = () => {
  const buttons = document.querySelectorAll('.button a, input[type="submit"]');

  buttons.forEach(button => {
    // Ripple effect
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });

    // Loading state
    button.addEventListener('click', function() {
      if (!this.classList.contains('loading')) {
        this.classList.add('loading');
        setTimeout(() => {
          this.classList.remove('loading');
        }, 2000);
      }
    });
  });
};

// Enhanced navigation
const initNavigation = () => {
  const navToggle = document.getElementById('open-nav');
  const nav = document.querySelector('nav');
  const body = document.body;

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', 
        body.classList.contains('nav-open').toString());
    });
  }

  // Close mobile nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
      body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Close mobile nav
        body.classList.remove('nav-open');
      }
    });
  });
};

// Enhanced form interactions
const initFormEffects = () => {
  const inputs = document.querySelectorAll('input, textarea, select');

  inputs.forEach(input => {
    // Floating label effect
    if (input.value) {
      input.classList.add('has-value');
    }

    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
      if (this.value) {
        this.classList.add('has-value');
      } else {
        this.classList.remove('has-value');
      }
    });

    input.addEventListener('input', function() {
      if (this.value) {
        this.classList.add('has-value');
      } else {
        this.classList.remove('has-value');
      }
    });
  });
};

// Enhanced image loading
const initImageEffects = () => {
  const images = document.querySelectorAll('img');

  images.forEach(img => {
    // Lazy loading
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      if (img.dataset.src) {
        imageObserver.observe(img);
      }
    }

    // Loading animation
    img.addEventListener('load', function() {
      this.classList.add('loaded');
    });
  });
};

// Enhanced cursor effects
const initCursorEffects = () => {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  const cursorFollower = document.createElement('div');
  cursorFollower.className = 'cursor-follower';
  document.body.appendChild(cursorFollower);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let followerX = 0;
  let followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animate cursor
  const animateCursor = () => {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    followerX += (mouseX - followerX) * 0.05;
    followerY += (mouseY - followerY) * 0.05;

    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;

    requestAnimationFrame(animateCursor);
  };

  animateCursor();

  // Hover effects
  const hoverElements = document.querySelectorAll('a, button, .feature, .screenshot');
  
  hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      cursorFollower.classList.add('hover');
    });

    element.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursorFollower.classList.remove('hover');
    });
  });
};

// Create floating elements animation
const initFloatingElements = () => {
  const floatingIcons = document.querySelectorAll('.floating-icon');
  
  floatingIcons.forEach((icon, index) => {
    // Add random movement
    setInterval(() => {
      const x = Math.random() * 20 - 10;
      const y = Math.random() * 20 - 10;
      icon.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg)`;
    }, 3000 + index * 500);
  });
};

// Performance monitoring
const initPerformanceMonitoring = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
      }, 0);
    });
  }
};

// Initialize all effects when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  createScrollIndicator();
  initParallax();
  initScrollReveal();
  initHeaderEffects();
  initButtonEffects();
  initNavigation();
  initFormEffects();
  initImageEffects();
  animateStats();
  createParticles();
  initFloatingElements();
  initPerformanceMonitoring();
  
  // Initialize cursor effects only on desktop
  if (window.innerWidth > 768) {
    initCursorEffects();
  }
});

// Handle window resize
window.addEventListener('resize', debounce(() => {
  // Reinitialize effects that depend on viewport size
  if (window.innerWidth > 768) {
    initCursorEffects();
  }
}, 250));

// Export for potential external use
window.SinraWebsite = {
  initScrollReveal,
  initParallax,
  initHeaderEffects,
  initButtonEffects,
  initNavigation,
  initFormEffects,
  initImageEffects,
  initCursorEffects,
  animateStats,
  createParticles,
  initFloatingElements
};
