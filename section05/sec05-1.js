// section 05 - 1 . 자바스크립트의 this 1

// this : 자신이 속한 객체를 가리킴, 함수 호출에 따라 this에 바인딩 되는 값이 달라짐
// [ 함수 호출 방식 ]        [ this에 바인딩 되는 값 ]
// 1. 일반 함수 호출    →  전역 객체인 window {...} 객체 출력
// 2. 메서드 호출       →  사용된 메서드의 객체로 출력 됨 (객체 안에 객체에서 this가 사용되면 안쪽 객체가 나오는 등)
// 3. 생성자 함수 호출  →
// 4. 콜백 함수 호출    →

// ============================================================

// 0. 전역 공간에서의 this 값 확인
console.log(this); // window {...} = 윈도우 전역 객체

// ============================================================

// 1. 일반 함수 호출

function func() {
  console.log(this);
}

func();
// window {...} = 윈도우 전역 객체
// 호출 한 위치가 전역이기 때문에, 윈도우 전역 객체가 나옴

// ============================================================

// 2-1. 메서드 호출 = 객체의 프로퍼티 함수
const cafe = {
  brand: "쮸커커피",
  menu: "americano",
  print: function () {
    console.log(this);
  },
};

cafe.print();
// {brand: '쮸커커피', menu: 'americano', print: ƒ}
// 메서드가 소속 된 객체의 정보가 나오기 때문에, 객체 cafe 의 정보가 this로 출력 됨

const cafeRe = {
  brand: "쮸커커피",
  menu: "americano",
  newCafe: {
    brand: "이디야",
    menu: "latte",
    print: function () {
      console.log(this);
    },
  },
};

cafeRe.newCafe.print();
// {brand: '이디야', menu: 'latte', print: ƒ}
// print() 메서드가 cafeRe 안에 있는 newCafe 객체에서 사용되므로, 객체 newCafe의 정보가 this로 출력 됨

// ============================================================

// 2-2. 프로퍼티 호출(메서드)

const likeCafe = cafe.print;

likeCafe();
// window {...} = 윈도우 전역 객체
// 소속된 공간이 'cafe'일지라도 최종적으로 호출 한 위치가 전역이기 때문에, 윈도우 전역 객체가 나옴
