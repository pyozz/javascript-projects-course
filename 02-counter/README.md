<img src="https://user-images.githubusercontent.com/92071025/208341460-9b873a2c-8e68-4c8b-bc50-9e5d25632478.gif" />

<hr />

## Objectives

* 각 버튼을 눌렀을 때 숫자가 증감 또는 0으로 초기화시킨다.
* 양수, 음수, 0인지에 따라 숫자의 색상을 변경시킨다.

## Solution

&lt;main.js&gt;

증가 또는 감소 버튼을 클릭하면 수학적 계산에 의해 +-1이 진행되어야 하는데 number.textContent는 문자열 타입이므로 증감을 위해 parseInt로 정수로 만든다.

   즉, 버튼 클릭시마다 parseInt가 사용돼 계산이 이루어진다.

```javascript
let parsedNumber = parseInt(number.textContent)
number.textContent = parsedNumber - 1

let parsedNumber = parseInt(number.textContent)
number.textContent = parsedNumber + 1
```

<br />

증감에 따라 그 값이 0보다 크면 green, 0보다 작으면 red 색상을 적용했다.
   이때, 증감시 0이 되면 #222 색상을 적용했다.

```javascript
if (number.textContent < 0) number.style.color = 'red'
else if (number.textContent == 0) number.style.color = '#222'

if (number.textContent > 0) number.style.color = 'green'
else if (number.textContent == 0) number.style.color = '#222'
```

<hr />

## ♻️ Code Refactoring

기존에 <code>.number</code> 요소의 값을 <code>.textContent</code>로 가져와 숫자 타입으로 변환을 하는 작업을 매 버튼마다 부여 했는데
이로인해 <strong>불필요한 작업</strong>과 <strong>코드가 반복</strong>되는 문제점을 확인하였다.

이를 해결하기 위해 전역 변수 number를 생성하고 버튼에 따라 값을 증감한 뒤 <code>.number</code> 요소에 넣어주었다.

버튼을 선택할 때 <code>querySelectorAll</code> 메서드로 모든 버튼을 선택하고 클릭한 버튼의 <code>.classList</code>에 increase, decrease, reset을 포함하는지 확인하여 number를 증감 또는 초기화한다.

```javascript
const classes = e.currentTarget.classList

if (classes.contains('increase')) number++
else if (classes.contains('decrease')) number--
else number = 0
```

<br />

위 코드에서 결정된 number를 기반으로 <code>.number</code>의 color 색상 값을 변경하고 number를 할당하였다.

```javascript
if (number > 0) value.style.color = 'green'
else if (number < 0) value.style.color = 'red'
else value.style.color = '#000'

value.textContent = number
```