<img src="https://user-images.githubusercontent.com/92071025/220087147-a64b5bfe-7f60-4578-a8b0-3e274df968a4.gif" />

<hr />

## Objectives

* 탭 버튼 클릭시 해당 섹션으로 스크롤 이동

## Solution

클릭한 버튼의 부모인 li 요소의 <code>aria-labelledby</code> 속성을 찾고<br /> 찾은 해당 값과 일치하는 id 값을 갖는 섹션을 찾는다. <br />

```javascript
const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
const tabPanel = document.getElementById(tabPanelId)
```

<br />

요소 노드 객체의 <code>getBoundingClientRect()</code> 메서드를 사용해 <strong>뷰포트로부터 떨어진 위치 값을 구하고</strong>

```javascript
const topAmount = tabPanel.getBoundingClientRect().top
```

* <code>Element.getBoundingClientRect()</code> 메서드는 엘리먼트의 크기와 뷰포트에 상대적인 위치 정보를 제공하는 DOMRect 객체를 반환한다.

<br />

 window.scrollBy() 메서드로 스크롤을 이동시킨다.

 ```javascript
window.scrollBy({
  top: topAmount - 60,
  behavior: 'smooth',
})
 ```

 * <code>window.scrollBy()</code> 메서드는 창에 있는 문서를 지정된 양만큼 스크롤합니다.