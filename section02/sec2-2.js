//section02 - 2. 변수와 상수

// 1) 변수 , let
console.log("helloworld");

let name = "js"; // 변수의 값을 대입 or 할당한다
console.log(name);

name = "jsk"; //변수값의 재할당
console.log(name);

// 1. 변수명으로 $ _ 이외의 특수문자는 사용할 수 없다
// 2. 변수명 맨앞에는 숫자를 사용할 수 없다
// 3. 예약어(JS에 이미 사용되고 있는 영문명)는 변수명으로 사용될 수 없다

// 카멜표기법 : 첫번째 단어를 제외한 나머지 단어의 첫글자를 대문자로 표기
// let userinfo > let userInfo / let istruevalue > let isTrueValue

// 2) 상수, const
// 상수는 선언과 대입을 한번에 해야하며, 재할당은 불가능함

const age = 35;
console.log(age);
// 변경할 수 없는 값을 사용할 때 해당 상수로 사용함.
// 예를 들면 회원가입 시 [이름, 생일, 이메일 등] 별칭이나 고유값을 쓸 때 사용함.
