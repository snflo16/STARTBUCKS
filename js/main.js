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