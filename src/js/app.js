import Swiper, { Pagination } from 'swiper'
import ScrollReveal from 'scrollreveal'



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



// New Swiper

const newSwiper = new Swiper('.new-swiper', {
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: true,
})



// Scroll Section Active Link

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.scrollY

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight,
          sectionTop    = section.offsetTop - 50,
          sectionId     = section.getAttribute('id')

    const navLink = document.querySelector(`.nav__link[href*=${sectionId}]`)

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add('nav__link--active')
    } else {
      navLink.classList.remove('nav__link--active')
    }
  })
}

window.addEventListener('scroll', scrollActive)



// Show Scroll Up

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  
  if(window.scrollY >= 460) {
    scrollUp.classList.add('scrollup--show')
  } else {
    scrollUp.classList.remove('scrollup--show')
  }
}

window.addEventListener('scroll', scrollUp)



// Scroll Reveal Animation

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true,
})

sr.reveal('.home-swiper, .new-swiper, .newsletter__container')
sr.reveal('.category__data, .trick__content, .footer__content', { interval: 100 })
sr.reveal('.about__data, .discount__img', { origin: 'left' })
sr.reveal('.about__img, .discount__data', { origin: 'right' })