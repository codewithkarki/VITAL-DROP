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

// JavaScript for Dynamic Date and Time
function updateDateTime() {
  const dateTimeElement = document.getElementById('date-time');
  const now = new Date();
  const options = {
      weekday: 'long', year: 'numeric', month: 'long',
      day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: true
  };
  dateTimeElement.textContent = now.toLocaleString('en-US', options);
}

window.onload = function () {
  updateDateTime();
  setInterval(updateDateTime, 1000);
};

// Hamburger Menu Toggle for Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navLinkItems.forEach(link => {
      link.classList.toggle('fade');
  });
});


// Show Emergency Blood Needed Popup and Date Time Update
window.onload = function () {
  updateDateTime();
  setInterval(updateDateTime, 1000);
  
  // Show emergency popup after a slight delay
  setTimeout(function() {
      showPopup();
  }, 500);
};

// Emergency Popup Function
function showPopup() {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
