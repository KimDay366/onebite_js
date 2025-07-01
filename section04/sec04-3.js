// section 04 - 03 . DOM API - 2

// 1. 요소 노드 생성하기

let $type = document.createElement("div");
$type.className = "info-item";
$type.id = "type";
$type.textContent = "시고르자브종";

console.log($type); // div 태그 안에 만듬

let $typeText = document.createTextNode("시고르자브종");
console.log($typeText); // 순수 글씨로 된 노드 1개가 생성 됨

// ==========================================================

// 2. DOM에 요소 삽입하기
let $animalInfo = document.querySelector("div.animal-info");
$animalInfo.appendChild($type); // 자식 div를 신규 삽입
$animalInfo.appendChild($typeText); // 해당 div안에 문구 삽입

// ==========================================================

// 3. 요소 생성/삽입 응용하기

let $btn = document.createElement("button");
$btn.id = "newBtn";
$btn.className = "click";
$btn.textContent = "Click Here!";

$animalInfo.querySelector("div#name").appendChild($btn);

$btn.addEventListener("click", () => {
  window.alert("나만 왜 없어 댕댕이이이이!!!");
});

//.addEventListener('이벤트 종류', 실행 할 함수) : 어떠한 요소에 이벤트가 발생하면, 미리 작성해 둔 함수가 실행되게 함

// ==========================================================

// .innerHTML : 선택한 요소의 자식 요소나 내부 정보가 있으면 그 정보를 문자열로 가지고 오거나
//              문자열을 작성해 적용하면 기존의 자식 요소는 모두 제거하고, 새로운 문자열만 입력함
let textAnimal = $animalInfo.innerHTML;
console.log(textAnimal);

let catText = "cat";
$animalInfo.innerHTML = `<div id='${catText}' class='info-item'>${catText}</div>`;
// 다 사라지고 해당 요소만 남음
