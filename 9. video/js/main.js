const video = document.querySelector('.video-container video')
const switchBtn = document.querySelector('.btn-switch')

switchBtn.addEventListener('click', function () {
  if (!switchBtn.classList.contains('slide')) {
    switchBtn.classList.add('slide')
    video.pause()
  } else {
    switchBtn.classList.remove('slide')
    video.play()
  }
})
