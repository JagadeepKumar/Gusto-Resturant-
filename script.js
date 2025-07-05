// Toggle Menu and Navbar
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

// Scroll Spy Navigation Highlight
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
  // Close menu on scroll
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  // Highlight active nav link
  sections.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove('active'));
      let activeLink = document.querySelector(`header .navbar a[href*="${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
};

// Toggle Search Box
let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('#search-form');
let closeSearch = document.querySelector('#close');

if (searchIcon) {
  searchIcon.onclick = () => {
    searchForm.classList.toggle('active');
  };
}

if (closeSearch) {
  closeSearch.onclick = () => {
    searchForm.classList.remove('active');
  };
}

// Swiper for Home Slider
new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

// Swiper for Review Slider
new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
