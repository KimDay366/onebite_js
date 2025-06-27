//section02 - 5. 조건문

// 1. if문
// True, False 만 판단하여 실행되는 조건문,
// 조건에 맞으면 if{} 구문이 실행되고 조건에 맞지 않으면 실행되지 않거나 else{} 구문이 실행됨
// else if{}를 사용하여 여러 조건을 만들 수 있음.
// 단 이미 지나친 조건에 대해서는 false 여야 아래쪽에 있는 else if 조건을 확인 할 수 있음.

// ======================================================

// 2. switch ~ case 조건문
// 검사해야 할 조건이 많은 경우 해당 조건문을 사용하여 적용
// switch(값 정보)
//      case "조건 값" : 조건에 맞춰 수행 될 내용 + break
//          break가 사용되지 않으면 해당 조건값 이후의 모든 내용이 수행 됨.
//      default : 기본으로 수행 될 내용 => 조건에 모두 맞지 않는 값이 들어올때 적용 할 내용

let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("bnn");
    break;
  case "apple":
    console.log("ap");
    break;
  case "grape":
    console.log("gr");
    break;
  default:
    console.log("none");
}
