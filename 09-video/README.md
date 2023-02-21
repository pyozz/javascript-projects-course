<img src="https://user-images.githubusercontent.com/92071025/220085074-0dce6d59-1832-43ed-8fbf-095743dfffee.gif" />

<hr />

## Objectives

* 버튼 클릭시 영상 재생, 일시정지 기능구현
* 로딩 애니메이션

## Solution

<재생, 일시정지>

클릭시 <code>.slide</code> 클래스를 토글시켜 좌우로 이동시키고<br />
<strong>HTMLMediaElement</strong>에서 제공하는 <code>play</code>와 <code>pause</code> 메서드를 활용해 기능을 구현하였다.

```javascript
if (!switchBtn.classList.contains('slide')) {
  switchBtn.classList.add('slide')
  video.pause()
} else {
  switchBtn.classList.remove('slide')
  video.play()
}
```

<br />

<로딩 애니메이션>

기본적으로 로딩 애니메이션을 동작시키고 load event시에 클래스를 추가하여 사라지게 하였다.

```javascript
window.addEventListener('load', function () {
  preloader.classList.add('hide')
})
```