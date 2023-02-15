const about = document.querySelector('.about')
const btns = document.querySelectorAll('.button-group button')
const contents = document.querySelectorAll('.content')

const ACTIVE_CLASSNAME = 'is-active'

about.addEventListener('click', function (e) {
  const id = e.target.dataset.id

  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove(ACTIVE_CLASSNAME)
    })
    e.target.classList.add(ACTIVE_CLASSNAME)

    contents.forEach((content) => {
      content.classList.remove(ACTIVE_CLASSNAME)
    })
    const showContent = document.getElementById(id)
    showContent.classList.add(ACTIVE_CLASSNAME)
  }
})
