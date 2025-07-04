export default function Content({ $app, initialState }) {
  this.state = initialState;

  // 1) div.content 영역을 생성
  this.$target = document.createElement("div");
  this.$target.className = "content";
  $app.appendChild(this.$target);

  // 2) 알맞은 동물 사진 가져오기
  this.template = () => {
    let temp = "";
    if (this.state) {
      this.state.forEach((elem) => {
        temp += `<img src =${elem.url}>`;
      });
    }
    return temp;
  };

  // 3) 실제 렌더링이 진행 될 때 동물 사진을 출력 할 수 있도록 연결
  this.render = () => {
    this.$target.innerHTML = this.template();
  };

  // 상태가 변경 될 때마다, state 값이 변경 될 수 있도록 셋팅
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
