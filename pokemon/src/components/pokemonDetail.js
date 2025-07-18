import { setPokemonType } from '../modules/typeTag.js';

export default function PokemonDetail({$app, initialState}){

    console.log(`detail : ${initialState[1]}`);

    this.state = initialState;

    this.$target = document.createElement('div');
    this.$target.className = 'pokemon-detail';

    $app.appendChild(this.$target);

    this.template = () => {

        let {name, info, description, img, type, height, weight, id } = this.state;
        let temp = ``;
            temp += `<div class="detail-wrapper">
                        <div class="left-wrapper">
                            <img src="${img}"></img>
                        </div>
                        <div class="right-wrapper">
                            <div class="pokemon-info">
                                <div class="index">No.${id}</div>
                                <div class="name">${name}</div>                 
                                <div class="type">${type}</div>
                                <div class="description">${description}</div>
                            </div>
                            <div class="detail-info">
                                <div>
                                    <div class="label">키</div>
                                    <div class="info">${height}m</div>
                                </div>
                                <div>
                                    <div class="label">분류</div>
                                    <div class="info">${info}</div>
                                </div>
                                <div>
                                    <div class="label">몸무게</div>
                                    <div class="info">${weight}kg</div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        
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