// 미션1. DOM API
// index.js 파일을 생성하고, 파일의 내부에 버튼 클릭 시 텍스트 요소의 내용을 변경하는 함수를 작성하세요.
// DOM API를 사용하여 요소를 선택하고, 이벤트 리스너를 추가해야 합니다.

let $textBox = document.getElementById("text");
let $textChangeBtn = document.getElementById("changeTextBtn");

$textChangeBtn.addEventListener("click", () => {
  $textBox.textContent = "Hello, Javascript!";
  $textBox.style.color = "orange";
  $textBox.style.fontWeight = "bold";
  $textBox.style.backgroundColor = "gray";
});

// ======================================================================

// 미션2. DOM API & Select Tag
// id 가 app인 div 요소의 내부에 아래의 코드들을 넣어주세요.

let $app = document.getElementById("app");
// $app.innerHTML =
//   '<select id="skills"><option value="javascript">Javascript</option><option value="next">Next.js</option><option value="react">React.js</option><option value="typescript">TypeScript</option></select>';
// 꼼수 쓰려다 걸림..

// 단, createElement, appendChild를 사용해서 생성해주세요.
let $selectSkill = document.createElement("select");
$selectSkill.id = "skills";

$app.appendChild($selectSkill);

let skillList = ["javascript", "nextJS", "reactJS", "typescript"];

let skillOpt;

for (let i = 0; i < skillList.length; i++) {
  skillOpt = document.createElement("option");
  skillOpt.value = skillList[i];
  skillOpt.textContent = skillList[i];
  $selectSkill.appendChild(skillOpt);
}
// select 태그의 값을 변경할 때 마다, 변경된 값을 출력하는 기능도 작성해주세요.

$selectSkill.addEventListener("change", (ev) => {
  let viewText = `선택한 스킬 : ${ev.target.value}`;
  console.log(viewText);
  window.alert(viewText);
});
