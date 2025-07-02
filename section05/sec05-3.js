// section 05 - 3 . this와 화살표 함수

// 일반함수 : function 키워드 사용, 함수 선언식, 호이스팅 됨
// 화살표 함수 : 함수를 변수에 할당, 함수 표현식, 호이스팅 되지 않음(변수에 담기니까)

function Counter() {
  this.count = 0;
  setInterval(function () {
    this.count++;
    console.log(this.count);
  }, 10000); // 일반 선언식 함수 사용
}

const counter = new Counter();
// 생성자 함수로 만들긴 했지만, 콜백함수는 전역 변수를 가리키기 때문에
// 콘솔창에 'NaN'이 2초마다 추가 생성 됨

function CounterDir() {
  this.count = 0;
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 10000); // 화살표 함수 사용
}

const counterDir = new CounterDir();
// 동일한 콜백함수이지만, 개발자가 원하는 방식으로 가동 됨

// 화살표 함수 : 렉시컬 스코프가 적용되어, 선언된 위치를 보고 상위에 있는 this를 참조

// 렉시컬 스코프 : 함수가 호출된 위치에 따라 스코프가 결정되지 않고,
//               함수의 선언 위치에 따라 해당 스코프가 결정되는 것

// =====================================================================

const cafe = {
  brand: "쮸커커피",
  menu: "",
  print: () => {
    console.log(this);
  },
};

cafe.print();
// window{...} 전역 객체가 나옴
// 화살표 함수는 자신이 선언 된 위치의 "상위" 객체를 출력하기 때문!
// 메서드를 활용하기 위해서라면 화살표 함수가 아닌 표현식 함수를 사용해야함
