// 미션1. switch case 문 작성하기
// 생성한 animal 변수에 할당된 값이 cat일 경우에 '고양이'가 출력될 수 있도록 조건문을 알맞게 작성해주세요.
// case 문은 dog, tiger, cat, lion으로 나눠서 작성하고, case문의 내부에는 각각의 동물을 출력하는 코드를 작성해주세요.

// == 답변 내용 ==
let animal = "cat";

switch (animal) {
  case "tiger":
    console.log("호랑이");
    break;
  case "dog":
    console.log("개");
    break;
  case "cat":
    console.log("고양이");
    break;
  case "lion":
    console.log("사자");
    break;
  default:
    console.log("그 외 동물들");
}

// 미션2. 함수 작성하기
// 아래의 코드가 알맞게 작동하도록 코드를 완성해주세요.

let answer = "";

function connectStrings(str1, str2) {
  // 코드 작성
  // == 답변 내용 ==
  if (str1 === undefined && str2 === undefined) {
    return (answer = "hello javascript");
  } else {
    return (answer = str1 + " " + str2);
  }
}

connectStrings();

console.log(answer); // 출력결과 : hello javascript

// == 답변 내용 ==
connectStrings("hi", "js");

console.log(answer); // 추가 출력 : hi js
