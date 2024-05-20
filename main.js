import './style.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  parallax: true,
  speed: 1000,
  keyboard: {
    enabled: true
  },

  // If we need pagination
  pagination: {
    el: '.slider-controls__count',
    type: "fraction"
  },

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const overlay = document.querySelector('.mobile-overlay');
const mobileNav = document.querySelector('.mobile-nav--content');

function toggleMobileNav() {
  overlay.classList.toggle('mobile-overlay--open');
  mobileNav.classList.toggle('mobile-nav--content--open');
}

document.querySelector('.nav-btn').addEventListener('click', () => {
  toggleMobileNav()
});

document.querySelector('.nav-btn--content').addEventListener('click', () => {
  toggleMobileNav()
});

overlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('mobile-overlay')) {
    toggleMobileNav()
  }
});