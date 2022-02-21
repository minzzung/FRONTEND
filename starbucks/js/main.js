
//페이지 스크롤에 영향을 받는 요소 검색
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

/*window : 화면 자체 출력 scroll 시 함수실행*/
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  //페이지 스크롤의 위치가 500px이 넘으면
  if (window.scrollY>500){
    //배지숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      //css 속성과 값 입력
      opacity: 0,
      display: 'none'
    });
    // 상단으로 스크롤 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
    //페이지 스크롤의 위치가 500px이 넘지 않으면
  } else{
    //배지보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display : 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
},300));
// _.throttle(함수, 시간)

//상단으로 스크롤 버튼을 클릭하면
toTopEl.addEventListener('click',function(){
  //페이지 위치를 최상단으로 부드럽게(.7초동안)이동
  gsap.to(window, .7,{
    scrollTo : 0
  });
});


//이미지 순차적으로 나타나도록 하는 애니메이션 만들기
const fadeEls = document.querySelectorAll('.visual .fade-in'); //4개가 반복되면서 실행되게한다.
fadeEls.forEach(function(fadeEl, index){
  //gsap.to(요소, 지속시간(초), 옵션(객체데이터형태));
  gsap.to(fadeEl, 1, { 
    delay: (index+1)*.7, //0.7, 1.4 , 2.1 ,2.7 순으로 애니메이션이 동작한다.
    opacity: 1
  });
});



//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
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

new Swiper('.awards .swiper-container', {
  autoplay: true,  // 자동 재생 여부
  loop : true,     // 반복 재생 여부
  spaceBetween : 30, // 슬라이드 사이 여백
  slidesPerView: 5,// 한 번에 보여줄 슬라이드 개수
  navigation: {  // 슬라이드 이전/다음 버튼 사용 여부
    prevEl : '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl : '.awards .swiper-next'  // 다음 버튼 선택자
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



/**
 * 부유하는 요소 관리
 */
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 '문자 데이터'를,
  // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 부유하는(떠 다니는) 요소를 만드는 함수
function floatingObject(selector, delay, size) {
  //gsap.to(애니메이션 처리할 요소, 지속되는 시간,어떻게 애니메이션이 될 것인지 대한 옵션)
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { //옵션
      delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
      y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
      repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
      ease: Power1.easeInOut // Easing 함수 적용.
    }
  )
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')//section이라는 태그들이 있는데 scroll-spy라는 요소들이 있다면 그 부분을 다 찾겠다
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {//각각의 반복되는 요소 spyEl
  new ScrollMagic // 중괄호가 열리고 닫히면 객체데이터가 들어온다는의미
    .Scene({ // 감시할 장면(Scene)을 지정해주는 메소드를 추가한다.
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정(trigger : 강제적으로 일으키다)
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시 
    })//.setClassToggle :: 클래스 속성을 지정해주는데 toggle (넣었다뻈다)
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가(클래스가 토글할 요소, 토글할 클래스 이름)
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});


