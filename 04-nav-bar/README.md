<img src="https://user-images.githubusercontent.com/92071025/210256198-99deada0-e708-4240-b106-8fdb9fed52b2.gif" />

<hr />

## Objectives

- 메뉴 버튼 클릭시 하단으로 메뉴 리스트가 나타난다.
- 디바이스 크기에 따라 나타나는 요소가 달라진다.

<br />

## Solution

메뉴 버튼 클릭시 추가 클래스를 부여해 높이값에 변화를 주었다.

```javascript
menuButton.addEventListener('click', function () {
  gnbNav.classList.toggle('is-open')
})
```

<br />

반응형으로 구현하였으며 display 속성을 이용하여 mobile/tablet+ version에 맞게 보여지는 요소와 사라지는 요소가 있다.
