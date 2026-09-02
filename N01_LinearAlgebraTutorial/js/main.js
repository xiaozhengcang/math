/* ==========================================================================
   Linear Algebra Interactive Learning Platform - Main JavaScript
   LA2022Fall (Prof. Hung-yi Lee)
   ========================================================================== */

// MathJax Configuration (only set if MathJax is not yet initialized)
if (!window.MathJax || !window.MathJax.version) {
  window.MathJax = window.MathJax || {};
  window.MathJax.tex = window.MathJax.tex || {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true
  };
  window.MathJax.options = window.MathJax.options || {
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process'
  };
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  highlightActiveNav();
  initSidebarScroll();
  setupSmoothScroll();
});

// Sidebar Scroll Persistence
function initSidebarScroll() {
  const sidebarNav = document.querySelector('.sidebar-nav');
  if (!sidebarNav) return;

  // Restore saved scroll position if available
  const restoreScroll = () => {
    const savedScrollTop = sessionStorage.getItem('sidebar_scroll_top');
    if (savedScrollTop !== null) {
      sidebarNav.scrollTop = parseInt(savedScrollTop, 10);
    } else {
      // If no saved position, ensure the active item is visible
      const activeItem = sidebarNav.querySelector('.nav-item.active');
      if (activeItem) {
        activeItem.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
    }
  };

  // Run restore immediately and on animation frame to prevent browser reset
  restoreScroll();
  requestAnimationFrame(restoreScroll);

  // Save position on scroll
  sidebarNav.addEventListener('scroll', () => {
    sessionStorage.setItem('sidebar_scroll_top', sidebarNav.scrollTop);
  }, { passive: true });

  // Save position immediately when clicking any navigation link inside sidebar
  sidebarNav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      sessionStorage.setItem('sidebar_scroll_top', sidebarNav.scrollTop);
    }
  });

  // When clicking footer nav or breadcrumb links, clear saved position so sidebar auto-scrolls to the new chapter
  document.querySelectorAll('.module-nav-footer a, .header-breadcrumb a').forEach(link => {
    link.addEventListener('click', () => {
      sessionStorage.removeItem('sidebar_scroll_top');
    });
  });

  window.addEventListener('beforeunload', () => {
    if (sidebarNav) {
      sessionStorage.setItem('sidebar_scroll_top', sidebarNav.scrollTop);
    }
  });
}

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('la_tutorial_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButtonText(savedTheme);

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('la_tutorial_theme', newTheme);
      updateThemeButtonText(newTheme);
      
      // Notify visualizers if any
      window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
    });
  }
}

function updateThemeButtonText(theme) {
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === 'light' 
      ? '🌙 切换暗色模式' 
      : '☀️ 切换亮色模式';
  }
}

// Highlight Active Navigation Link
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Smooth Scrolling for Anchors
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Global utility for re-triggering MathJax if content is dynamically loaded
function renderMath() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}
