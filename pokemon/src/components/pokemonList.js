import { setPokemonType } from "../modules/typeTag.js";

export default function PokemonList({
  $app,
  initialState,
  handleItemClick,
  handleTypeClick,
}) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "pokemon-list";

  $app.appendChild(this.$target);
  this.handleItemClick = handleItemClick;
  this.handleTypeClick = handleTypeClick;

  this.template = () => {
    //   // html 코드는 아래와 같이 제공드립니다.
    //   // 필요한 코드를 추가적으로 작성해 웹 사이트를 완성하세요.

    let temp = `<div class="pokemon-wrapper">`;

    if (this.state) {
      this.state.forEach((ele) => {
        temp += `<div class="img-wrapper" id="img${ele.id}">
                      <img src="${ele.img}" alt="${ele.name}"></img>
                  </div>
                  <div class="pokemon-info">
                      <div class="index">No.${ele.id}</div>
                      <div class="name">${ele.name}</div>
                      <div class="type">${setPokemonType(ele.type)}</div>
                  </div>`;
      });
      temp += `</div>`;
    }

    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
