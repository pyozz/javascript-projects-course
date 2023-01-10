const menubuttonEl = document.querySelector('.menu-button')
const sideBar = document.querySelector('.sidebar')

menubuttonEl.addEventListener('click', function () {
  sideBar.classList.toggle('is-active')
})
