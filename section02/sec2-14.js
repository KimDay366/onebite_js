// section02 - 14 . 배열 내장함수(메서드)
// 배열을 다양하게 사용할 수 있는 함수 = 메서드

// 1) .foreach()
// : 모든 배열값을 불러와 정보를 쓸 때 사용, 콜백함수형태
// .foreach((value, index, array )=>{})
//   value : 배열의 값 불러오기, index (선택) : 배열의 인덱스 넘버 표기,
//   array(선택) : foreach로 선택한 배열의 전체 리스트가 나옴
let arr1 = ["a", "b", "c", "d", "e"];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

arr1.forEach((ele, i, ar1) => {
  console.log(ele);
  console.log(`${i}번째 요소는 ${ele}입니다`);
  console.log(`전체 배열의 정보는 ${ar1}입니다`);
});

// ===========================================================

// 2) .map()
// : 모든 배열값에 연산을 하여 기존 값을 바꿀 때 사용, 콜백함수형태
// .map((value, index, array)=>{})
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] + 10);
}

let arr3 = arr1.map((elm) => {
  return elm + 10;
});

console.log(arr3);

// ===========================================================

// 3) .at()
// : 배열의 마지막 값을 쉽게 불러올 떄 사용
// .at(-1) = 마지막 값 가져오기, .at(n) = 인덱스 n의 값 불러옴
const rainbow = ["red", "orange", "yellow", "green", "sky", "blue", "purple"];

console.log(rainbow.at(3)); //green
console.log(rainbow.at(-1)); //purple

// ===========================================================

// 4) .includes()
// : 매개변수로 받은 값이 배열에 있는지 없는지 확인하는 메서드
// .includes(원하는 값, 찾고자 하는 인덱스 값의 시작값)

console.log(rainbow.includes(3)); //false
console.log(rainbow.includes("pink")); //false
console.log(rainbow.includes("red")); //true

// orange의 인덱스는 1
console.log(rainbow.includes("orange", 1)); //true = 범위 내 포함하고 있음
console.log(rainbow.includes("orange", 2)); //false = 범위 내 포함하지 않음

// ===========================================================

// 5) .indexOf()
// : 매게변수로 받은 값이 배열의 몇번째에 있는지 확인하는 메서드
// .indexOf(원하는 값, 찾고자 하는 인덱스 값의 시작값)
console.log(rainbow.indexOf("yellow")); // 2 출력
console.log(rainbow.indexOf("white")); // -1 없는 값을 찾으면 음수가 나옴 = false

console.log(rainbow.indexOf("orange", 1)); // 1 = 범위 내 포함하므로, 해당 인덱스 출력
console.log(rainbow.indexOf("orange", 2)); // -1 = 범위 내에 없으므로 음수가 나옴 = false

// ===========================================================

// 6) .findIndex()
// : 찾고자 하는 값이 "배열 내 객체"인 경우, 값을 찾아 인덱스를 확인하는데 사용하는 메서드
let colors = [
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
  { id: 3, color: "green" },
];

let findIndexColors = colors.findIndex((elem) => elem.color === "green");
// elem = 배열 내 객체가 통째로 담김,
// elem.color = 객체가 담겨있기 때문에 color 키를 사용해 원하는 값을 찾을 수 있음
console.log(findIndexColors); // 2, 해당한 인덱스가 나옴

colors.findIndex((elem, i, arrColor) => {
  console.log(`${i}번쨰 값 - id : ${elem.id}, color : ${elem.color}`);
  console.log(arrColor);
});

// ===========================================================

// 7) .find()
// : 찾고자 하는 값이 "배열 내 객체" 인 경우, 찾아낸 값 그대로 반환

let findVaColors = colors.find((elem) => elem.color === "green");
console.log(findVaColors); // {id: 3, color: 'green'}, 해당 요소가 그대로 출력 됨

let findPink = colors.find((elem) => elem.color === "pink");
console.log(findPink); // 원하는 값이 없는 경우 undefined 출력

// ===========================================================

// 8) .filter()
// : 기준과 부합되는 값을 찾아내어 새로운 배열로 만들어 냄
let filterColors = colors.filter((elem) => elem.id > 1);
console.log(filterColors);
// {id: 2, color: 'blue'}, {id: 3, color: 'green'}
// => 조건에 부합하는 모든 요소를 가지고 옴

let filterRainbow = rainbow.filter((elem, idx) => idx > 3);
console.log(filterRainbow);
// => 해당 배열 조건에 부합하는  ['sky', 'blue', 'purple'] 가져옴,

rainbow.filter((elem, idx) =>
  idx > 3 ? console.log(elem) : console.log("기준미달")
);
// => 기준미달 4회 출력 후 ['sky', 'blue', 'purple'] 각각 한번씩 출력

// ===========================================================

// 9) .slice()
// : 원하는 범위만큼의 배열 요소를 가져와 새롭게 넣음
// .slice(시작인덱스, 마지막인덱스 - 1) => 출력되는 인덱스

let silceColor = colors.slice(1, 2); // 시작인덱스 1 , 마지막 인덱스 2-1 = 1    => 인덱스 1만 가져옴
console.log(silceColor);

let silceRainbow = rainbow.slice(2, 5); // 시작인덱스 2, 마지막 인덱스 5-1 = 4    => 인덱스 2,3,4 가져옴
console.log(silceRainbow);
