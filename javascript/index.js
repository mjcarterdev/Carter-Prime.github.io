const nav = document.querySelector('#navigation');
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menuicon');
const closedMenu = document.querySelector('.menu-closed');
const navList = document.querySelector('.nav-list');
const menuList = document.querySelector('.menu-list');

let isMenuOpen = false;

var animation = lottie.loadAnimation({
  container: document.getElementById('lottie'), // Required
  path: '../assets/lottie/developer-at-work-animation.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: 'Hello World', // Name for future reference. Optional.
});

animation.play();

var animationScrollDown = lottie.loadAnimation({
  container: document.getElementById('scroll-down-animation'), // Required
  path: '../assets/lottie/scroll-down.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: 'Hello World', // Name for future reference. Optional.
});

animationScrollDown.play();

// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', (e) => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;

  nav.classList.toggle('nav--open');
  closedMenu.classList.toggle('menu-open');
  menu.classList.toggle('show');
});

menuList.addEventListener('click', (e) => {
  nav.classList.toggle('nav--open');
  closedMenu.classList.toggle('menu-open');
  menu.classList.toggle('show');
});
