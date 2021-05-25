const nav = document.querySelector('#navigation');
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menuicon');
const closedMenu = document.querySelector('.menu-closed');
const navList = document.querySelector('.nav-list');
const menuList = document.querySelector('.menu-list');

let isMenuOpen = false;

var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'), // Required
  path: 'https://assets1.lottiefiles.com/packages/lf20_47dwpmff.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: 'Hello World', // Name for future reference. Optional.
  initialSegment: [0, 90],
});

var animationScrollDown = bodymovin.loadAnimation({
  container: document.getElementById('scroll-down-animation'), // Required
  path: '../assets/lottie/scroll-down.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: 'Hello World', // Name for future reference. Optional.
});

animationScrollDown.setSpeed(0.8);

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
