/**
 * Shared site shell renderer for static pages.
 * Injects the navigation, footer, skip link, and back-to-top button.
 */

(function() {
  const NAV_ITEMS = [
    { key: 'home', href: '/', label: 'Home' },
    { key: 'publications', href: '/publications/', label: 'Publications' },
    { key: 'talks', href: '/talks/', label: 'Talks' },
    { key: 'slides', href: '/slides/', label: 'Slides' },
    { key: 'projects', href: '/portfolio/', label: 'Projects' },
    { key: 'blogs', href: '/year-archive/', label: 'Blog Posts' },
    { key: 'cv', href: '/cv/', label: 'CV' }
  ];

  const FOOTER_SOCIALS = [
    {
      href: 'https://github.com/ybwowen',
      label: 'GitHub'
    },
    {
      href: 'https://scholar.google.com/citations?user=ysyhqk4AAAAJ&hl=en',
      label: 'Google Scholar'
    }
  ];

  function whenReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
      return;
    }
    fn();
  }

  function toRootHref(href) { return href; }

  function getCurrentPage() { return document.body.dataset.page || ''; }

  function getFooterCopy() {
    const bodyCopy = document.body.dataset.footerCopy;
    if (bodyCopy) {
      return bodyCopy;
    }


    return '© 2026 <a href="/">Bowen Yang</a>';
  }

  function getFooterClassName() {
    const footerSize = document.body.dataset.footerWidth;
    if (footerSize === 'wide') {
      return 'page-shell-footer page-shell-footer-wide';
    }
    return 'page-shell-footer';
  }

  function buildNav() {
    const currentPage = getCurrentPage();
    const hasMainContent = Boolean(document.getElementById('main-content'));
    const navLinks = NAV_ITEMS.map((item) => {
      const ariaCurrent = item.key === currentPage ? ' aria-current="page"' : '';
      return `<a href="${toRootHref(item.href)}" class="nav-button"${ariaCurrent}>${item.label}</a>`;
    }).join('');

    return `${hasMainContent ? '<a href="#main-content" class="skip-link">Skip to main content</a>' : ''}
  <header class="site-header">
    <a class="site-name" href="/">Bowen Yang</a>
    <nav class="nav-buttons" role="navigation" aria-label="Main navigation">
      ${navLinks}
      <button id="theme-toggle" class="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark/light mode"></button>
    </nav>
  </header>`;
  }

  function buildFooter() {
    const socialLinks = FOOTER_SOCIALS.map((item) =>
      `<a href="${item.href}" target="_blank" rel="noopener">${item.label}</a>`).join(' · ');

    return `
  <footer class="site-footer">
    <div class="${getFooterClassName()}">
      <p class="footer-copyright">${getFooterCopy()} · <a href="https://github.com/Arvid-pku/Academic-Homepage-Template">Arvid template</a></p>
      <p class="footer-social">${socialLinks}</p>
    </div>
  </footer>
  <button id="back-to-top" class="back-to-top" aria-label="Back to top">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
  </button>`;
  }

  function injectSiteShell() {
    const navMount = document.getElementById('site-nav');
    if (navMount) {
      navMount.innerHTML = buildNav();
    }

    const footerMount = document.getElementById('site-footer');
    if (footerMount) {
      footerMount.innerHTML = buildFooter();
    }
  }

  whenReady(injectSiteShell);
})();
