const number = document.querySelector('.number')
const decrease = document.querySelector('.btn.decrease')
const reset = document.querySelector('.btn.reset')
const increase = document.querySelector('.btn.increase')

decrease.addEventListener('click', function () {
  let parsedNumber = parseInt(number.textContent)
  number.textContent = parsedNumber - 1
  if (number.textContent < 0) number.style.color = 'red'
  else if (number.textContent == 0) number.style.color = '#222'
})

reset.addEventListener('click', function () {
  number.textContent = 0
  number.style.color = '#222'
})

increase.addEventListener('click', function () {
  let parsedNumber = parseInt(number.textContent)
  number.textContent = parsedNumber + 1
  if (number.textContent > 0) number.style.color = 'green'
  else if (number.textContent == 0) number.style.color = '#222'
})
