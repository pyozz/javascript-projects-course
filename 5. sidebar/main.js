const menubuttonEl = document.querySelector('.menu-button')
const sideBar = document.querySelector('.sidebar')
const closeButtonEl = document.querySelector('.close-button')

menubuttonEl.addEventListener('click', function () {
  sideBar.classList.toggle('is-active')
})

closeButtonEl.addEventListener('click', function () {
  sideBar.classList.remove('is-active')
})
