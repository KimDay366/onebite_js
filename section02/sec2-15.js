// section02 - 15 . 배열 메서드 2

// 1) .concat()
// : 두 개의 배열을 합쳐주는 메서드, 배열 그대로 유지함
// : 기준이 되는 배열.concat(합칠 배열)
let js = ["js", 35];
let hj = ["hj", 39];

let marriage = js.concat(hj);
marriage.push("will you marry me?");
console.log(marriage);

// ============================================

// 2) .join()
// : 두 개의 배열을 합쳐 주지만 1개의 문자 열로 변환 되어 저장 됨

let color = ["red", "blue", "green", "yellow"];
console.log(color.join()); // 구분자 지정을 하지 않으면 쉼표로 각 요소를 구분함
console.log(color.join(" ")); // 큰 따옴표 사이에 구분자를 어떻게 넣어 줄 것인지 정할 수 있음
console.log(color.join(" - "));

let together = js.join(hj);
console.log(together);
// jshj,3935 -> js "hj,39" 35
// hj 배열이 "구분자" 역할이 되면서 먼저 합쳐져 "hj,39"가 생성되고,
// 그 값이 js 배열의 구분자 역할이 되면서 값의 가운데 들어가게 됨.

let allTogether = js.concat(hj).join(" / ");
console.log(allTogether); // 출력 : js / 35 / hj / 39

// ============================================

// 3) .sort()
// : 원하는 배열의 순서를 오름차순으로 정렬함
// : 새로운 변수에 담더라도, 해당 메서드를 사용하면 본래의 배열 또한 오름차순화 됨

const rainbow = ["red", "orange", "yellow", "green", "sky", "blue", "purple"];

let sortRaining = rainbow.sort();

console.log(sortRaining); // ['blue', 'green', 'orange', 'purple', 'red', 'sky', 'yellow']
console.log(rainbow); // ['blue', 'green', 'orange', 'purple', 'red', 'sky', 'yellow']

//

// 내림차순으로 만들고 싶을때는 .sort() 메서드와 함께 compare 함수를 만들어 사용한다
const compareString = (a, b) => {
  // a 요소, b 요소를 하나씩 불러와 비교하는 함수
  if (a > b) return -1; // a 가 b 보다 크면 -1 => a가 앞으로 (유지)
  else if (a < b) return 1; // a 가 b 보다 크면 1 => b가 앞으로 (이동)
  else return 0; // 같은 경우 순서 유지
};

let colors = ["green", "blue", "purple"];
colors.sort(compareString);
console.log(colors); // ['purple', 'green', 'blue']

// ["green", "blue", "purple"]
// -> ( "green", "blue" ) 비교 , 그린이 크므로 그대로 유지
// -> ( "blue", "purple" ) 비교 , 퍼플이 크므로 퍼플 앞으로 = 순서 교환 [ 'green', 'purple', 'blue' ]
// -> ( 'green', 'purple' ) 비교, 퍼플이 크므로 퍼플 앞으로 = 순서 교환 [ 'purple', 'green', 'blue' ]
// 모든 순서가 제대로 바뀌었다면 정렬 완료 후 종료

//

// 숫자의 경우 사전식 오름차순을 사용하기 때문에 실제 숫자와 다르게 정렬 된다
const number = [1, 200, 2, 3, 500, 1200, 1080, 8];
console.log(number.sort()); // [1, 1080, 1200, 2, 200, 3, 500, 8]

const compareNumber = (a, b) => {
  return a - b;
};

number.sort(compareNumber);
console.log(number); // [1, 2, 3, 8, 200, 500, 1080, 1200] 본래의 크기대로 정렬

const reCompareNum = (a, b) => {
  //   if (a > b) return -1;
  //   else if (a < b) return 1;
  //   else return 0;
  return b - a;
};

number.sort(reCompareNum);
console.log(number);

// ============================================

// 4) .reduce()
// : .foreach()로 배열의 합을 구하는 것과 동일한 역할을 함
//  [배열].reduce((acc, cur, idx )=>{},0)
//   accumulate : 계산된 반환 값을 누적,
//   currente : 현재 처리할 값
//   index :처리할 값의 인덱스
//   함수 다음 0 = 초기값 셋팅, 숫자를 바꾸면 바꾼 값으로 초기값이 더해짐

const numbers = [1, 100, 25, 50];
let sum = 0;

numbers.forEach((elm) => {
  sum += elm;
});

console.log(sum);

let reSum = numbers.reduce((acc, cur, idx) => {
  console.log(acc, cur, idx);
  return acc + cur;
}, 0);

// 0 1 0     : 0 초기값,             1 0번째 인덱스 값
// 1 100 1   : 0 + 1 값,           100 1번째 인덱스 값
// 101 25 2  : (0 + 1) + 100값,     25 2번쨰 인덱스 값
// 126 50 3  : ((0+1)+100)+ 25 값 , 50 3번째 인덱스 값

console.log(reSum); // (((0+1)+100)+ 25) + 50 = 176

// ============================================

// 5) Array.isArray()
// : 배열인지 아닌지 확인하는 메서드
// : 여기에서 사용된 Array = 배열 관련 일을 하겠단 의미.
//   new Array - new 신규 + 배열 = 배열 만들거임
//  Array.isArray() - 배열 + .isArray 배열 마즘? = 배열인지 확인 할 거임

let a = Array.isArray("string"); // 문자열은 배열이 맞느냐?
let b = Array.isArray([1, 2, 3]); // 대괄호 안에 쓴건 배열 맞느냐?

console.log(a, b); // false , true
