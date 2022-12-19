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
