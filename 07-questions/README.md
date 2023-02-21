<img src="https://user-images.githubusercontent.com/92071025/216798975-4f8b7f7f-a1d2-48fc-afc1-eaccd89b32fe.gif" />

<hr />

먼저 모든 버튼을 찾으면서 시작할 수 있지만 각 대표 부모인 <code>.question-card</code>를 찾아 순회를 돌면서 버튼을 찾는 방법을 사용했다. 이렇게 하면 각 요소 안에 있는 버튼을 특정지어 찾을 수 있기 때문에 좋은 방법이라고 생각한다.

그리고 기본적으로 각 버튼을 클릭하면 대표 부모에 class를 추가해 토글 기능을 구현하였다. 위에서 찾은 각 대표 부모들의 변수를 다시 순회하면서 내가 클릭한 버튼(=대표 부모)과 일치하지 않는 요소에는 class를 제거하게 된다.

```javascript
questions.forEach((item) => {
  if (item !== question) item.classList.remove('show-text')
})
```
