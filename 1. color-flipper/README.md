<p align="center">
  <img src="https://user-images.githubusercontent.com/92071025/206159230-26ec7862-bcdc-4ee9-8624-06f837c66fb9.gif" />
</p>

<br />
<hr />
<br />

## Point

<br />

&lsaquo;app.js&rsaquo;

<br />

1. colors 배열 내의 요소들은 완성된 색상 코드를 의미한다.

```javascript
const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025']
```

<br />

2. 이 배열 내 요소 중 하나를 랜덤하게 선택한다.

```javascript
function getRandomNumber() {
  // 0에서 최대 colors 배열 길이까지만 반환하게 한다.
  return Math.floor(Math.random() * colors.length)
}
```

<br />

3. 선택된 요소를 body의 배경색과 색상 코드표를 나타내는 span.color 태그에 부여한다.

```javascript
document.body.style.backgroundColor = colors[randomNumber]
color.textContent = colors[randomNumber]
```

<br />

&lsaquo;hex.js&rsaquo;

<br />

1. hex 배열 내의 요소들이 완전한 색상 코드를 이룰 수 있는 값들로 구성되어있다.

```javascript
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
```

<br />

2. 따라서, 요소들 중 랜덤하게 6개의 요소를 꺼내 색상 코드를 완성시킨다.

```javascript
let hexColor = '#'

for (let i = 0; i < 6; i++) {
  // 반복문 안에서 호출하여 반복될 때마다 난수를 생성하게 한다.
  hexColor += hex[getRandomNumber()]
}
```
