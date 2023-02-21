const modalButtonEl = document.querySelector('.modal-button')
const modalContainerEl = document.querySelector('.modal-container')
const closeButtonEl = document.querySelector('.close-button')

modalButtonEl.addEventListener('click', function () {
  modalContainerEl.classList.add('is-active')
})

closeButtonEl.addEventListener('click', function () {
  modalContainerEl.classList.remove('is-active')
})
