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

  
  ```HTML
   <!--HTML-->
   <div>Hello</div><!--띄어쓰기로 해석-->
   <div>World</div>
  ```    
##### EX) 2  
  `width` : 요소의 가로 너비를 지정하는 css속성     
  `height`: 요소의 새로 너비를 지정하는 css속성    

     
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
  - `조상요소태그 >.하위요소클래스 속성의 값` 하위(후손)선택자 : 선택자 div의 하위 요소 orange를 선택.
  EX)
  ```HTML
  <!--HTML-->
  <div>
    <ul>
      <li id = "orange">오렌지</li><!--선택-->
    </ul>
    <div>당근</div>
    <span class="orange">오렌지</span><!--선택-->
  </div>
  ```
  ```CSS
  /*CSS*/
  div .orange{
    color: red;
  }
  ``` 
  - `.클래스 속성의 값 + 다음태그` 인접 형제 선택자 : 선택자 ul의 다음 형제요소 li 태그 하나를 선택.
  EX)
  ```HTML
  <!--HTML-->
  <ul>
    <li id = "orange">오렌지</li>
    <li>망고</li>  <!--선택-->
    <li>사과</li>
  </ul>
  ```
  ```CSS
  /*CSS*/
  .orange + li {
    color: red;
  }
  ``` 
  - `.클래스 속성의 값 ~ 다음태그` 일반 형제 선택자 : 선택자 ul의 다음 형제요소 li 태그 모두 선택.
  EX)
  ```HTML
  <!--HTML-->
  <ul>
    <li id = "orange">오렌지</li>
    <li>망고</li>  <!--선택-->
    <li>사과</li>  <!--선택-->
  </ul>
  ```
  ```CSS
  /*CSS*/
  .orange ~ li {
    color: red;
  }
  ``` 
### ◾ 가상 클래스
  
  - `선택자:hover` 가상 클래스 선택자 hover : 선택자요소에 마우스 커서가 올라가 있는 동안 선택.
  EX)  
  ![image](https://user-images.githubusercontent.com/87464723/154221384-88efd8de-20be-41e5-b7cf-9a6efd382c09.png)

  ```HTML
  <!--HTML-->
  <a href="https://www.naver.com">NAVER</a>
  ```
  ```CSS
  /*CSS*/
  a:hover {
    color: red;
  }
  ``` 
  
  - `선택자:active` 가상 클래스 선택자 ACTIVE : 선택자 요소에 마우스를 클릭하고 있는 동안 선택.
  EX)   
  ```HTML
  <!--HTML-->
  <a href="https://www.naver.com">NAVER</a>
  ```
  ```CSS
  /*CSS*/
  a:active {
    color: red;
  }
  ```
  
  - `선택자:first-child` 가상 클래스 선택자 FIRST CHILD : 선택자 요소가 형제 요소 중 첫째라면 선택. 
  EX) 선택 불가능  

  ```HTML
  <div class="fruits">
    <span>딸기</span>
    <span>수박</span>
    <div>오렌지</div>
    <p>망고</p>
    <h3>사과</h3>
  </div>
  ```
  ```CSS
  /*CSS*/
  .fruits div:first-child {
    color: red;
  }
  ```
  
  - `선택자:last-child` 가상 클래스 선택자 LAST CHILD : 선택자 요소가 형제 요소 중 막내라면 선택. 
  EX) 

  ```HTML
  <div class="fruits">
    <span>딸기</span>
    <span>수박</span>
    <div>오렌지</div>
    <p>망고</p>
    <h3>사과</h3> <!--선택-->
  </div>
  ```
  ```CSS
  /*CSS*/
  .fruits h3:last-child {
    color: red;
  }
  ```
  
  - `선택자:nth-child(n)` 가상 클래스 선택자 NTH CHILD : 선택자 요소가 형제 요소 중 (n)째라면 선택. 
  EX) 

  ```HTML
  <div class="fruits">
    <span>딸기</span>
    <span>수박</span><!--선택-->
    <div>오렌지</div>
    <p>망고</p><!--선택-->
    <h3>사과</h3> 
  </div>
  ```
  ```CSS
  /*CSS*/
  .fruits *:nth-child(2n) { <!--n은 0부터 시작-->
    color: red;
  }
  ```
  
  - `선택자:not(선택제외요소)` 부정 선택자 NOT : 선택제외요소 아닌 선택자 요소 선택. 
  EX) 

  ```HTML
  <div class="fruits">
    <span>딸기</span>
    <span>수박</span>
    <div>오렌지</div> <!--선택-->
    <p>망고</p>       <!--선택-->
    <h3>사과</h3>     <!--선택-->
  </div>
  ```
  ```CSS
  /*CSS*/
  .fruits *:not(span) { 
    color: red;
  }
  ```
  
### ◾ 가상 요소
  - `선택자::before` 가상요소 선택자 BEFORE : 선택자 요소의 내부 앞에 내용을 삽입.  
  EX)  
![image](https://user-images.githubusercontent.com/87464723/154221516-c9abfc29-9ae2-443b-8e47-876379022207.png)

  ```HTML
  <div class="box">
      Content!
  </div>
  ```
  ```CSS
  /*CSS*/
  .box::before { 
    /*이 부분에 내용 삽입*/
    content: "앞!";
  }
  ```
  - `선택자::after` 가상요소 선택자 AFTER : 선택자 요소의 내부 뒤에 내용을 삽입.  
  EX)  
![image](https://user-images.githubusercontent.com/87464723/154221624-98aeb4c2-7066-4daf-be25-b2e320fc11eb.png)

  ```HTML
  <div class="box">
      Content!
  </div>
  ```
  ```CSS
  /*CSS*/
  .box::after { 
    content: "뒤!";
    /*이 부분에 내용 삽입*/
  }
  ```
    
### ◾ 속성
 - `[선택자]` 속성 선택자 ATTR : 속성 disabled를 포함한 요소 선택.  
  EX)  

  ```HTML
  <div class="box"></div>
  <input type="text" value="Min"/>
  <input type="password" value="4665"/>
  <input type="text" value="jung" disabled/>  <!--선택-->
  ```
  ```CSS
  /*CSS*/
  [disabled] { 
    color: red;
  }
  ```
  - `[선택자]` 속성 선택자 ATTR=VALUE : 속성 type을 포함하고 값이 password 요소 선택.  
  EX)  

  ```HTML
  <div class="box"></div>
  <input type="text" value="Min"/>
  <input type="password" value="4665"/> <!--선택-->
  <input type="text" value="jung" disabled/> 
  ```
  ```CSS
  /*CSS*/
  [type="password"] { 
    color: red;
  }
  ```
## CSS 스타일상속  
### 스타일 상속   
  :  선택된 클래스 요소에 css적용을 했을때 적용된 내용이 해당하는 요소의 자식요소, 하위요소까지 영향을 미치는 것
  EX)  
![image](https://user-images.githubusercontent.com/87464723/154221737-3bebdcf7-4b1d-43cf-916d-d0a201c9cf40.png) 
  ```HTML
  <div class="ecosystem">생태계
    <div class="animal">동물
        <div class="tiger">호랑이</div>
        <div class="lion">사자</div>
        <div class="elephant">코끼리</div>
    </div>
    <div class="plant">식물</div>
  </div>
  ```
  ```CSS
  /*CSS*/
  .animal { 
    color: red;
  }
  ```
## CSS 선택자 우선순위
#### 우선순위  
  : 같은 요소가 여러 선언의 대상이 된 경우, 어떤 선언의 css속성을 우선 적용할 지 결정하는 방법  
  1. 점수가 높은 선언이 우선  
  2. 점수가 같으면, 가장 마지막에 해석된 선언이 우선   
 
선택자 | 예시 | 점수  
--|:--:|--:
전체 선택자 | * | 0
태그 선택자 | div | 1
Class 선택자| .HELLO | 10
ID 선택자 | #hello | 100   
  
 `!impoort 선택자`: 99999999 점   
 `인라인 선택자` : 1000점  
 `::before 가상의 요소` : 1점 (태그선택자로 볼 수 있다.)  
 `:not() 부정 선택자`: 0점 (가상클래스이긴 하지만 부정선택자라 점수계산X) 
  
</div>
</details>

<details>
<summary> CSS 속성 </summary>
<div markdown="1">
 
##  박스 모델  
  
### ◼ width, height   
  요소의 가로/세로 너비  
####
   - auto(기본값) : 브라우저가 너비를 계산  
   - 단위 : px, em, vw
  
### ◼ max-width, max-height   
  요소가 커질 수 있는 최대 가로/세로 너비  
####
   - none : 최대 너비 제한 없음  
   - auto : 브라우저가 너비를 계산  
   - 단위 : px, em, vw 등 단위로 지정  
  
### ◼ min-width, min-height   
  요소가 작아질 수 있는 최대 가로/세로 너비  
####
   - 0 : 최소 너비 제한 없음
   - auto : 브라우저가 너비를 계산
   - 단위 : px, em, vw 등 단위로 지정  
#### 
  〰 단위  
기호 | 설명
--|--
px| 픽셀
% | 상대적 백분율
em | 요소의 글꼴 크기
rem | 루트 요소(html)의 글꼴 크기
vw | 뷰포트 가로너비의 백분율
vh | 뷰포트 세로 너비의 백분율

### ◼ margin   
  외부여백(공간)을 지정하는 단축 속성 (음수 사용 가능)
####
   - 0 : 최소 너비 제한 없음
   - auto : 브라우저가 여백을 계산 ( 가운데정렬에서 활용 )
   - 단위 : px, em, vw 등 단위로 지정  
   - % : 부모 요소의 가로 너비에 대한 비율로 지정

### ◼ padding   
  외부여백(공간)을 지정하는 단축 속성 (요소 크기가 커진다.)
####
   - 0 : 내부 여백 없음
   - 단위 : px, em, vw 등 단위로 지정  
   - % : 부모 요소의 가로 너비에 대한 비율로 지정
  
### ◼ border-width
  요소 테두리 선의 두께
####
   - medium : 중간 두께
   - thin : 얇은 두께
   - thick : 두꺼운 두께
   - 단위 : px, em, vw 등 단위로 지정  
  
### ◼ border-style
  요소 테두리 선의 종류
####
   - none : 선없음
   - solid : 실선(일반 선)
   - dashed : 파선
   - dotted : 점선
   - double : 두 줄 선
   - groove : 홈이 파여있는 모양
   - ridge : 솟은 모양(groove의 반대)
   - inset : 요소 전체가 들어간 모양
   - outset : 요소 전체가 나온 모양

### ◼ border-color
  요소 테두리 선의 색상을 지정하는 단축 속성
####
   - black : 검정색
   - tortkd : 선의 색상
   - transparent : 투명
  
### ◼ border-radius
  요소 모서리를 둥글게 깎음
####
   - 0 : 둥글게 없음
   - 단위: px, em, vw등 단위로 지정

### ◼ box-sizing
  요소 크기 계산 기준을 지정
####
   - content-box : 요소의 내용(content)로 크기 계산
   - border-box : 요소의 내용 +padding + border로 크기 계산
  
### ◼ overflow
  요소의 크기 이상으로 내용이 넘쳤을 때, 보여짐을 제어하는 단축 속성
####
   - visible : 넘친 내용을 그대로 보여줌
   - hiddent : 넘친 내용을 잘라냄
   - scroll : 넘친 내용을 잘라냄, 스크롤바 생성
   - auto : 넘친 내용이 있는 경우에만 잘라내고 스크롤바 생성
### ◼ display
  - 각 요소에 이미 지정되어 있는 값
    - block : 상자(레이아웃) 요소
    - inline : 글자 요소
    - inline-block : 글자 + 상자 요소
  - 따로 지정해서 사용하는 값
    - flex : 플렉스 박스(1차원 레이아웃)
    - grid : 그리드 (2차원 레이아웃)
    - none : 보여짐 특성없음, 화면에서 사라짐
### ◼ opacity
  요소 투명도
####
   - 1 : 불투명
   - 0~1 : 0부터 1사이의 소수점 숫자
  
## 글꼴
### ◼ font-style
  글자의 기울기
####
   - normal : 기울기 없음
   - italic : 이텔릭체
   - oblique : 기울어진 글자
  
### ◼ font-weight
  글자의 두께(가중치)
####
   - normal,400 : 기울기 없음
   - bold,700 : 두껍게
   - boler : 상위(부모) 요소보다 더 두껍게
   - lighter : 상위(부모) 요소보다 더 얇게
   - 100~900 : 100 단위의 숫자 9개, normal과 bold 이외 두께
### ◼ font-size
  글자의 크기
####
   - 16px : 기본 크기
   - 단위 : px, em, rem 등 단위로 지정
   - % : 부모 요소의 폰트 크기에 대한 비율
   - smaller : 상위(부모) 요소보다 더 작게
   - large : 상위(부모) 요소보다 더 크게
   - xx-small~xx-large : 가장 작은 크기 ~ 가장 큰크기까지, 7단계의 크기를 지정
### ◼ line-height
  한 줄의 높이, 행간과 유사
####
   - normal : 브라우저의 기본 정의를 
   - 숫자 : 요소의 글꼴 크기의 배수로 지정
   - 단위 : px, em, vw 등 단위로 지정  
   - % : 요소의 글꼴 크기의 비율로 지정
## 문자
### ◼ color
  글자의 색상
####
   - rgb(0,0,0) : 검정색 
   - 색상 : 기타 지정 가능한 색상 
### ◼ text-align
  문자의 정렬 방식
####
   - left : 왼쪽 정렬
   - right : 오른쪽 정렬
   - center : 가운데 정렬
   - justify : 양쪽 정렬
### ◼ text-decoration
  문자의 장식(선)
####
   - none : 장식없음
   - underline : 밑줄
   - overline : 윗줄
   - line-through : 중앙 선
### ◼ text-indent
  첫줄의들여쓰기
####
   - 0 : 장식없음
   - 단위 : px, em, rem 등 단위로 지정  
   - % : 요소의 가로 너비의 비율로 지정
  
## 배경
  
### ◼ background-color
  요소의 배경 색상
####
   - transparent : 투명함
   - 색상 : 지정 가능한 색상
### ◼ background-image
  요소의 배경 이미지 삽입
####
   - none : 투명함
   - url("경로") : 이미지 경로
### ◼ background-repeat
  요소의 배경 이미지 반복
####
   - repeat : 이미지를 수직, 수평 반복
   - repeat-x : 이미지를 수평 반복
   - repeat-y : 이미지를 수직 반복
   - no-repeat : 반복 없음
### ◼ background-position
  요소의 배경 이미지 위치
####
   - 0% 0% : 0%~100%
   - 방향 : top, bottom, left, right, center 방향
   - 단위 : px, em, rem 등으로 단위 지정
### ◼ background-size
  요소의 배경 이미지 크기
####
   - auto : 이미지의 실제 크기
   - 단위 : px, em, rem 등으로 단위 지정
   - cover : 비율을 유지, 요소의 더 넓은 너비에 맞춤
   - contain : 비율을 유지, 요소의 더 짧은 너비에 맞춤
### ◼ background-attachment
  요소의 배경 이미지 스크롤 특성
####
   - scroll : 이미지가 요소를 따라서 같이 스크롤
   - fixed : 이미지가 뷰포트에 고정, 스크롤 X
   - local : 요소 내 스크롤 시 이미지가 같이 스크롤

## 배치
### ◼ position
  요소의 위치 지정 기준
####
   - static : 기준 없음
   - relative : 요소 자신을 기준
   - absolute : 위치 상 부모 요소를 기준
   - fixed : 뷰포트(브라우저)를 기준
   - sticky : 스크롤 영역 기준
### ◼ 요소 쌓임 순서 (Stack order)
  어떤 요소가 사용자와 더 가깝게 있는지(위에 쌓이는지)결정
####
  1. 요소에 position 속성의 값이 있는 경우 위에 쌓임. (기본값 static 제외)  
  2. 1번 조건이 같은 경우, z-index 속성의 숫자 값이 높을 수록 위에 쌓임.
  3. 1번과 2번 조건까지 같은 경우, HTML의 다음 구조일 수록 위에 쌓임.
### ◼ z-index
  요소의 쌓임 정도를 지정
####
  - auto : 부모 요소와 동일한 쌓임 정도
  - 숫자 : 숫자가 높을 수록 위에 쌓임
## 플렉스(정렬)
### ◼ display
  Flexcontainer 의 화면 출력(보여짐) 특성
####
  - flex : 블록 요소와 같이 flex container 정의
  - inline-flex : 인라인 요소와 같이 flex container 정의

### ◼ flex-direction
  주 축을 설정
####
  - row : 행 축(좌=>우)
  - row-reverse : 행 축(우=>좌)
  - column : 열 축(위=>아래)
  - column-reverse : 열 축 (아래=>위)
## 변환
### ◼ flex-wrap
  Flex Items 묶음(줄 바꿈)여부
####
  - nowrap : 묶음(줄 바꿈)없음
  - wrap : 여러 줄로 묶음
  - wrap-reverse : wrap의 반대 방향으로 묶음
### ◼ justify-content
  주 축의 정렬 방법
####
  - flex-start : Flex Items 을 시작점으로 정렬
  - flex-end : Flex Items 을 끝점으로 정렬
  - center : Flex Items 을 가운데 정렬
  - space-between : 각 Flex Item 사이를 균등하게 정렬
  - space-around : 각 Flex Item의 외부 여백을 균등하게 정렬
### ◼ align-content
  교차 축의 여러 줄 정렬 방법
####
  - stretch : Flex Items 을 시작점으로 정렬
  - flex-start : Flex Items 을 시작점으로 정렬
  - flex-end : Flex Items 을 끝점으로 정렬
  - center : Flex Items 을 가운데 정렬
  - space-between : 각 Flex Item 사이를 균등하게 정렬
  - space-around : 각 Flex Item의 외부 여백을 균등하게 정렬
### ◼ align-items
  교차 축의 한 줄 정렬 방법
####
  - stretch : Flex Items를 교차 축으로 늘림
  - flex-start : Flex Items를 각 줄의 시작점으로 정렬
  - flex-end : Flex Items를 각 줄의 끝점으로 정렬
  - center : Flex Items를 각 줄에 가운데 정렬
  - baseline : Flex Items를 각 줄의 문자 기준선에 정렬
### ◼ order
  Flex Item의 순서
####
  - 0 : 순서없음
  - 숫자 : 숫자가 작을 수록 먼저
### ◼ flex-grow
  Flex Item의 증가 너비 비율
####
  - 0 : 증가 비율 없음
  - 숫자 : 증가 비율
### ◼ flex-shrink
  Flex Item의 감소 너비 비율
####
  - 1 : Flex Container 너비에 따라 감소 비율 적용
  - 숫자 : 감소 비율
### ◼ flex-basis
  Flex Item의 공간 배분 전 기본 너비
####
  - auto : 요소의 Content 너비
  - 단위 : px, em, rem 등 단위로 지정
## 전환
### ◼ transisiton-property
  전환 효과를 사용할 속성 이름을 지정
####
  - all : 모든 속성에 적용
  - 속성이름 : 전환 효과를 사용할 속성 이름 명시
### ◼ transisiton-duration
  전환 효과의 지속시간을 지정
####
  - 0s: 전환 효과 없음
  - 시간 : 지속시간(S)을 지정
### ◼ transisiton-timing-function
  전환 효과의 타이밍함수를 지정
####
  - ease : 느리게 - 빠르게 - 느리게
  - linear : 일정하게
  - ease-in : 느리게 - 빠르게
  - ease-out : 빠르게 - 느리게
  - ease-in-out : 느리게 - 빠르게 - 느리게
  - cubic-bezier(n,n,n,n) : 자신만의 값을 정의(0~1)
  - steps(n) : n번 분할된 애니메이션
### ◼ transisiton-delay
  전환 효과가 몇 초 뒤에 시작할지 대기시간을 지정
####
  - 0s: 대기시간 없음
  - 시간 : 대기시간(S)을 지정
## 띄움
### ◼ perspective
  하위 요소를 관찰하는 원근 거리를 지정
####
  - 단위 : px등 단위로 지정
### ◼ backface-visibility
  3D변환으로 회전된 요소의 뒷면 숨김 여부
####
  - visible : 뒷면 보임
  - hidden : 뒷면 숨김
<!-- ## 애니메이션
## 그리드
## 다단
## 필터 -->
   
</div>
</details>

<details>
<summary> JS 선행 </summary>
<div markdown="1">
  
## 표기법

###  ◻ dash - case(kebab-case)
   :  '-'를 사용해 컴퓨터는 하나로 인식하는 단어를 사람이 보기에 여러 단어로 읽을 수 있게 구분
####
   ex) the-quick-brown-fox-jumps-over-the-lazy-dog
###  ◻ snake_case              
   :  '_'를 사용해 인식할 수 있는 여러 단어를 하나로 묶는다.
####
   ex) the_quick_brown_fox_jumps_over_the_lazy_dog
###  ◻ camelCase    
   :  낙타 표기법이라고도 하고 대문자로 여러 단어를 하나의 단어로 컴퓨터에게 인식 시켜줄 때 사용
####
   ex) theQuickBrownFoxJumpsOverTheLazyDog
###  ◻ ParcelCase 
   :  camelCase와 비슷하지만 처음 오는 문자가 대문자로 사용한다.
####
   ex) TheQuickBrownFoxJumpsOverTheLazyDog
###  ◻ Zero-based Numbering
   :  특수한 경우를 제외하고 0부터 숫자를 시작한다.
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
