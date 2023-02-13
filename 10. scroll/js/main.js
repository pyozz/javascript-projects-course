const navButtons = document.querySelectorAll('.nav-item button')
navButtons.forEach((button) => {
  button.addEventListener('click', scrollToTabPanel)
})

function scrollToTabPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.getElementById(tabPanelId)
  const topAmount = tabPanel.getBoundingClientRect().top

  window.scrollBy({
    top: topAmount - 60,
    behavior: 'smooth',
  })
}
