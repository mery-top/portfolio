// Motion script for interactive behaviors, animations and clock.

document.addEventListener('DOMContentLoaded', () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js');

  // 1. Hero Notebook Cover Open
  const notebookWrapper = document.querySelector('[data-hero-notebook]');
  if (notebookWrapper) {
    if (prefersReducedMotion) {
      notebookWrapper.classList.add('is-open');
    } else {
      setTimeout(() => {
        notebookWrapper.classList.add('is-open');
      }, 300);
    }
  }

  // 2. Live Local Clock (IST / Asia/Kolkata)
  const clockEl = document.getElementById('hero-clock');
  if (clockEl) {
    function updateClock() {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const timeStr = new Intl.DateTimeFormat('en-US', options).format(now);
      clockEl.textContent = `${timeStr} IST`;
    }
    updateClock();
    setInterval(updateClock, 1000);
  }

  // 3. Navigation Fade-in & Scroll detection
  const nav = document.querySelector('[data-nav]');
  const burger = document.querySelector('[data-burger]');
  const sheet = document.querySelector('[data-sheet]');

  if (nav) {
    setTimeout(() => nav.classList.add('is-ready'), 600);

    let lastY = window.scrollY;
    window.addEventListener('scroll', () => {
      const currentY = window.scrollY;
      if (currentY > 100) {
        nav.classList.add('is-scrolled');
      } else {
        nav.classList.remove('is-scrolled');
      }

      if (currentY > 400 && currentY > lastY + 10) {
        nav.classList.add('is-hidden');
      } else if (currentY < lastY - 5) {
        nav.classList.remove('is-hidden');
      }
      lastY = currentY;
    }, { passive: true });
  }

  if (burger && sheet) {
    burger.addEventListener('click', () => {
      const isExpanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', !isExpanded);
      if (isExpanded) {
        sheet.hidden = true;
      } else {
        sheet.hidden = false;
      }
    });

    const sheetLinks = sheet.querySelectorAll('[data-sheet-link]');
    sheetLinks.forEach((link) => {
      link.addEventListener('click', () => {
        burger.setAttribute('aria-expanded', 'false');
        sheet.hidden = true;
      });
    });
  }

  // 4. Parallax side rails & floating doodles
  if (!prefersReducedMotion) {
    const railTracks = document.querySelectorAll('[data-rail]');
    const driftItems = document.querySelectorAll('[data-drift]');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      railTracks.forEach((track) => {
        const factor = parseFloat(track.dataset.rail) || 0.3;
        track.style.transform = `translateY(${-scrollY * factor}px)`;
      });

      driftItems.forEach((item) => {
        const factor = parseFloat(item.dataset.drift) || 0.05;
        item.style.transform = `translateY(${scrollY * factor}px)`;
      });
    }, { passive: true });
  }

  // 5. Scroll Reveals (Intersection Observer)
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (revealElements.length > 0) {
    if (prefersReducedMotion) {
      revealElements.forEach((el) => el.classList.add('is-in'));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in');
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
      );

      revealElements.forEach((el) => observer.observe(el));
    }
  }

  // 6. Custom Cursor
  if (window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion) {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
    document.body.classList.add('has-cursor');

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.25;
      cursorY += (mouseY - cursorY) * 0.25;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const interactiveSelectors = 'a, button, input, [role="button"], .book-spine, .sticker, .tile';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        cursor.classList.add('is-link');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        cursor.classList.remove('is-link');
      }
    });
  }
});
