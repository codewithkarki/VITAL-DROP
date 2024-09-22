// Select DOM Elements
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Toggle Navigation Function
const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
  overlay.classList.toggle("active");
  
  // Update ARIA attributes for accessibility
  const isExpanded = mobileNav.classList.contains("hamburger-active");
  mobileNav.setAttribute('aria-expanded', isExpanded);
  navbar.setAttribute('aria-hidden', !isExpanded);
};

// Event Listeners
mobileNav.addEventListener("click", toggleNav);
overlay.addEventListener("click", toggleNav);

// Allow toggling navigation with Enter key for accessibility
mobileNav.addEventListener("keypress", (e) => {
  if (e.key === 'Enter') {
    toggleNav();
  }
});