window.onscroll = function () {
  setSticky();
};

const navbar = document.getElementById('nav-header');
const offsetAmount = navbar.offsetTop;

function setSticky() {
  if (window.pageYOffset > offsetAmount) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
