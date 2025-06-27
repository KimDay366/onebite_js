// section02 - 16 . 배열과 객체의 구조 분해 할당

// 구조 분해 할당?
// 배영읠 요소 또는 객체의 프로퍼티들을 분해해 그 값들을 각각의 변수에 할당하는 자바스크립트 표현식

// 1) 배열의 구조 분해 할당
// 배열의 요소를 값으로 사용할 변수를 배열화 하여 좌측에 선언하고, 우측에 배열 값을 가져온다
let rainbow = ["red", "orange", "yellow", "green", "sky", "blue", "purple"];
let [r1, r2, r3, r4, r5, r6, r7] = rainbow;

// 선언 분리 할당
// 사용할 변수를 우선 선언한 뒤, 값 배열을 직접 입력하여 각 변수에 분류함
let c1, c2, c3;
[c1, c2, c3] = ["red", "blue", "green"];

//

// 배열의 길이보다 적은 변수와 매칭되면, 인덱스 0부터 우선 할당되어 나머지 값은 사라짐
let n1, n2, n3;
[n1, n2, n3] = [100, 200, 300, 400];

console.log(n1, n2, n3); // 100 200 300 , 400은 사라짐

// 배열의 길이가 변수보다 적게 매칭되면, 마지막 변수는 undefined가 됨
let nn1, nn2, nn3;
[nn1, nn2, nn3] = [100, 200];

console.log(nn1, nn2, nn3); // 100 200

// 변수에 기본값을 할당 해 주면, 배열이 적더라도 기본값이 들어가게 됨 = 기본값 할당
[nn1, nn2, nn3 = 300] = [400, 500];

console.log(nn1, nn2, nn3); // 400 500 300

//

// 구조 분해 할당을 이용해 두개의 변수 값 바꾸기

let a = 10;
let b = 5;

let tem; // 임시 저장소

tem = a;
a = b;
b = tem;
console.log(a, b);

[a, b] = [b, a]; // 구조 분해 할당을 사용하면 간단하게 변경 가능
console.log(a, b);

// ============================================================

// 2) 객체의 구조 분해 할당
// 객체의 구조 분해시 변수명은 key와 동일하게 사용되어야 함. 동일한 키를 찾아서 값이 할당 됨
let colors = {
  col1: "green",
  col2: "red",
  col3: "yellow",
};

let { col1, col2, col3 } = colors;
// console.log(col1, col2, col3);

let js = {
  name: "js",
  birth: 522,
  age: 35,
};

// let jsP1 = js.name;
// let jsP2 = js.birth;
// let jsP3 = js.age;

let { name: jsP1, birth: jsP2, age: jsP3 } = js;
console.log(jsP1, jsP2, jsP3);
// 지정 할 변수명과 키가 다른 경우, 키에다가 원하는 변수명을 지정해서 매칭 해 줌.

// 객체 구조 분해 할당 역시, 변수의 기본값 지정이 가능함
let { name: jP1, birth: jP2, age: jP3, jP4 = "경기도" } = js;
console.log(jP1, jP2, jP3, jP4);
