export default function TabBar({ $app, initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;

  // 1) #app 아래에 tab btn을 감싸주는 div 박스 만들기 : <div class="tab-bar"></div>
  this.$target = document.createElement("div");
  this.$target.className = "tab-bar";
  $app.appendChild(this.$target);

  // 2) #app.tab-bar > div btn들 만들기
  this.template = () => {
    let temp =
      '<div id="all">전체</div><div id="penguin">펭귄</div><div id="koala">코알라</div><div id="panda">판다</div>';

    return temp;
  };

  this.render = () => {
    // 3) 앞서 만든 #app.tab-bar > div btn을 넣어주기
    this.$target.innerHTML = this.template();

    // 4) 클릭 시 누른 동물로 현재 상태를 변경하는 기능 넣어주기
    let $currentTab = document.getElementById(this.state); // 현재 누른 값의 id를 가져와야 함
    $currentTab ? ($currentTab.className = "clicked") : ""; // 삼항연산자 버전 : id 값이 있는 경우, 해당 아이디에 클릭 클래스 넣어주기
    $currentTab && ($currentTab.className = "clicked"); // 둘다 true여야 실행되는 것, id값이 없으면 왼쪽 항에서 멈춤

    const $tabBar = this.$target.querySelectorAll("div");
    $tabBar.forEach((ele) => {
      ele.addEventListener("click", () => {
        onClick(ele.id);
      });
    });
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render();
}
// 13:00
