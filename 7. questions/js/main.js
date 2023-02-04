const questions = document.querySelectorAll('.question-card')
questions.forEach((question) => {
  const btn = question.querySelector('button')
  btn.addEventListener('click', function () {
    questions.forEach((item) => {
      if (item !== question) item.classList.remove('show-text')
    })

    question.classList.toggle('show-text')
  })
})
