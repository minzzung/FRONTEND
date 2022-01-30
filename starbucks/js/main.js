const searchEl = document.querySelector('.search'); /* 클래스가 search인 요소 찾아서 변수에 할당*/
const searchIputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  // serch를 가지고 있는 div요소를 클릭하면 어떤 함수를 실행
  searchIputEl.focus();
});

searchIputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchIputEl.setAttribute('placeholder', '통합검색');
});

//input 요소에 포커스가 해제됐을 때
searchIputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchIputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

/*window : 화면 자체 출력 scroll 시 함수실행*/
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY>500){
    //배지숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      //css 속성과 값 입력
      opacity: 0,
      display: 'none'
    });
  } else{
    //배지보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display : 'block'
    });
  }
},300));