console.log('file was loaded');

const nav = document.querySelector('#navigation');
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menuicon');
const closedMenu = document.querySelector('.menu-closed');
const navList = document.querySelector('.nav-list');
const menuList = document.querySelector('.menu-list');
let isMenuOpen = false;

// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', (e) => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;

  nav.classList.toggle('nav--open');
  closedMenu.classList.toggle('menu-open');
  menu.classList.toggle('show');
});

console.log(navList);

menuList.addEventListener('click', (e) => {
  nav.classList.toggle('nav--open');
  closedMenu.classList.toggle('menu-open');
  menu.classList.toggle('show');
});
