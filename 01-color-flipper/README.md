<p align="center">
  <img src="https://user-images.githubusercontent.com/92071025/206159230-26ec7862-bcdc-4ee9-8624-06f837c66fb9.gif" />
</p>

<hr />

## Objectives

* index.html
  * 완성된 색상 코드를 갖는 배열에서 하나를 선택하여 배경색과 텍스트로 나타낸다.
* hex.html
  * 색상 코드들로 이루어진 요소들을 이용해 완성된 색상 코드로 조합하여 배경색과 텍스트로 나타낸다.

## Solution


&lsaquo;app.js&rsaquo;

<br />

colors 배열 내의 요소들은 완성된 색상 코드를 의미한다.

```javascript
const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025']
```

<br />

이 배열 내 요소 중 하나를 랜덤하게 선택한다.

```javascript
function getRandomNumber() {
  // 0에서 최대 colors 배열 길이까지만 반환하게 한다.
  return Math.floor(Math.random() * colors.length)
}
```

<br />

선택된 요소를 body의 배경색과 색상 코드표를 나타내는 span.color 태그에 부여한다.

```javascript
document.body.style.backgroundColor = colors[randomNumber]
color.textContent = colors[randomNumber]
```

<br />

&lsaquo;hex.js&rsaquo;

<br />

hex 배열 내의 요소들이 완전한 색상 코드를 이룰 수 있는 값들로 구성되어있다.

```javascript
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
```

<br />

요소들 중 랜덤하게 6개의 요소를 꺼내 색상 코드를 완성시킨다. <br />

```javascript
let hexColor = '#'

for (let i = 0; i < 6; i++) {
  // 반복문 안에서 호출하여 반복될 때마다 난수를 생성하게 한다.
  hexColor += hex[getRandomNumber()]
}
```

<br />

랜덤 요소들을 선택할 때 미리 랜덤한 값을 갖는 변수를 만들고 이 변수를 인덱스로 활용하면 고정된 값으로 반복되기 때문에 주의할 필요가 있다. 

```javascript
const random = Math.floor(Math.random() * hex.length)

for (let i = 0; i < 6; i++) {
  hexCode += hex[random]
}
```

<img src="https://user-images.githubusercontent.com/92071025/220825954-e77df643-d864-4914-99f8-bfe7238ef377.png">

<br />

따라서, <strong>반복때마다 랜덤한 숫자가 만들어지도록 함수를 그때그때 실행</strong>시켜주는게 좋다.


```javascript
for (let i = 0; i < 6; i++) {
  hexColor += hex[getRandomNumber()]
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length)
}
```