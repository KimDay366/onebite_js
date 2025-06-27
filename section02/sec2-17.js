// section02 - 17 . spread 와 rest

// 1) spread
// : 반복적으로 사용 되는 배열이나 객체를 다른 값에 펼치는 역할
// : 원하는 배열/객체 내부에 "...배열명/객체명" 을 쓰면, 순서대로 기존 정보를 불러오고 나머지 추가 정보가 합쳐짐

// 1-1) 객체 spread

const rose = {
  type: "flower",
  price: 1000,
  from: "Korea", // 신규 프로퍼티가 추가 될 경우, 해당 값도 전달 됨!
};

const redRose = {
  //   type: "flower",
  //   price: 1000,
  ...rose,
  color: "red",
};

console.log(rose);
console.log(redRose);

// 1-2) 배열 spread
let lightC = ["red", "orange", "yellow", "lemon"]; // 신규 요소가 추가 될 경우, 해당 값도 전달 됨!
let darkC = ["blue", "navy", "purple"];
let rainbow = [...lightC, "green", ...darkC];

console.log(rainbow);

// 1-3) 배열과 객체를 합쳐보기
let arrobjToObj = { ...lightC, ...rose }; // 객체 안에 배열을 넣으면, 인덱스가 key 가 되고 배열값이 값이 됨

console.log(arrobjToObj); //{0: 'red', 1: 'orange', 2: 'yellow', 3: 'lemon', type: 'flower', price: 1000, from: 'Korea'}

// let arrobjToArr = [...lightC, ...rose]; // 배열 안에 객체를 넣으면 에러 메세지 출력

// ==================================================================================

// 2) rest
// : 남은 매게변수를 가져와 다른 배열/객체로 묶어서 관리 해 줌
// : 구조 분해 할당과 함께 사용 되는 "..."이며, 할당이 끝난 요소/프로퍼티를 가져와야 하므로 항상 맨 뒤에 사용됨

// 2-1) 객체 rest
const blueRose = {
  type: "flower",
  price: 5000,
  color: "blue",
  from: "korea",
};

const { type, price, ...rest } = blueRose;
console.log(type, price, rest);
// flower / 5000 / {color: 'blue', from: 'korea'}
// 구조 분해 할당 이후 남은 프로퍼티를 모두 ...rest가 가져가 새로운 객체로 가지고 있음

const nk = {
  type: "human",
  age: 39,
  from: "korea",
};

const { type: typen, ...nkrest } = nk;
console.log(typen, nkrest); // rest가 많이 사용될 경우 이런식으로 변수명을 다르게 지정 가능

// 2-2) 배열 rest
let colors = ["red", "orange", "yellow", "lemon"];
const [c1, c2, ...coRest] = colors;

console.log(c1, c2, coRest);
// red / orange / ['yellow', 'lemon']

// rest 기능을 함수에 응용하기
// : 함수에 사용되는 매게변수의 숫자를 가늠할 수 없을때 주로 사용되는 방법

const print = (a, b, c, d) => {
  console.log(c, d);
};

print(1, 2, 3, 4); // 3,4 출력
print(1, 2, 3, 4, 5, 6); // 3,4 출력 => 원하는 출력은 3, 4, 5, 6 이였음

const printR = (a, b, ...r) => {
  console.log(r);
};

printR(1, 2, 3, 4); // [3,4] 출력
printR(1, 2, 3, 4, 5, 6); // [3, 4, 5, 6] 출력

// ==================================================================================

// 3) Spread 와 Rest 함께 써 보기

const printSR = (...nr) => {
  console.log(...nr);
  // rest ... 점표기법 사용
  // : 이걸 쓰지 않으면 적용되는 배열에 맞춰서 매게변수를 계속 맞춰주어야 함
};

const num = [1, 2, 3];
printSR(...num); // spread ... 점표기법 사용
// : 이걸 쓰지 않으면 num[0], num[1] .. 이런식으로 계속 써야 함
// : 코드가 과하게 길어지고, 값이 추가 될 떄마다 같이 수정 해 줘야함
