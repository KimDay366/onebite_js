//section02 - 7. 스코프
// scope : 변수와 함수가 영향을 미치는 범위
// 전역 스코프 - global scope : 전체 영역
// 지역 스코프 - local scope : 특정 구역
//     ㄴ 함수 스코프 function scope : 특정 함수 내에 영역
//     ㄴ 블럭 스코프 block scope : 반복문, 조건문 같은 특정 문법({블럭}) 내 영역

// let, const 키워드 : JS ES6 신규 변수 선언 키워드, 동일한 변수를 중복 선언하면 오류로 처리함
// var 키워드 : JS의 오래된 변수선언 키워드, 동일한 변수를 중복 선언 가능하여 마지막 선언한 값을 최종 값으로 인정
let num1 = 10;
let num1 = 100; // 선언 인정 안됨

var num2 = 20;
var num2 = 200; // 선언이 인정되고, 마지막 넣은 100이 최종 값

console.log(num1);
console.log(num2);

// 함수 스코프 & let, var
function print() {
  for (let i = 0; i < 10; i++) {
    // 블럭 스코프 영역
    console.log(i);
  }
  console.log(i); // 반복문 밖에서 i를 호출했기 때문에 해당 값은 나오지 않음
}

printScope(); // 오류를 보기 위하여 오류 함수를 아래로 선언함
console.log("===========================");
print();

function printScope() {
  for (var i = 0; i < 10; i++) {
    // 블럭 스코프 영역
    console.log(i);
  }
  console.log(i); // 반복문에서 var를 사용해서 i를 선언했기 때문에 함수 안에서 라면 어디서든 i값이 나옴
}
