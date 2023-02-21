<img src="https://user-images.githubusercontent.com/92071025/208341460-9b873a2c-8e68-4c8b-bc50-9e5d25632478.gif" />

<br />
<hr />
<br />

&lt;main.js&gt;

1. 증가 또는 감소 버튼을 클릭하면 수학적 계산에 의해 +-1이 진행되어야 하는데 number.textContent는 문자열 타입이므로 증감을 위해 parseInt로 정수로 만든다.

   즉, 버튼 클릭시마다 parseInt가 사용돼 계산이 이루어진다.

```javascript
let parsedNumber = parseInt(number.textContent)
number.textContent = parsedNumber - 1

let parsedNumber = parseInt(number.textContent)
number.textContent = parsedNumber + 1
```

<br />

2. 증감에 따라 그 값이 0보다 크면 green, 0보다 작으면 red 색상을 적용했다.
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

<code>e.currentTarget</code>은 이벤트가 발생한 해당 요소 그 자체를 반환하므로 <code>querySelectorAll</code> 메서드를 사용했더라도 어떤 요소에 이벤트가 발생했는지 특정할 수 있었다.
