import { setPokemonType } from "../modules/typeTag.js";

export default function PokemonList({
  $app,
  initialState,
  handleItem,
  handleType,
}) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "pokemon-list";

  $app.appendChild(this.$target);
  this.handleItem = handleItem;
  this.handleType = handleType;

  this.template = () => {
    //   // html 코드는 아래와 같이 제공드립니다.
    //   // 필요한 코드를 추가적으로 작성해 웹 사이트를 완성하세요.

    let temp = "";

    if (this.state) {
      this.state.forEach((ele) => {
        // console.log(this.state); 배열안에 객체가 담긴 형태가 출력되어야 함
        temp += `<div class="pokemon-wrapper">
                  <div class="img-wrapper" id="${ele.id}">
                      <img src="${ele.img}" alt="${ele.name}"></img>
                  </div>
                  <div class="pokemon-info">
                      <div class="index">No.${ele.id}</div>
                      <div class="name">${ele.name}</div>
                      <div class="type">${setPokemonType(ele.type)}</div>
                  </div>
                </div>`;
      });
    }

    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    // document.getElementsByClassName('type').addEventListner('click',()=>{
    //   console.log(event.target.text);
    // });

    this.$target.querySelectorAll('div.img-wrapper').forEach((ele)=>{
      ele.addEventListener('click', ()=>{
        this.handleItem(ele.id);
      })
    });

    this.$target.querySelectorAll('div.type-tag').forEach((ele)=>{
      ele.addEventListener('click', ()=>{
        this.handleType(ele.id);

        const urlType = window.location.pathname.replace('/','').toUpperCase()
        document.getElementById('typeSet').innerText = `Select Type : ${urlType}`;
      });
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
