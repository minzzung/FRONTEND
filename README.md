# 📝웹 프로그래밍 - 프론트엔드

<details>
  
<summary> HTML 개요 </summary>
<div markdown="1">
  
##  HTML 기본문법
### -  요소
  `<태그>내용</태그>`    
     
##  부모와 자식 관계의 이해
###  
  `<태그><태그>내용</태그></태그>` : 안에 있는 태그는 자식요소 겉은 부모요소   
####   
   들여쓰기 : `tab` , 내어쓰기 : `Shift+Tab`   
     
##  빈 태그
###  - 빈 태그
  `<태그/>`   
###  - 기능을 확장한 태그 
  `<태그 속성='값'>내용</태그>` 
#### EX)
  ```HTML
  <img scr="./cat.jpg" alt="고양이"/> 
  <!-- scr: 경로 alt: 이미지의 이름(대체 텍스트)-->
  <input type = "text"/>
  <!--type : 데이터의 타입 "text" :사용자에게 일반 텍스트를 입력받는다-->
  <input type = "checkbox">
  <!--type : 데이터의 타입 "text" :사용자에게 체크여부를 입력받는다-->
  ```   
##  글자와 상자
### 요소가 화면에 출력되는 특성으로 크게 2가지로 구분할 수 있다.   
#### - 인라인(inline)요소 : 글자를 만들기 위한 요소들.   
  `<span></span>` : 콘텐츠 영역을 설정하는 용도(본질적으로 아무것도 나타나지 않음)
  
##### EX) 1 
   <img src="https://user-images.githubusercontent.com/87464723/153816454-0807b875-67d2-46fa-969a-5e5121c89eba.png" width="200" height="100"/>    

  ```HTML
   <!--HTML-->
   <span>Hello</span><!--띄어쓰기로 해석-->
   <span>World</span>
  ```    
  ```CSS
  /*CSS*/
  body {
    font-size: 100px; /*글자 사이즈 조절*/
  }
  ```    
##### EX) 2  
  `margin` : 요소의 외부 여백을 지정하는 css속성   
  `padding`: 요소의 내부 여백을 지정하는 css속성    
 <img src="https://user-images.githubusercontent.com/87464723/153817585-ff95af0b-3ea4-4eda-9c47-fb8cfd5ad342.png" width="300" height="150"/>   
  
  ```HTML
  <!--HTML-->
  <span style="margin: 20px 20px;">Hello</span>
  <span style="margin: 20px 20px;">World</span>
  
  <!--*불가능 :: 글자요소 안에 상자요소-->
  <span><div></div></span>
  <!--*가능 :: 글자요소 안에 글자요소-->
  <span><span></span></span>
  ```   
  
#### - 블록(block) 요소 : 상자(레이아웃)를 만들기 위한 요소들.   
  `<div></div>` : 콘텐츠 영역을 설정하는 용도(본질적으로 아무것도 나타나지 않음)

##### EX) 1 
   <img src="https://user-images.githubusercontent.com/87464723/153819297-e36b3488-4858-4836-be39-a8b12da09a85.png" width="400" height="100"/>  
  
  ```HTML
   <!--HTML-->
   <div>Hello</div><!--띄어쓰기로 해석-->
   <div>World</div>
  ```    
##### EX) 2  
  `width` : 요소의 가로 너비를 지정하는 css속성     
  `height`: 요소의 새로 너비를 지정하는 css속성    
 <img src="https://user-images.githubusercontent.com/87464723/153819585-02acff63-ed47-4cc7-be2d-f461ec3c005e.png" width="400" height="150"/>   
     
  ```HTML
  <!--HTML-->
  <div style="width: 100px;">Hello</div>
  <div style="height: 40px;">World</div>

  <!--*가능 :: 블록요소 안에 블록요소-->
  <span><div></div></span>
  <!--*가능 :: 블록요소 안에 인라인(글자)요소-->
  <span><span></span></span>
  ```       
</div>
</details>

<details>
<summary> HTML 핵심정리 (수정필요) </summary>
<div markdown="1">
  
## 핵심 요소 정리
###
  - `<div></div>` : (블록 상자 요소) 특별한 의미가 없고 구분을 위한 요소이다
  - `<h1>오늘의 날씨</h1>` : (블록 상자 요소) 제목을 의미하는 요소이다. + 숫자가 작을수록 더 중요한 제목
  - `<p>중부 집중호우, 12호 태풍 북상중..</p>` : (블록 상자 요소) 문장을 의미하는 요소이다.
  - ` <img src="img/weather.jpg" alt"12호 태풍"/>  ` : (인라인 글자 요소) 이미지를 삽입하는 요소이다..
  <img src="https://user-images.githubusercontent.com/87464723/153823868-1e1d2d85-5019-4ae5-b97d-75a992fed8b4.png" width="200" height="150"/>   
   
  ```HTML
  <div>
    <h1>오늘의 날씨</h1>
    <img src="img/weather.jpg" alt"12호 태풍"/>
  </div>
  ```
  
  - `<ul></ul>` : (블록 상자 요소) 순서가 필요없는 목록의 집합을 의미한다.
  - `<ol></ol>` : (블록 상자 요소) 순서가 필요한 목록의 집합을 의미한다.  
  - `<li></li>` : (블록 상자 요소) 목록 내 각 항목을 의미한다.  
  
   <img src="https://user-images.githubusercontent.com/87464723/153824410-c6c4d6e4-e54d-42cd-9c67-a42d3d245449.png" width="120" height="120"/>   
  
   ```HTML
  <ol>
    <li>사과</li>
    <li>딸기</li>
    <li>수박</li>
    <li>오렌지</li>
  </ol>
  ```
    
  - `<a href="https://www.naver.com">NAVER</a>` : (인라인 글자 요소) 다른/같은 페이지로 이동하는 하이퍼링크를 지정하는 요소이다     
  - `<span></span>` : (인라인 글자 요소) 특별한 의미가 없고 구분을 위한 요소이다   
  
  
    ![image](https://user-images.githubusercontent.com/87464723/153824848-d893903a-3050-44ce-aa88-38a84a4ac3f9.png)

  ```HTML
  <a href="https://www.naver.com">NAVER</a>
  <a href="https://www.google.com">GOOGLE</a>
  ```
  - 요소(텍스트)를 어떤 요소로 묶어주는 (감싸는) 행위를 Wrapping(래핑)이라고 부른다.
  
     <img src="https://user-images.githubusercontent.com/87464723/153825403-611a4d0b-6be5-4639-9044-4d9ed786a2f0.png" width="500" height="120"/>   
  ```HTML
  <!--HTML-->
  <p>
    동해물과 백두산이 마르고 닳도록
    하느님이 보우하사 <span>우리나라</span>만세 
  </p>
  ```
  ```CSS
  /*CSS*/
  body {
    font-size: 100px; /*글자 사이즈 조절*/
  }
  span {
    color : red;
  }
  ```   
  - `</br>` : (인라인 글자 요소) 줄바꿈 요소이다
  - `<input type="text" value="하하">` : 텍스트가 입력되는 부분에 "하하"가 미리 입력되어있다.
  - `<input type="text" palceholder="이름을 입력하시오">` : 사용자가 입력할 값의 힌트
  - `<input type="text" disabled />` : 입력 요소 비활성화 
  - `<label></label>` : (인라인 글자 요소) 라벨 가능 요소(input)의 제목을 의미한다.
  
     <img src="https://user-images.githubusercontent.com/87464723/153827120-03ff5d11-bc26-49ca-9e66-e36f9639f69b.png" width="500" height="120"/>
  ```HTML
  <!--HTML-->
  <input type=text value=김민동
   placeholder="이름을 입력하세요" disabled/>
   <br>
  <input type="checkbox" />
  Apple
  <label>
    <input type="checkbox" />
    banana
    <input type="radio" />
    fruit
  </label>
  ```  
 ##### table   
  
 ## 주석
 ### - HTML
    <!--내용삽입--> `Ctrl+/`, `Cmd+/`
 ### - CSS
    '/*내용삽입*/' `Ctrl+/`, `Cmd+/`
</div>
</details>

<details>
<summary> CSS 개요 </summary>
<div markdown="1">
  
## 기본문법, 주석
 ### ◾ 기본문법   
#### 
  CSS에서 하는 역할은 
  html에서의 기본적인 구조를 실제로 보기좋게 꾸며주는 역할을 한다. 스타일을 작업한다.    
  `선택자{ 속성:값; }` 선택자 : 스타일(css)을 적용할 대상   
    ex) `div{   
           color: red;   
           margin: 20px;   
         }`
### ◾ 주석   
#### /* 설명작성 */    
   주석 시작은 '/*'로 주석 끝은 '*/'   
   `Ctrl+/`, `Cmd+/`    
  
## CSS 선언 방식
  
### ◾ 내장 방식
  : <style></style>의 내용으로 스타일을 작성하는 방식   
  ```CSS
  <style>
  div{
    color : red;
    margin: 20px;
  }
  </style>
  ```
  
### ◾ 인라인 방식
  :요소의 style 속성에 직접 스타일을 작성하는 방식
  ```HTML
  <div style="color: red; margin:20px"></div>
  ```

### ◾ 링크 방식
  : <link/>로 외부 CSS문서를 가져와서 연결하는 방식  
  ```CSS
  /* main.css */
  div{
    color : red;
    margin: 20px;
  }
  ```
  ```HTML
  <!--HTML-->
  link rel="stylesheet" href="./css/main.css">
  ```  
### ◾ @import 방식
  : CSS의 @import규칙으로 CSS 문서 안에서 또 다른 CSS 문서를 가져와 연결하는 방식
  ```HTML
  <!--HTML-->
  link rel="stylesheet" href="./css/main.css">
  ```
  ```CSS
  /* main.css */
  @import url("./box.css");
  div{
    color : red;
    margin: 20px;
  }
  ```
  ```
  /* box.css */
  div{
    background-color : red;
    padding: 20px;
  }
  ```
   
## CSS 선택자
### ◾ 기본 선택자
  - `*` 전체 선택자 : 모든 요소를 선택.EX)
  ```CSS
  /*CSS*/
  *{
    color: red;
  }
  ```
  - `태그이름`태그 선택자 : 태그이름이 li인 요소를 선택.EX)
  ```HTML
  <!--HTML-->
  <li>사과</li>
  <li>오렌지</li>
  ```
  ```CSS
  /*CSS*/
  li{
    color: red;
  }
  ```   
  - `.클래스속성의 값` 클래스 선택자 : HTML class 속성의 값이 li인 요소를 선택.EX)
  ```HTML
  <!--HTML-->
  <li class = "orange">오렌지</li>
  <span class = "orange">오렌지</span>
  ```
  ```CSS
  /*CSS*/
  .orange{
    color: red;
  }
  ``` 
  - `#id속성의 값` 아이디 선택자 : HTML it 속성의 값이 orange인 요소를 선택.
  EX)
  ```HTML
  <!--HTML-->
  <li id = "orange">오렌지</li>
  <span class = "orange">오렌지</span>
  ```
  ```CSS
  /*CSS*/
  #orange{
    color: red;
  }
  ``` 
### ◾ 복합
  - `태그 이름과 클래스 속성의 값` 일치 선택자 : 선택자 span와 orange를 동시에 만족하는 요소 선택.
  EX)
  ```HTML
  <!--HTML-->
  <li id = "orange">오렌지</li>
  <span class = "orange">오렌지</span>
  ```
  ```CSS
  /*CSS*/
  span.orange{
    color: red;
  }
  ``` 
  - `태그부모 >. 클래스 속성의 값` 자식 선택자 : 선택자 ul의 자식 요소 orange를 선택.
  EX)
  ```HTML
  <!--HTML-->
  <ul>
    <li id = "orange">오렌지</li>
  </ul>
  ```
  ```CSS
  /*CSS*/
  ul > .orange{
    color: red;
  }
  ``` 
  - `태그부모 >.클래스 속성의 값` 하위 선택자 : 선택자 div의 하위 요소 orange를 선택.
  EX)
  ```HTML
  <!--HTML-->
  <div>
    <ul>
      <li id = "orange">오렌지</li>
    </ul>
  </div>
  ```
  ```CSS
  /*CSS*/
  div .orange{
    color: red;
  }
  ``` 
### ◾ 가상 클래스
### ◾ 가상 요소
### ◾ 속성

## CSS 스타일상속  
## CSS 선택자 우선순위  
</div>
</details>

<details>
<summary> CSS 속성 </summary>
<div markdown="1">
  
----------
    
</div>
</details>

<details>
<summary> JS 선행 </summary>
<div markdown="1">
  
## 표기법
###
###   `dash - case(kebab-case)` 
   '-'를 사용해 컴퓨터는 하나로 인식하는 단어를 사람이 보기에 여러 단어로 읽을 수 있게 구분
###  `snake_case`              
   '_'를 사용해 인식할 수 있는 여러 단어를 하나로 묶는다.
###  `camelCase`   
   낙타 표기법이라고도 하고 대문자로 여러 단어를 하나의 단어로 컴퓨터에게 인식 시켜줄 때 사용
###  `ParcelCase` 
   camelCase와 비슷하지만 처음 오는 문자가 대문자로 사용한다.
###  `Zero-based Numbering`
   특수한 경우를 제외하고 0부터 숫자를 시작한다.
## 주석
  - //한 줄 메모
  - /* 한 줄 메모 */
  - /**   
      *여러 줄 메모   
      */ (ctrl +'/')   
  
## 데이터 종류(자료형)
  ###
  - String (문자 데이터) : 따옴표를 사용한다.
 ```javascript
  let myNmae = "mindong";
  let email = 'dullini0205@gmail.com';
  let hello = 'Hello${myName}?!'
  
  console.log(myNmae); // mindong
  console.log(email);  // dullini0205@gmail.com
  console.log(hello);  // Hello  mindong?!
 ```
  - Number (숫자 데이터) : 정수 및 부동 소수점 숫자를 나타냅니다.
 ```javascript
  let num = 123;
  let opaciy = 1.57;
  
  console.log(num); // 123
  console.log(opaciy);  //1.57
 ```
  - Boolean (불린 데이터) : true,false 두 가지 값밖에 없는 논리 데이터입니다.
 ```javascript
  let checked = true;
  let isShow = false;
  
  console.log(checked); //true
  console.log(isShow);  //false
 ```
  - Undefined : 값이 할당되지 않은 상태를 나타냅니다.
 ```javascript
  let undef; // 값이 없는 상태를 undefined 라는 하나의 데이터로 나타낸다.
  let obj = {abx: 123};
  console.log(undef);   //undefined
  console.log(obj.abx); //123
  console.log(obj.x);   //undefined
 ```
  - Null :  어떤 값이 의도적으로 비어있음을 의미한다.
 ```javascript
  let empty = null;
  console.log(empty); // null
 ```
  - Object (객체 데이터) : 여러 데이터를 Key:Value 형태로 저장합니다. {}
 ```javascript
  let user = {
    //key: Value,
    name : 'min'
    age : 85,
    isValid: true
  };
  console.log(user.name); // min
  ```
  - Array (배열 데이터) : 여러 데이터를 순차적으로 저장합니다.[]
 ```javascript
  let fruits = ['apple','banana','cherry'];
  console.log(fruits[0]); // apple
  ```  
 ## 
  - 변수데이터를 저장하고 참조하는 데이터의 이름
  - let :  값(데이터)의 재할당 가능!
  - const : 값(데이터)의 재할당 불가능!
 ## 예약어 
  - 특별한 의미를 가지고 있어, 변수나 함수 이름등으로 사용할 수 없는 단어
  - Reserved Word
 ```javascript
  let this = 'hello'; //SyntaxError
  let if = 123; //SyntaxError
 ```
 ## 함수 
  - 특정 동작을 수행하는 일부 코드의 집합
  - function
```javascript 
  function helloF(){ //함수 선언
  //실행 코드
  console.log(1234); //명령이 들어있다
  }
  // 함수 호출
  helloF(); // 1234
```
  ### 
  - 기명(이름이 있는) 함수  :: 함수를 선언한다.
  ```javascript
    function hello(){
      console.log('HEllo~');
    }
  hello();
  ```
  ### 
  - 익명(이름이 없는) 함수 :: 함수를 표현한다.(호출불가-> 데이터나 변수에 활용)
   ``` JAVA 
    let world = function (){
      console.log('MEllo~');
    }
    world();
  ```
 ## 조건문 
   조건(true,false)의 결과에 따라 다른 코드를 실행하는 구문  
   ```javascript
    let isShow = true;
    let checked = false;
    
    if(isShow){
      console.log('Show~~'); //Show~~
    }
    if(checked){
    console.log('checked!')//실행x
    }
  ```  
 ## DOM API (Document Object Model, Application Programming Interface)    
  자바스크립트에서 HTML을 제어할 때 사용하는 명령들이라는 의미이다.   
 ```javascript
    // HTML 요소(Element) 1개 검색/찾기 (먼저 찾은 요소 1개만 반환)
    const boxEl = document.querySelector('.box');

    //HTML 요소에 적용할 수 있는 메소드 !
    boxEl.addEventListener();
    //인수추가가능
    boxEl.addEventListener(1,2);
    //1 - 이벤트 (Event, 상황)
    boxEl.addEventListener('Click',2);
    //2 - 핸들러 (Handler, 실행할 함수)
    boxEl.addEventListener('Click',function() {
      console.log('Click~!');
    });
```   
![image](https://user-images.githubusercontent.com/87464723/151526413-64ebca0a-c99e-4e32-9dad-cd50666314ea.png)

```javascript
    // HTML 요소(Element) 모두 검색하기
    const boxEls = document.querySelectorAll('.box');
    console.log(boxEls);

    // 찾은 요소들 반복해서 함수 실행! (유사배열)
    // 익명의 함수를 인수로 추가 
    boxEls.forEach(funcion() {});
  
    // 첫 번째 매개변수(boxEl) : 반복 중인 요소.
    // 두 번째 매개변수(index) : 반복 중인 번호
    boxEls.forEach(funcion(boxEl, index) {});
  
    // 출력!
    // 반복하면서 익명의 함수가 실행되는데 boxEl, index로 내부에서 로직을 추가할 수 있다.
    boxEls.forEach(funcion(boxEl, index) { // boxEl에는 반복중인 하나의 요소가 들어있고 
      boxEl.classList.add('order-${index + 1}'); //classList에 어떤 문자데이터 요소를 추가하고  index에 +1해서 보관
      console.log(index, boxEl); //콘솔창에 index, boxEl 값 출력
    });
```   
  ![image](https://user-images.githubusercontent.com/87464723/151527738-3c3bf134-cca8-46ba-a1c8-38b42aa341bf.png)

```javascript
  const boxEl = document.querySelector('.box');
  
  //Getter, 값을 얻는 용도
  console.log(boxEl.textContent); // Box!!
  
  //Setter, 값을 지정하는 용도
  boxEl.textContent = 'MINZZUNG?!';
  console.log(boxEl.TextContent);
```  
 ## 메소드 체이닝  
  메소드가 체인 형식으로 연결되어있다
```javascript
  const a = 'Hello~';
  // split : 문자를 인수 기준으로 쪼개서 배열로 반환.
  // reverse : 배열을 뒤집기.
  // join : 배열을 인수 기준으로 문자로 변합해 반환.
  const b = a.split('').reverse().join(''); //메소드 체이닝..
  
  console.log(a); // Hello~
  console.log(b); // ~olleH
```
 
</div>
</details>

<details>
<summary> 스타벅스 웹사이트만들기 </summary>
<div markdown="1">
 
 ## BEM (Block Element Modifier)
 ### - HTML 클래스 속성의 
   `요소__일부분` : Underscore(Lodash) 기호로 요소의 일부분을 표시   
   `요소--상태`   : Hyphen(Dash) 기호로 요소의 상태를 표시 
    
</div>
</details>
