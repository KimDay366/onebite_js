const num = 20;

console.log(num);
// 모듈화 전 : num 변수가 이미 선언되어 index.js 만 출력되고,
//            test.js 변수는 사용할 수 없다는 에러가 나옴
// 모듈화 후 : 20, 10 정상 출력

// 1. 불러오기 방식 [기본] - 식별자를 하나하나 불러오기
import { newNum, add, User } from "./test.mjs";

console.log(newNum);
console.log(add(1, 2));
console.log(new User("js"));

// 2. 한번에 불러오기 - 외부 파일에서 export로 선언된 모든 식별자를 한번에 불러와 객체로 담기
import * as testM from "./test.mjs";

console.log(testM);
console.log(testM.newNum);
console.log(testM.add(5, 6));
console.log(new testM.User("java"));

// 3. default로 선언된 식별자의 경우, 별도의 네이밍으로도 사용 가능
// import testUserM from "./test.mjs";
// console.log(new testUserM("javascript"));
