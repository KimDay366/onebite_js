// section 04 - 04 . 여러가지 폼 조작

// Form Tag : 사용자와의 상호작용을 가능하게 하는 HTML 요소
//            input, select, textarea 등등

// 1) select control
let $fruitSel = document.getElementById("selFruit");

// 사용자 선택에 따라 콘솔 창에 해당 값을 출력
$fruitSel.addEventListener("change", (ev) => {
  console.log(`사용자 선택 과일 : ${ev.target.value}`);
});

$fruitSel.remove(1); // index 1 = 2번쨰 바나나, 삭제

// =========================================================

// 2) input control
let $userId = document.getElementById("userName");
let $userPW = document.getElementById("userPW");

const $loginBtn = document.querySelector("button");

$loginBtn.addEventListener("click", () => {
  console.log(`사용자 ID : ${$userId.value}`);
  console.log(`사용자 PW : ${$userPW.value}`);
});

$userId.value = "javascript"; //기본 입력값 수정

$userPW.addEventListener("input", (eve) => {
  console.log(eve.target.value);
});
