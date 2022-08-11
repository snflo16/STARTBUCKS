- 오픈 그래프 (cf. 트위터 카드 property="twitter:card")
  > 웹페이지가 소셜 미디어로 공유될 때 우선적으로 활용되는 정보 지정

```html
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="Startbucks"/>
<meta property="og:title" content="Startbucks Coffee Korea"/>
<meta property="og:description" content="스타벅스는..."/>
<meta property="og:image" content="./images/.."/>
<meta property="og:url" content="https://..."/>
```

- materials.io 
  > 아이콘 사이트

- ::before // ::after
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