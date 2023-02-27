<img src="https://user-images.githubusercontent.com/92071025/220342699-f762a14c-6deb-41c7-8809-ab1018077843.gif" />

<hr />

## Objectives

* 버튼 클릭시 슬라이드가 좌우로 이동
* 첫 번째와 마지막 슬라이드에서는 각각 prevBtn과 nextBtn 미노출

## Solution

슬라이드의 배치는 scss 파일에서 <code>position: absolute</code>만 적용시키고 위치 값은 자바스크립트로 인덱스를 활용하여 배치한다.

```scss
.slide {
  // absolute만 적용
  // left 값은 자바스크립트로 결정
  position: absolute;
  ...
}
```

<br />

<code>querySelectorAll('.slide')</code>로 모든 슬라이드를 취득하고 <code>forEach</code> 메서드로 인덱스를 활용하여 각 슬라이드 요소에 <code>left</code> 값을 적용하였다.

```javascript
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`
})
```

<br />

0을 기본값으로 갖는 전역 변수를 선언하고 이 값의 변화에 따라 각 슬라이드의 <code>transform: translateX()</code> 속성으로 이동시키고  버튼 렌더링을 결정한다.

```javascript
slides.forEach((slide) => {
  slide.style.transform = `translateX(-${count * 100}%)`
})
```

```javascript
if (count < slides.length -1) nextBtn.style.display = 'block'
else nextBtn.style.display = 'none'

if (count > 0) prevBtn.style.display = 'block'
else prevBtn.style.display = 'none'
```


