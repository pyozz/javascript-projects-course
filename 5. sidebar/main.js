const menubuttonEl = document.querySelector('.menu-button')
const sideBar = document.querySelector('.sidebar')
const closeButtonEl = document.querySelector('.close-button')

menubuttonEl.addEventListener('click', function () {
  sideBar.classList.toggle('is-active')
})

closeButtonEl.addEventListener('click', function () {
  sideBar.classList.remove('is-active')
})

window.addEventListener('click', function (e) {
  const target = e.target.closest('.menu-button')
  // console.log(e.target.clas.contains('.menu-button'))

  if (!target) {
    sideBar.classList.remove('is-active')
  }
})
