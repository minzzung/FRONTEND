# 📝웹 프로그래밍 - 프론트엔드

<details>
  
<summary> HTML 개요 </summary>
<div markdown="1">
  
----------
    
</div>
</details>

<details>
<summary> HTML 핵심정리 </summary>
<div markdown="1">
  
----------
    
</div>
</details>

<details>
<summary> CSS 개요 </summary>
<div markdown="1">
  
----------
    
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
###  ▪ dash - case(kebab-case)  
  : '-'를 사용해 컴퓨터는 하나로 인식하는 단어를 사람이 보기에 여러 단어로 읽을 수 있게 구분
###  ▪ snake_case              
  : '_'를 사용해 인식할 수 있는 여러 단어를 하나로 묶는다.
###  ▪ camelCase            
   : 낙타 표기법이라고도 하고 대문자로 여러 단어를 하나의 단어로 컴퓨터에게 인식 시켜줄 때 사용
###  ▪ ParcelCase          
   : camelCase와 비슷하지만 처음 오는 문자가 대문자로 사용한다.
###  ▪ Zero-based Numbering
   : 특수한 경우를 제외하고 0부터 숫자를 시작한다.
## 주석
  - //한 줄 메모
  - /*한 줄 메모*/
  - /**
      *여러 줄 메모
      */ (ctrl +'/')
  
## 데이터 종류(자료형)
  ###
  - String (문자 데이터) : 따옴표를 사용한다.
 ``` JAVA
  let myNmae = "mindong";
  let email = 'dullini0205@gmail.com';
  let hello = 'Hello${myName}?!'
  
  console.log(myNmae); // mindong
  console.log(email);  // dullini0205@gmail.com
  console.log(hello);  // Hello  mindong?!
 ```
  - Number (숫자 데이터) : 정수 및 부동 소수점 숫자를 나타냅니다.
 ``` JAVA
  let num = 123;
  let opaciy = 1.57;
  
  console.log(num); // 123
  console.log(opaciy);  //1.57
 ```
  - Boolean (불린 데이터) : true,false 두 가지 값밖에 없는 논리 데이터입니다.
 ``` JAVA
  let checked = true;
  let isShow = false;
  
  console.log(checked); //true
  console.log(isShow);  //false
 ```
  - Undefined : 값이 할당되지 않은 상태를 나타냅니다.
 ``` JAVA
  let undef; // 값이 없는 상태를 undefined 라는 하나의 데이터로 나타낸다.
  let obj = {abx: 123};
  console.log(undef);   //undefined
  console.log(obj.abx); //123
  console.log(obj.x);   //undefined
 ```
  - Null :  어떤 값이 의도적으로 비어있음을 의미한다.
 ``` JAVA
  let empty = null;
  console.log(empty); // null
 ```
  - Object (객체 데이터) : 여러 데이터를 Key:Value 형태로 저장합니다. {}
 ``` JAVA
  let user = {
    //key: Value,
    name : 'min'
    age : 85,
    isValid: true
  };
  console.log(user.name); // min
  ```
  - Array (배열 데이터) : 여러 데이터를 순차적으로 저장합니다.[]
 ``` JAVA
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
 ``` JAVA
  let this = 'hello'; //SyntaxError
  let if = 123; //SyntaxError
 ```
 ## 함수 
  - 특정 동작을 수행하는 일부 코드의 집합
  - function
``` JAVA 
  function helloF(){ //함수 선언
  //실행 코드
  console.log(1234); //명령이 들어있다
  }
  // 함수 호출
  helloF(); // 1234
```
  ### 
  - 기명(이름이 있는) 함수  :: 함수를 선언한다.
  ``` JAVA 
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
</div>
</details>
