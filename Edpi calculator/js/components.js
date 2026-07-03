/* 
  eDPI Calculator - Reusable Shell Components
  Dynamically loads Header, Footer, and Handles Theme + Mobile Drawer
*/

document.addEventListener('DOMContentLoaded', () => {
  // Load Header and Footer placeholders
  initLayout();
});

function initLayout() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = `
      <header>
        <div class="container header-container">
          <a href="index.html" class="logo" id="logo-btn">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none"></circle>
              <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
              <path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
            eDPI <span>Calculator</span>
          </a>
          <ul class="nav-menu" id="nav-menu">
            <li><a href="index.html" class="nav-link" data-page="index">Home</a></li>
            <li><a href="index.html#calculator" class="nav-link" data-page="calculator">eDPI Calculator</a></li>
            <li><a href="crosshair.html" class="nav-link" data-page="crosshair">Crosshairs</a></li>
            <li><a href="about.html" class="nav-link" data-page="about">About Us</a></li>
            <li><a href="contact.html" class="nav-link" data-page="contact">Contact Us</a></li>
            <li><a href="privacy.html" class="nav-link" data-page="privacy">Privacy Policy</a></li>
            <li><a href="disclaimer.html" class="nav-link" data-page="disclaimer">Disclaimer</a></li>
          </ul>
          <div class="nav-actions">
            <button class="theme-toggle-btn" id="theme-toggle" aria-label="Toggle Theme" title="Toggle Light/Dark Theme">
              <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
              </svg>
              <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </button>
            <button class="hamburger" id="hamburger-menu" aria-label="Toggle Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    `;
  }

  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-grid">
            <div class="footer-about">
              <a href="index.html" class="footer-logo">eDPI <span>Calculator</span></a>
              <p>Standardize your Valorant settings and mouse configurations. Fine-tune your in-game sensitivity and mouse DPI to achieve pixel-perfect mechanical consistency.</p>
            </div>
            <div class="footer-links-group">
              <h4>Quick Links</h4>
              <ul class="footer-links">
                <li><a href="index.html">Valorant Calculator</a></li>
                <li><a href="crosshair.html">Crosshairs Gallery</a></li>
                <li><a href="about.html">About eDPI Calculator</a></li>
                <li><a href="contact.html">Send Feedback / Contact</a></li>
              </ul>
            </div>
            <div class="footer-links-group">
              <h4>Legal Links</h4>
              <ul class="footer-links">
                <li><a href="privacy.html">Privacy Policy</a></li>
                <li><a href="disclaimer.html">Terms & Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2026 eDPI Calculator. Built for competitive FPS performance. All rights reserved.</p>
            <div class="social-links">
              <a href="https://www.instagram.com/ofc_harshit7/" class="social-link" aria-label="Instagram" rel="noopener" target="_blank">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://discord.gg/ZPS56wesDH" class="social-link" aria-label="Discord" rel="noopener" target="_blank">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  // Setup Dynamic Highlighting
  highlightActiveLink();

  // Setup Theme Controls
  setupThemeToggle();

  // Setup Mobile hamburger menu controls
  setupMobileNav();

  // Setup FAQ Accordions
  setupFaqAccordion();
}

function highlightActiveLink() {
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;
  let pageName = 'index'; // Default fallback

  if (currentPath.includes('about.html')) {
    pageName = 'about';
  } else if (currentPath.includes('contact.html')) {
    pageName = 'contact';
  } else if (currentPath.includes('privacy.html')) {
    pageName = 'privacy';
  } else if (currentPath.includes('disclaimer.html')) {
    pageName = 'disclaimer';
  } else if (currentPath.includes('crosshair.html')) {
    pageName = 'crosshair';
  } else if (currentHash.includes('#calculator')) {
    pageName = 'calculator';
  } else if (currentPath.includes('index.html')) {
    pageName = 'index';
  } else {
    pageName = 'index';
  }

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('data-page') === pageName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Bind hash change listener to update header highlights in real time
window.addEventListener('hashchange', highlightActiveLink);

function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  // Check saved theme or preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    // Save selection
    if (document.body.classList.contains('light-theme')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });
}

function setupMobileNav() {
  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-menu');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  // Close when clicking a nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });

  // Close when clicking anywhere outside of the menu
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
    }
  });
}

function setupFaqAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close other FAQs for clean single-expand behavior
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}
