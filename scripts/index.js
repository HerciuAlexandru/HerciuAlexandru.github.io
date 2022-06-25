const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const brandTitle = document.getElementsByClassName('brand-tile-doi');


toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

