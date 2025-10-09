/**
 * Hamburger Menu Functionality
 * Pure JavaScript implementation for mobile navigation
 */

(function() {
  'use strict';

  // Get DOM elements
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mainNav = document.getElementById('mainNav');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const body = document.body;

  // Check if all required elements exist
  if (!hamburgerBtn || !mainNav || !mobileMenuOverlay) {
    console.error('Required elements for hamburger menu not found');
    return;
  }

  /**
   * Toggle the mobile menu open/closed
   */
  function toggleMenu() {
    const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    
    // Toggle aria-expanded attribute
    hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle active classes
    hamburgerBtn.classList.toggle('active');
    mainNav.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    body.classList.toggle('menu-open');
  }

  /**
   * Close the mobile menu
   */
  function closeMenu() {
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.classList.remove('active');
    mainNav.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    body.classList.remove('menu-open');
  }

  /**
   * Handle navigation link clicks
   * Close menu and smooth scroll to section
   */
  function handleNavClick(e) {
    const href = e.target.getAttribute('href');
    
    // Only handle anchor links
    if (href && href.startsWith('#')) {
      e.preventDefault();
      
      // Close the menu
      closeMenu();
      
      // Smooth scroll to target section
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        // Small delay to allow menu close animation
        setTimeout(() => {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 300);
      }
    }
  }

  /**
   * Handle window resize
   * Close menu if resized above mobile breakpoint
   */
  function handleResize() {
    if (window.innerWidth > 480) {
      closeMenu();
    }
  }

  /**
   * Handle escape key press
   * Close menu when ESC is pressed
   */
  function handleKeyPress(e) {
    if (e.key === 'Escape' && hamburgerBtn.classList.contains('active')) {
      closeMenu();
    }
  }

  // Event Listeners
  
  // Hamburger button click
  hamburgerBtn.addEventListener('click', toggleMenu);
  
  // Overlay click (close menu)
  mobileMenuOverlay.addEventListener('click', closeMenu);
  
  // Navigation links click
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
  });
  
  // Window resize
  window.addEventListener('resize', handleResize);
  
  // Escape key press
  document.addEventListener('keydown', handleKeyPress);

  // Prevent body scroll when menu is open
  // This is handled via CSS with body.menu-open

  console.log('Hamburger menu initialized successfully');

})();

