import Swiper, { Pagination } from 'swiper'



// Show Menu

const navMenu  = document.getElementById('nav-menu'),
      navOpen  = document.getElementById('nav-open'),
      navClose = document.getElementById('nav-close')

navOpen.addEventListener('click', () => {
  navMenu.classList.add('nav__menu--show')
})

navClose.addEventListener('click', () => {
  navMenu.classList.remove('nav__menu--show')
})



// Remove Menu Mobile

const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => navMenu.classList.remove('nav__menu--show')
navLink.forEach(l => l.addEventListener('click', linkAction))



// Home Swiper

const homeSwiper = new Swiper('.home-swiper', {
  modules: [ Pagination ],
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})



// Change BG Header

const scrollHeader = () => {
  const header = document.getElementById('header')

  if(window.scrollY >= 50) {
    header.classList.add('header--scroll')
  } else {
    header.classList.remove('header--scroll')
  }
}

window.addEventListener('scroll', scrollHeader)