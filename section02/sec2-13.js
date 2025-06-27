// section02 - 13 . 반복문
// 특정 작업을 반복적으로 수행 할 때 사용

// 1) for 문
// 코드 안에 반복이 필요한 수 만큼 변수로 선언하여 반복 시킬 수 있음.
// 특정 변수에 대한 지정과 움직임 자체를 ()괄호 안에 써서 움직임
for (let i = 1; i < 6; i++) {
  console.log(i);
}

// 2) while 문
// 괄호 안에 조건에 대한 정보만 적고, 변수 선언 및 변경은 각각 이루어짐.
let i = 1;
while (i < 6) {
  console.log(i);
  i++;
}

// ================================================================================
// 반복문을 통해 배열에 각각 접근하는 방법

// 1) for문 + 배열
let rainbow = ["red", "orange", "yellow", "green", "sky", "blue", "purple"];

for (let i = 0; i < rainbow.length; i++) {
  console.log(rainbow[i]);
}

// ================================================================================
// 객체를 배열화하여 객체의 키/값에 각각 접근하는 방법
const person = {
  name: "홍길동",
  age: 30,
  height: 180,
};

// 1) 키를 불러와 접근하기
// = Object.keys()
// = 키 & 값 모두 한쌍으로 값을 사용해야 하는 경우
let newPi = Object.keys(person); // 객체의 키를 하나의 배열로 만들기

for (let i = 0; i < newPi.length; i++) {
  console.log(`key: ${newPi[i]} , value : ${person[newPi[i]]}`);
  // 대괄호를 두번 사용하게 되면, 한번에 해당 키를 인식하기 어려움

  let newPKey = newPi[i];
  console.log(`key: ${newPKey} , value : ${person[newPKey]}`);
  // 키를 불러와서 해당 인덱스에서 사용하는 변수를 만들어,
  // 여러곳에 다양하게 사용할 수 있음
}

// 2) 값을 불러와 접근하기
// = Object.values()
// = 객체에서 값만 필요 한 경우
let newPV = Object.values(person); // 객체의 값을 하나의 배열로 만들기

for (let i = 0; i < newPV.length; i++) {
  console.log(`value : ${newPV[i]}`);
}

// 3) 키와 값을 한번에 배열로 반환하기
// = Object.entries()
// = 프로퍼티 1개를 1개의 배열로 만들어 배열 안에 배열로 존재하게 함
// person = [ ['name', "홍길동"],  ['age', 30],  ['height', 180] ];

let newPP = Object.entries(person); // 객체의 값을 하나의 배열로 만들기

for (let i = 0; i < newPP.length; i++) {
  console.log(`Key : ${newPP[i][0]} , value : ${newPP[i][1]}`);
  // 모든 배열의 0번쨰는 키 , 1번째는 값이므로 해당 인덱스까지 함께 붙여서 불러옴
}

// ========================================================
// 그 외 여러 반복문

// 1) for ~ of : 반복문에서 모든 배열의 요소에 접근해야 할 떄
let arr = ["a", "b", "c", "d", "e"];
for (let i of arr) {
  let arrValue = i; // i 자체가 해당 배열의 값 자체가 됨
  console.log(arrValue);
}

// 2) for ~ in : 반복문에서 모든 객체의 요소에 접근해야 할 때
const ps = {
  name: "홍길동",
  age: 30,
  height: 180,
};

for (let key in ps) {
  console.log(`key : ${key}, value : ${ps[key]}`); // key 자체가 키가 됨.
}
