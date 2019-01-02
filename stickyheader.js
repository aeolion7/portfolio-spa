window.onscroll = function () {
  fixHeader();
};

const navbar = document.getElementById('nav-header');

function fixHeader() {
  if (window.pageYOffset > (window.innerHeight * 0.92)) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
}
