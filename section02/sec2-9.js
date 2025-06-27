// section02 - 9. 함수 표현식과 화살표 함수

// 함수 선언식
// function 키워드 옆에 함수의 이름을 작성하여 함수 이름 자체를 부름
// 함수 선언문 전체가 호이스팅 되어 정상으로 이루어짐
function func1() {
  console.log("hi");
}

func1();

// ===============================================

// 함수 표현식 = 화살표 함수
// 변수에 함수를 하나의 값처럼 할당, 변수 명을 함수의 이름으로 부름.
// 변수에 지정하는 구조이기 때문에 호이스팅 될 때 변수명 만 호이스팅 되고,
// 명령어 자체는 호이스트 되지 않은걸로 보여짐
const func2 = function () {
  console.log("hello");
};

func2();

// 화살표 함수 축약하기
const add1 = function (a, b) {
  return console.log(a + b);
};

const add2 = (a, b) => {
  return console.log(a + b);
};

const add3 = (a, b) => console.log(a + b); // return만 하는 경우 한 줄로 축약 가능

add1(1, 2);
add2(2, 4);
add3(3, 6);

// ===============================================

// 콜백함수
// 하나의 매개 변수처럼 넘겨받아 운영되는 함수
// funcA가 메인함수이고, funcB / funcC가 callback 자리에 들어가서 운영됨.

const funcA = (a, b, callback) => {
  let result = a + b;
  callback(result);
};

const funcB = (reB) => {
  console.log(reB);
};

const funcC = (reC) => {
  console.log(reC * 2);
};

funcA(1, 2, funcB);
funcA(3, 4, funcC);

// 위의 내용처럼 변수 선언을 하여 사용가능하지만,
// 아래처럼 바로 메인함수에 콜백 함수만 정의하고, 메인함수 선언 시 함수를 작성하여 사용 가능
const testFunc = (callback) => {
  callback();
};

testFunc(() => {
  console.log("test");
});
