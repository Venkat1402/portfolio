// Below function targets .menu-links and .hamburger-icon classes
// and adds and removes the class name .open when click event is detected

function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}
