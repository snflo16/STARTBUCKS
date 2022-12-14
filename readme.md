##### 오픈 그래프 (cf. 트위터 카드 property="twitter:card")

> 웹페이지가 소셜 미디어로 공유될 때 우선적으로 활용되는 정보 지정

```html
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="Startbucks"/>
<meta property="og:title" content="Startbucks Coffee Korea"/>
<meta property="og:description" content="스타벅스는..."/>
<meta property="og:image" content="./images/.."/>
<meta property="og:url" content="https://..."/>
```



##### materials.io 

> 아이콘 사이트



##### ::before // ::after

> 해당 태그가 시작하는 혹은 끝나는 지점에 가상의 요소를 추가
```html
<q>Some quotes,</q> he said, <q>are better than none.</q>
```

```css
q::before {
  content: "«";
}

q::after {
  content: "»";
}
```

```
«Some quotes,» he said, «are better than none.»
```



##### js defer 속성(<->async)

- async 속성이 명시된 경우 : 브라우저가 페이지를 파싱되는 동안에도 스크립트가 실행됨.

- async 속성은 명시되어 있지 않고 defer 속성만 명시된 경우 : 브라우저가 페이지의 파싱을 모두 끝내면 스크립트가 실행됨.

- async 속성과 defer 속성이 모두 명시되어 있지 않은 경우 : 브라우저가 페이지를 파싱하기 전에 스크립트를 가져와 바로 실행시킴.



##### BEM(BLOCK Element Modifier)

> HTML 클래스 속성의 작명법
1. 요소__일부분 Underscore(Lodash) 기호로 요소의 일부분을 표시
   ```html
   <div class="container">
       <div class="name"></div>
       <div class="item">
       	<div class="name"></div>
       </div>
   </div>
   
   <!-- 변경 -->
   
   <div class="container">
       <div class="container__name"></div>
       <div class="item">
       	<div class="item__name"></div>
       </div>
   </div>
   ```
2. 요소--상태 Hyphen(Dash) 기호로 요소의 상태를 표시
   ```html
   <div class="btn primary"></div>
   <div class="btn success"></div>
   <div class="btn error"></div>
   
   <!-- 변경 -->
   
   <div class="btn btn--primary"></div>
   <div class="btn btn--success"></div>
   <div class="btn btn--error"></div>
   ```



#### lodash

> https://lodash.com/

```js
// scroll event가 너무 많이 실행되어 부하가 걸리지 않도록 lodash 설치 후 throttle라는 기능을 사용
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function() {
    if (window.scrollY > 500) {
        // 배지 숨기기
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        })
    } else {
        // 배지 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        })
    }
}, 300))
```



#### gsap

> https://greensock.com/docs/v3/GSAP/

```js
// scroll event가 너무 많이 실행되어 부하가 걸리지 않도록 lodash 설치 후 throttle라는 기능을 사용
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function() {
    if (window.scrollY > 500) {
        // 배지 숨기기
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        })
    } else {
        // 배지 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        })
    }
}, 300))
```



#### css 우선순위

```css
.btn {
    font-weight: 700;
}
/* css 선택자 1 => 10점 */

.btn.btn--white {
    background-color: #333;
    color: #fff;
}
/* css 선택자 2 => 20점 */

.btn.btn--white:hover {
    background-color: #fff;
    color: #333;
}
/* css 선택자 3(2개+가상요소) => 30점 */
```

