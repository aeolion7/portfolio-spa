window.onscroll = function () {
  fixHeader();
};

const navbar = document.getElementById('nav-header');
const offsetAmount = navbar.offsetTop;

function fixHeader() {
  if (window.pageYOffset > offsetAmount) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
}
