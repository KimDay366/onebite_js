// section 04 - 02 . DOM API - 1

// DOM 요소 접근 : DOM > node > attribute node > text node

// [예시]
// document - body ㅡ div.name ㅡ 강아지
//                 ㄴ div.color ㅡ 갈색
//                 ㄴ div.age ㅡ 2살
// => document > body > div > .color > '갈색'

// ==============================================================================
// 1. 특정 요소 1개만 가져오는 API

// 1.1) getElementById : 특정 요소를 id 값을 사용해 가지고 옴
let $name = document.getElementById("name");
console.log($name);

// 1.2) querySelector : 괄호 속 기준과 일치하는 '첫번째 & 단 하나의 요소'만 반환해서 나옴
//                    태그, 클래스, 아이디 , 3가지 복합 사용 가능
let $animalInfo = document.querySelector("div.animal-info");
let ageEle = document.querySelector("div#age");

console.log($animalInfo);
console.log(ageEle);

// ==============================================================================

// 2. 여러 요소를 가지고 오는 DOM API 메서드들
// 2.1) .querySelectorALL() : 괄호 속 기준에 일치하는 모든 요소를 찾아내 반환
let $info = document.querySelectorAll("div.info");
console.log($info);

// 2.2) .getElementsByClassName() : class name으로 여러 요소를 찾아내는 API 메서드
let $infoC = document.getElementsByClassName("info");
console.log($infoC);

// 2.3) .getElementsByTagName() : 요소들의 태그 이름을 써서 동일한 이름 여러개를 찾아냄
let $divEle = document.getElementsByTagName("div");
console.log($divEle);

// ==============================================================================

// 3. 요소들을 찾아내 속성을 변경하는 DOM API 프로퍼티 or 메서드들
// 3.1) .className : 찾아낸 요소의 class 이름을 바꿔줌 (덮어쓰기, 전체 교체)
//                   바꾼다고 해서 html 기본 파일의 내용이 바뀌지는 않고,
//                   웹브라우저의 개발자 창에서 확인 한 엘리먼트만 바뀜
let $test = document.getElementById("test");
$test.className = "dogColor";

console.log($test);
console.log($test.className);

// 3.2) .classList : 찾아낸 요소의 class를 추가/제거 가능.
let $color = document.getElementById("color");
$color.classList.add("dog-color");
$color.classList.remove("info");

console.log($color);

// 3.3) .id : 선택한 요소의 id 값을 새로 넣거나 바꿀 수 있음
$animalInfo.id = "animal";

console.log($animalInfo);

// 3.4) .textContent : 선택한 요소에 작성 된 텍스트를 변경 가능
$test.textContent = "나만 없어 강아지";

// 3.5) .style : 선택한 요소의 css를 수정 가능
$test.style.color = "red";
$test.style.fontSize = "30px";
