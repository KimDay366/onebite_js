export default function CityDetail({$app, initialState}) {

  this.state = initialState;

  this.$target = document.createElement("div");
  this.$target.className = "city-detail";

  $app.appendChild(this.$target);

  // css 컬러 셋팅 함수
  const getScoreColor = (score) => {

    let scoreNum = parseInt(score);

    if(scoreNum >= 4 ) return 'green';
    if(scoreNum >= 3 ) return 'yellow';
    return 'red';
  }

  this.template = () => {

    let cityData = this.state.cityDetail;
    let temp = ``;

    if(cityData){
      temp = `<div class="image-banner">
                <img src=${cityData.image}/>
                <div class="city-name">
                  <h6 class="city">${cityData.city}</h6>
                  <p class="country">${cityData.region} / ${cityData.country}</p>
                </div>
              </div>
              <div class="progress-container">
                <dl class="info-item">
                  <dt class="label">⭐ Total</dt>
                  <dd class="progress-bar" score-color="${getScoreColor(cityData.total)}" style="--score:${cityData.total*20}%;"></dd>
                </dl>
                <dl class="info-item">
                  <dt class="label">💸 Cost</dt>
                  <dd class="progress-bar" score-color="${getScoreColor(cityData.info.cost)}" style="--score:${cityData.info.cost*20}%"></dd>
                </dl>
                <dl class="info-item">
                  <dt class="label">😊 Fun</dt>
                  <dd class="progress-bar" score-color="${getScoreColor(cityData.info.fun)}" style="--score:${cityData.info.fun*20}%"></dd>
                </dl>
                <dl class="info-item">
                  <dt class="label">🚨 Safety</dt>
                  <dd class="progress-bar" score-color="${getScoreColor(cityData.info.safety)}" style="--score:${cityData.info.safety*20}%"></dd>
                </dl>
                <dl class="info-item">
                  <dt class="label">🛜 Internet</dt>
                  <dd class="progress-bar" score-color="${getScoreColor(cityData.info.internet)}" style="--score:${cityData.info.internet*20}%"></dd>
                </dl>
                <dl class="info-item">
                  <dt class="label">🌌 Air Condition</dt>
                  <dd class="progress-bar" score-color="${getScoreColor(cityData.info.air)}" style="--score:${cityData.info.air*20}%"></dd>
                </dl>
                <dl class="info-item">
                  <dt class="label">🍽️ food</dt>
                  <dd class="progress-bar" score-color="${getScoreColor(cityData.info.food)}" style="--score:${cityData.info.food*20}%"></dd>
                </dl>
              </div>`
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
