const menuButton = document.querySelector('.gnb .menu-button')
const gnbNav = document.querySelector('.gnb > .gnb-nav')

menuButton.addEventListener('click', function () {
  gnbNav.classList.toggle('is-open')
})
