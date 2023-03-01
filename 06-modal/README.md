<img src="https://user-images.githubusercontent.com/92071025/217313411-6b0fc6cd-3def-4daa-8ed7-74f24f893981.gif" />

<hr />

## Objectives

- 버튼 클릭시 모달창을 띄운다.

<br />

## Solution

```javascript
modalButtonEl.addEventListener('click', function () {
  modalContainerEl.classList.add('is-active')
})

closeButtonEl.addEventListener('click', function () {
  modalContainerEl.classList.remove('is-active')
})
```

<hr />

## ♻️ Refactoring
