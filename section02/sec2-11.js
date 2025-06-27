// section02 - 11 . 배열
// 배열 = Array
// 비원시 타입 자료형으로, 여러 값을 하나의 변수에 동시에 저장할 수 있는 자료형

// 1) 생성자 함수 사용하기
// JS에서 배열을 만들 수 있게 제공하는 함수 "Object()"는
// 특정 변수에 담아 new 키워드와 함께 신규 선언하여 사용
let arr1 = new Array();
let arr2 = new Array(1, 2, 3); // 여러개의 값이 들어가면 해당 값 모두 변수에 저장 됨
let arr3 = new Array(3); // 숫자로 1개만 쓰면 해당 값이 들어가지 않고, 값 N개를 저장할수 있는 빈공간으로 선언됨

// 2) 리터럴 방식 사용하기
// 배열 생성 시 대괄호 = 리터럴 을 사용하여 선언하는 방식
let arr4 = [];
let arr5 = [1, 2, 3]; // 해당 값 모두 변수에 저장 됨
let arr6 = [3]; // 빈 공간이 아닌 해당 숫자가 변수에 저장됨.

// ================================================================
// 배열 값 넣기

let arr = [
  { name: "홍길동" },
  1,
  "array",
  function () {
    console.log("hello");
  },
  null,
  undefined,
];

console.log(arr); // 여러 자료형을 모두 삽입 가능

// ====================================================================
// 배열 요소 접근, 추가, 수정, 삭제
// 배열의 인덱스로 원하는 값에 접근해야 하며, 인덱스는 "0 ~ 값 갯수 - 1" 로 구성됨

// 1) 배열 요소 접근하기 = 인덱스 사용법
let arrayGroup = [1, "hello", null];

console.log(arrayGroup[0]);

// 2) 배열 요소 추가하기
// unshift(): 첫번쨰 인덱스에 요소 추가 , push() : 마지막 인덱스에 요소 추가
const fruits = ["apple", "orange", "banana"];

fruits.push("grape");
fruits.unshift("peach");

console.log(fruits);

// 3) 배열 요소 수정하기
let animal = ["cat", "dog", "lion"];
animal = ["cat", "wolf", "lion"]; // 모든 배열을 다 써서 수정하기
animal[0] = "tiger"; // 인덱스를 써서 특정값만 수정하기

console.log(animal);

// 4) 배열 요소 삭제하기
// shift() : 첫번째 값 삭제 , splice() : 특정 인덱스 값 삭제 , pop() : 마지막 값 삭제
const rainbow = ["red", "orange", "yellow", "green", "sky", "blue", "purple"];

rainbow.shift();
rainbow.pop();
console.log(rainbow); // "orange", "yellow", "green", "sky", "blue"

rainbow.splice(1, 3); // start, deleteCount = 삭제를 시작 할 인덱스, 삭제할 갯수
console.log(rainbow); // "orange", del{"yellow", "green", "sky",} "blue" => 'orange', 'blue'

// 배열의 전체 인덱스의 숫자를 파악 할때 사용하는 프로퍼티 = length;
console.log(rainbow.length); // 2, 현재 모든 요소가 삭제되고 2개 남음

// 참고! 배열의 경우에도 const로 선언했을 경우 인덱스를 이용해서 특정값을 수정하거나, 값을 추가하는 것이 가능함.
// 단 const로 수정하는 경우, 모든 배열을 다 써서 수정하는 것은 불가능함
