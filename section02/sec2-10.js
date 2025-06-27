// section02 - 10 . 객체

// 객체 = object
// 비원시 타입 자료형으로, 여러 개의 키와 값을 저장할 수 있는 자료형

// 1) 생성자 함수 사용하기
// JS에서 객체를 만들 수 있게 제공하는 함수 "Object()"는
// 특정 변수에 담아 new 키워드와 함께 신규 선언하여 사용
let obj1 = new Object();

// 2) 리터럴 방식 사용하기
// 객체 생성 시 중괄호 = 리터럴 을 사용하여 선언하는 방식
let obj2 = {};

// ========================================================

// 객체의 속성
// 프로퍼티 : 객체의 키와 값의 묶음[key : value] 을 말함 ,

let drama = {
  title: "프롬",
  country: "america",
  "genre or type": "호러, 미스터리",
};

// 객체의 값 사용하기
// 1) 점 표기법
//  : 변수명 다음에 .(점)을 쓰고 키(명칭)를 써서 저장된 값 가져오기
//  : 주로 단어형으로 되어 있는 키(명칭)용으로 사용함
console.log(`보고 싶다, ${drama.title}`);

// 2) 괄호 표기법
//  : 대괄호 안에 키(명칭)를 '',""를 사용하여 저장된 값 가져오기
//  : 키(명칭)이 단어가 아닌 단어 2개 이상의 문자열인 경우 사용
console.log(`아주 흥미 진진한 ${drama["genre or type"]}야.. 후.. `);

// 3) 함수의 매개변수로 key 사용하기
const loveDrama = (key) => {
  console.log(drama[key]);
  //   console.log(drama.key); 점표기법을 사용하면, 객체 drama에서 키가 key인 프로퍼티를 찾게됨.
};

loveDrama("title");

// ========================================================

// 객체 프로퍼티 추가, 수정, 삭제
const nyuggi = {
  name: "hjl",
};

nyuggi.age = 39; // 점 표기법 추가
nyuggi.color = "white"; // 괄호 표기법 추가

console.log(nyuggi);
console.log(nyuggi.age);

nyuggi.age = 40; // 점 표기법 수정
nyuggi.color = "black"; // 괄호 표기법 수정

console.log(nyuggi);
console.log(nyuggi.age);

delete nyuggi.age; // 점 표기법 삭제
delete nyuggi["color"]; // 괄호 표기법 삭제

console.log(nyuggi);

// 참고! 객체는 let / const 모두 다 사용 가능.
// const의 경우 값이 객체이고, 이 객체가 저장되는 공간을 할당 받은 것이기 때문에
// const를 사용해도 점 or 괄호 표기법으로 추가, 수정, 삭제가 가능함
// 단, const를 사용해 만든 경우 재선언 하면 오류로 발생 = 공간을 다시 할당 받아야 하므로

// ========================================================

// 객체 + 함수 = 메서드

// 1) 객체 안에 함수를 넣고, 다른 프로퍼티를 불러오기
// const person = {
//   name: "hjl",
//   age: 39,
//   print: function (nm) {
//     console.log(`안녕하세요, ${nm}!`);
//   },
// };

// person.print(person.name);
// person["print"](person["name"]);

// 2) 객체 안에 함수 넣고, this 를 사용해서 함께 쓰인 다른 프로퍼티 불러오기
//   -> "this"를 사용하면 자신이 소속되어 있는 객체를 가리켜 해당 값을 불러옴
const person = {
  name: "hjl",
  age: 39,
  print: function () {
    console.log(`안녕하세요, ${this.name}!`);
  },
};

person.print();
person["print"]();
