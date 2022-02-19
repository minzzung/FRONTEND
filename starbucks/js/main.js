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
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 (슬라이드 보는)버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 (슬라이드 보는)버튼 선택자
  }
});

/**
 * Promotion 슬라이드 토글 기능
 */
// 슬라이드 영역 요소 검색!
const promotionEl = document.querySelector('.promotion')
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// 슬라이드 영역 숨김 여부 기본값!
let isHidePromotion = false
// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
  // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
  isHidePromotion = !isHidePromotion //느낌표가 있는 뒷쪽의 값이 반대가 되게 만든다.
  // 요소를 숨겨야 하면,
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  // 요소가 보여야 하면,
  } else {
    promotionEl.classList.remove('hide')
  }
})


