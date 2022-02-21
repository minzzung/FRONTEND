// 검색창요소 .search를 찾는다.
const searchEl = document.querySelector('.search'); /* 클래스가 search인 요소 찾아서 변수에 할당*/
const searchIputEl = searchEl.querySelector('input');

// 검색창 요소를 클릭하면 실행
searchEl.addEventListener('click',function(){
  // serch를 가지고 있는 div요소를 클릭하면 어떤 함수를 실행
  searchIputEl.focus();
});

// 검색창 요소 내부 실제 input 요소에 포커스 되면 실행
searchIputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchIputEl.setAttribute('placeholder', '통합검색');
});

//검색창 요소 내부 input 요소에 포커스가 해제됐을 때 실행
searchIputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchIputEl.setAttribute('placeholder', '');
});


/**
 * 올해가 몇 년도인지 계산
 */
 const thisYear = document.querySelector('.this-year')
 thisYear.textContent = new Date().getFullYear()