console.log('file was loaded');

const nav = document.querySelector('#navigation');
const body = document.querySelector('.body');
const navTop = navigation.offsetTop;

const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menuicon');
const closedMenu = document.querySelector('.menu-closed');
const navList = document.querySelector('.nav-list');
let isMenuOpen = false;

function stickyNavigation() {
  console.log('navTop = ' + navTop);
  console.log('scrollY = ' + window.scrollY);

  if (window.scrollY >= navTop) {
    document.getElementById('navigation').classList.add('sticky');
  } else {
    document.getElementById('navigation').classList.remove('sticky');
  }
}

window.addEventListener('scroll', stickyNavigation);

// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', (e) => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;

  // toggle a11y attributes and active class
  nav.classList.toggle('nav--open');
  closedMenu.classList.toggle('menu-open');
  menu.classList.toggle('show');
});
