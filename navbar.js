let leftFirstPage = false;
const pageHeight = window.innerHeight;

window.onscroll = function () {
  assignActiveNavLink();
  fixHeader();
  if (window.pageYOffset >= pageHeight) {
    leftFirstPage = true;
  }
};

const navbar = document.getElementById('nav-header');

function fixHeader() {
  if (window.pageYOffset > pageHeight * 0.92) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
}

const pages = document.getElementsByClassName('page');
const navLinks = document.getElementsByClassName('nav-link');

function assignActiveNavLink() {
  if (window.pageYOffset >= pages[4].offsetTop - pageHeight / 2) {
    resetActive();
    navLinks[4].classList.add('active');
  } else if (window.pageYOffset >= pages[3].offsetTop - pageHeight / 2) {
    resetActive();
    navLinks[3].classList.add('active');
  } else if (window.pageYOffset >= pages[2].offsetTop - pageHeight / 2) {
    resetActive();
    navLinks[2].classList.add('active');
  } else if (window.pageYOffset >= pages[1].offsetTop - pageHeight / 2) {
    resetActive();
    navLinks[1].classList.add('active');
  } else {
    resetActive();
    navLinks[0].classList.add('active');
    if (window.pageYOffset <= pageHeight / 8 && leftFirstPage) {
      $('#header-container').transition('bounce');
      leftFirstPage = false;
    }
  }
}

function resetActive() {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('active');
  }
}
