let hamburger = document.querySelector('.hamburger')
let mobileMenu = document.querySelector('.mobile__menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  mobileMenu.classList.toggle('active')
})