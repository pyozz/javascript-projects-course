<img src="https://user-images.githubusercontent.com/92071025/219359820-76410554-7052-4bd6-87b9-3ad05f5f1c7c.gif" />

<hr />

클릭하면 클릭한 해당 버튼과 관련된 content 내용을 보여주기 위해 버튼에 data 속성을 부여하고 클릭시 이 data 속성과 일치하는 content를 보여준다.

여기서 클릭 이벤트를 버튼전체와 컨텐츠를 감싸는 부모 요소에 부여했는데 버튼 클릭시에만 이벤트 핸들러가 동작하도록 dataset 프로퍼티를 참조해 존재하는 경우에만 동작하도록 구현하였다.

```javascript
const id = e.target.dataset.id
if (id) {
  ...
}
```

<br />

버튼 하나를 클릭하면 일단 모든 버튼에 대해 <code>is-active</code> 클래스를 제거시키고 <code>e.target</code> 으로 클릭한 버튼 요소에만 <code>is-active</code> 클래스가 추가되도록 하였다.

```javascript
btns.forEach((btn) => {
  // 먼저 모든 버튼에 대해 비활성화 시키고
  btn.classList.remove(ACTIVE_CLASSNAME)
})
// 내가 클릭한 요소만 따로 활성화시킨다.
e.target.classList.add(ACTIVE_CLASSNAME)
```
<br />

content에서는 내가 클릭한 버튼의 data 속성의 값을 얻어 이와 일치하는 id를 갖는 content에만 <code>is-active</code>를 추가하였다.

```javascript
contents.forEach((content) => {
  // 모든 content에 대해 비활성화 시키고
  content.classList.remove(ACTIVE_CLASSNAME)
})
// 클릭한 버튼의 data 속성 값과 일치하는 하나의 content를 찾고
// 이 conetnt만 따로 활성화 시킨다.
const showContent = document.getElementById(id)
showContent.classList.add(ACTIVE_CLASSNAME)
```