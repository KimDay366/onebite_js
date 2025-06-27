// section02 - 12 . 생성자 함수

// 생성자 함수
// = 일반 함수처럼, 동일한 객체 혹은 배열을 여러번 반복해서 만들어야 할 떄 사용
//   동일한 구조의 객체를 쉽게 생성할 수 있으며, 코드의 재사용성이 높아지고, 반복되는 코드가 줄어듬
//   객체와 배열을 생성할 때 사용했던 "new Object() / new Array()" 함수는 JS에서 기본적으로 제공하는 생성자 함수

const person1 = {
  name: "홍길동",
  age: 30,
  job: "manager",
};

const person2 = {
  name: "김철수",
  age: 25,
  job: "designer",
};

// => 이런식으로 동일한 구조의 객체를 생성하려면 또 다시 새로운 객체를 선언하고 만들어야 함

// => 그래서 아래와 같은 방식으로 "생성자 함수"를 하나 만들어서 값을 입력 해 사용함
//    생성자 함수를 만드는 경우 함수명의 첫번째 스펠링은 대문자
function Person(nm, age, job) {
  this.name = nm;
  this.age = age;
  this.job = job;
  this.hellomsg = function () {
    console.log(`안녕하세요, ${this.job} / ${this.name}님!`);
  };
}

const person3 = new Person("kim", "35", "programer");
const person4 = new Person("lee", "39", "director");
// 생성자 함수를 사용해 만든 것 = 인스턴스

person3.hellomsg();
console.log(person4);
