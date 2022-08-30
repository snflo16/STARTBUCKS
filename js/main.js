const searchEl = document.querySelector('.search');
// searchEl 안의 input 요소를 찾는 코드
const searchInput = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInput.focus()
});

// event 발생 시 실행되는 함수는 handler
searchInput.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInput.setAttribute('placeholder', '통합검색');
});

// focus <-> blur(focus 제거)
searchInput.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInput.setAttribute('placeholder', '');
});

// 화면 내릴때 badge 사라지게 하기
const badgeEl = document.querySelector('header .badges');

// window.addEventListener('scroll', function() {
//     console.log('scroll!');
// })

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