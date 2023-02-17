<img src="https://user-images.githubusercontent.com/92071025/209950558-fbdbd4c8-dd7a-42ed-9068-3f73b9e7f53b.gif" />

<hr />

## Objectives

- 버튼 기능(이전, 다음, 랜덤)에 맞게 각기 다른 유저들의 정보를 나타낸다.

<br />

## Solution

초기 로딩시 reviews 배열의 첫 번째 요소에 대한 정보를 출력하기 위해 <code>DOMContentLoaded</code> 이벤트를 사용했다.

```javascript
window.addEventListener('DOMContentLoaded', function () {
  // 정보를 출력하는 함수
  showItem()
})
```

<br />

```javascript
// 정보를 출력하는 함수
function showItem() {
  const item = reviews[currentItem]
  image.src = item.img
  image.alt = item.name
  userName.textContent = item.name
  job.textContent = item.job
  desc.textContent = item.text
}
```

<br />

이전이나 다음 버튼을 클릭하면 reviews 배열의 인덱스를 조절하는 currentItem 변수의 값을 증감시키는데 이때, currentItem 변수가 0에서 <strong>reviews 배열 길이 - 1</strong>을 벗어나지 않도록 제어문으로 처리하였다.

```javascript
prevBtn.addEventListener('click', function () {
  currentItem--
  // 마지막 요소로
  if (currentItem < 0) currentItem = reviews.length - 1
  // 위 코드로 인해 변경된 currentItem 변수를 활용하게된다.
  showItem()
})

nextBtn.addEventListener('click', function () {
  currentItem++
  // 첫 번째 요소로
  if (currentItem > reviews.length - 1) currentItem = 0
  // 위 코드로 인해 변경된 currentItem 변수를 활용하게된다.
  showItem()
})
```

<br />

만약 제어문으로 인덱스 범위 처리를 하지 않고 다음 버튼을 계속 클릭하면 reviews 배열 길이를 초과하게 되어 존재하지 않는 요소를 탐색하기 때문에 <code>reviews[currentItem]</code> 코드로 데이터를 가져올 수 없다.

<img src="https://user-images.githubusercontent.com/92071025/209952913-4bfa0499-73f9-486c-8dff-e12b6810a928.png" />
