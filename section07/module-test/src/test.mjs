const num = 10;

console.log(num);
// 모듈화 전 : num 변수가 이미 선언되어 index.js 만 출력되고,
//            test.js 변수는 사용할 수 없다는 에러가 나옴
// 모듈화 후 : 20, 10 정상 출력

// ============================================
// 1. 식별자 내보내기 [기본] - 개별적으로 하나씩 선언함
export const newNum = 35;

export function add(num1, num2) {
  return num1 + num2;
}

export function User(name) {
  this.name = name;
}

// 2. 내보낼 식별자를 한번에 묶어서 내보내기
// export {newNum, add, User}

// 3. 내보낼 식별자가 1개인 경우 default를 써서 내보냄 -> import가 간결해짐
// export default num;
// 단, default 키워드는 function에만 사용 가능 (변수 const, let, var 사용 불가)
