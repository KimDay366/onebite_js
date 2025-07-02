// section 05 - 2 . 자바스크립트의 this 2

// this : 자신이 속한 객체를 가리킴, 함수 호출에 따라 this에 바인딩 되는 값이 달라짐
// [ 함수 호출 방식 ]        [ this에 바인딩 되는 값 ]
// 1. 일반 함수 호출    →  전역 객체인 window {...} 객체 출력
// 2. 메서드 호출       →  사용된 메서드의 객체로 출력 됨 (객체 안에 객체에서 this가 사용되면 안쪽 객체가 나오는 등)
// 3. 생성자 함수 호출  →  새로 생성할 객체, 인스턴스를 가리킴
// 4. 콜백 함수 호출    →  콜백 함수가 전역에서 움직이므로, 전역 객체를 출력

// ============================================================

// 3. 생성자 함수 호출
// 생성자 함수 : 새로운 객체를 생성, new 키워드 사용

function Cafe(menu) {
  console.log(this); // 비어있는 Cafe{} 객체가 출력 됨, 생성할 객체가 출력되는것
  this.menu = menu;
}

let myCafe = new Cafe("latte");
console.log(myCafe);
// Cafe {menu: 'latte'}
// 이 전에 new 키워드로 생성한 객체가 출력 되는 것

// ============================================================

// 4. 콜백 함수 호출
const cafeB = {
  brand: "쮸커커피",
  menu: "",
  setMenu: function (menu) {
    this.menu = menu;
  },
};

function getMenu(menu, callback) {
  callback(menu);
}

getMenu("수박주스", cafeB.setMenu);
// 전역에서 호출해서 썻기 때문에
// window.menu = '수박주스' 가 되어 있음

console.log(cafeB);
