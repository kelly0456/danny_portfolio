// Shared mobile menu toggle script for all pages
(function() {
  const menuToggle = document.getElementById("menu-toggle-btn") || document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("header nav");

  if (!menuToggle || !navMenu) return;

  // Keep aria-expanded in sync for accessibility
  function setAriaExpanded(expanded) {
    try {
      menuToggle.setAttribute('aria-expanded', String(expanded));
    } catch (e) {
      // ignore
    }
  }

  menuToggle.addEventListener('click', function () {
    const isActive = menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    setAriaExpanded(isActive);
  });
})();
