const button = document.querySelector('.modal-button')
const modal = document.querySelector('.modal')
button.addEventListener('click', function () {
  modal.showModal()
})

modal.addEventListener('close', function () {
  console.log(modal.returnValue)
})