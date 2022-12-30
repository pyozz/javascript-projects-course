const value = document.querySelector('.number')
const btns = document.querySelectorAll('.btn')

let number = 0

btns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const classes = e.currentTarget.classList

    if (classes.contains('increase')) number++
    else if (classes.contains('decrease')) number--
    else number = 0

    if (number > 0) value.style.color = 'green'
    else if (number < 0) value.style.color = 'red'
    else value.style.color = '#000'

    value.textContent = number
  })
})
