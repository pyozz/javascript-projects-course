const slides = document.querySelectorAll('.slide')
const prevBtn = document.querySelector('.btn-prev')
const nextBtn = document.querySelector('.btn-next')

// 슬라이드 배치
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`
})

let count = 0

// Events
prevBtn.addEventListener('click', function () {
  count--
  move()
})

nextBtn.addEventListener('click', function () {
  count++
  move()
})

function move() {
  // if (count === slides.length) count = 0
  // else if (count < 0) count = slides.length - 1

  if (count < slides.length -1) nextBtn.style.display = 'block'
  else nextBtn.style.display = 'none'

  if (count > 0) prevBtn.style.display = 'block'
  else prevBtn.style.display = 'none'


  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`
  })
}

prevBtn.style.display = 'none'