// NavBar client behavior: hamburger & language switch
// Runs in browser as plain JS to avoid TS/ASTRO inline checks
(function () {
  function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinksMobile = document.querySelectorAll('.nav-link-mobile');

    if (!hamburger) return;

    hamburger.addEventListener('click', () => {
      mobileMenu?.classList.toggle('hidden');
    });

    navLinksMobile.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu?.classList.add('hidden');
      });
    });
  }

  function isEnglishPath(path) {
    return String(path || '').startsWith('/en');
  }

  function buildHref(baseHref, toEnglish) {
    baseHref = String(baseHref || '');
    if (!baseHref) return baseHref;
    if (toEnglish) {
      return baseHref === '/' ? '/en' : '/en' + baseHref;
    } else {
      if (baseHref.startsWith('/en')) return baseHref.replace(/^\/en/, '') || '/';
      return baseHref;
    }
  }

  function applyLanguage(toEnglish) {
    const navLinks = document.querySelectorAll('.nav-link');
    const navLinksMobile = document.querySelectorAll('.nav-link-mobile');
    const langToggle = document.getElementById('lang-toggle');
    const langToggleMobile = document.getElementById('lang-toggle-mobile');

    // label mapping: baseHref -> [spanish, english]
    const labels = {
      '/': ['Inicio', 'Home'],
      '/about': ['Acerca', 'About'],
      '/project': ['Proyectos', 'Projects'],
      '/contact': ['Contacto', 'Contact']
    };

    navLinks.forEach(a => {
      const base = a.getAttribute('data-base-href') || a.getAttribute('href');
      a.setAttribute('href', buildHref(base, toEnglish));
      const labelPair = labels[base] || [a.textContent, a.textContent];
      a.textContent = toEnglish ? labelPair[1] : labelPair[0];
    });
    navLinksMobile.forEach(a => {
      const base = a.getAttribute('data-base-href') || a.getAttribute('href');
      a.setAttribute('href', buildHref(base, toEnglish));
      const labelPair = labels[base] || [a.textContent, a.textContent];
      a.textContent = toEnglish ? labelPair[1] : labelPair[0];
    });
    if (langToggle) langToggle.textContent = toEnglish ? 'ES' : 'EN';
    if (langToggleMobile) langToggleMobile.textContent = toEnglish ? 'ES' : 'EN';
  }

  function initLanguageSwitch() {
    const langToggle = document.getElementById('lang-toggle');
    const langToggleMobile = document.getElementById('lang-toggle-mobile');

    const currentPath = location.pathname;
    const isEn = isEnglishPath(currentPath);
    applyLanguage(isEn);

    function toggleLanguage() {
      const path = location.pathname;
      if (isEnglishPath(path)) {
        const newPath = path.replace(/^\/en/, '') || '/';
        location.pathname = newPath;
      } else {
        const newPath = path === '/' ? '/en' : '/en' + path;
        location.pathname = newPath;
      }
    }

    langToggle?.addEventListener('click', toggleLanguage);
    langToggleMobile?.addEventListener('click', toggleLanguage);
  }

  function initAll() {
    initHamburger();
    try { initLanguageSwitch(); } catch (e) { /* ignore */ }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  // listen for Astro navigation events too
  document.addEventListener('astro:page-load', () => {
    initAll();
  });
})();
