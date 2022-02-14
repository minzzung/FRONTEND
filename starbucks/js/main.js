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
// _.throttle(함수, 시간)


//이미지 순차적으로 나타나도록 하는 애니메이션 만들기
const fadeEls = document.querySelectorAll('.visual .fade-in'); //4개가 반복되면서 실행되게한다.
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, { //gsap.to(요소, 지속시간(초), 옵션(객체데이터형태));
    delay: (index+1)*.7, //0.7, 1.4 , 2.1 ,2.7 순으로 애니메이션이 동작한다.
    opacity: 1
  });
});



//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  //autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView : 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백 
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
});