<img src="https://user-images.githubusercontent.com/92071025/219647757-0eb3272c-5576-494a-8953-ada24a4a298f.gif" />

<hr />

## Objectives

- 0보다 작거나 더미 텍스트 배열의 길이보다 큰 값을 입력하면 랜덤한 문장 하나를 보여준다.
- 올바른 값을 입력했을 경우 입력한 개수에 맞게 문장을 보여준다.

<br />

## Solution

잘못된 값을 입력하면 랜덤한 문장 하나를 보여준다.

```javascript
// 음수, 텍스트 배열의 길이보다 큰 값, 숫자가 아닌 경우
if (value < 0 || value > text.length || isNaN(value)) {
  result.innerHTML = /* html */ `
    <p>${text[random]}</p>
  `
}
```

<br />

올바른 값을 입력하면 <code>.slice</code> 메서드를 사용해 더미 텍스트 배열의 첫 번째 요소부터 입력한 값의 인덱스 전까지 배열을 복사하고 각 요소들을 p태그로 감싸 화면에 보여준다.

<br />

- slice <br />
  slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환한다. 이때, 원본 배열은 바뀌지 않는다.

<br />

```javascript
} else {
  // 인덱스 0부터 value 값 전까지 복사하여 새로운 배열을 반환한다.
  const tmp = text.slice(0, value)
  const resultText = tmp
    .map((item) => {
      return /* html */ `
      <p>${item}</p>
    `
    })
    .join('')

  result.innerHTML = resultText
}
```
