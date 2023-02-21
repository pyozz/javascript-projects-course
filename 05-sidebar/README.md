<img src="https://user-images.githubusercontent.com/92071025/211820637-01105684-76db-4931-9521-2cdcfd477b5c.gif" />

<hr />

.menu-button에는 toggle 기능을, .close-button에는 remove 기능을 넣어 사이드바가 본래 위치로 이동하도록 하였고 뿐만 아니라 배경화면을 클릭해도 사이드바가 닫히도록 구현하였다.

```javascript
window.addEventListener('click', function (e) {
  // .menu-button class를 갖는 요소를 찾는다.
  const target = e.target.closest('.menu-button')

  if (!target) {
    sideBar.classList.remove('is-active')
  }
})
```
