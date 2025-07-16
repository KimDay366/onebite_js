export default function CityList({ $app, initialState, handleLoadMore, handleItemClick }) {
  
  this.state = initialState; // initialState 키 추가
  this.handleLoadMore = handleLoadMore;
  this.handleItemClick = handleItemClick;

  this.$target = document.createElement("div");
  this.$target.className = "city-list";

  $app.appendChild(this.$target);

  
  this.template = () => {
    let temp = `<div class="city-items-container">`; // citi list를 담을 그릇 만듬
    if (this.state) {
      this.state.cities.forEach((ele) => {
        // 시티의 숫자만큼 타일 만들기
        temp += `<div class="city-item" id=${ele.id}>
            <img src =${ele.image} />
            <div class="city-item-info">${ele.city}, ${ele.country}</div>
            <div class="city-item-score">⭐${ele.total}</div>
        </div>`;
      });

      temp += `</div>`;
    }

    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    this.$target.querySelectorAll('div.city-item').forEach((ele)=>{
      ele.addEventListener('click', ()=>{
        this.handleItemClick(ele.id);
      });
    });

    if (!this.state.isEnd) {
      // isEnd가 false인 경우 = 데이터가 남았음 = 더보기 버튼이 필요함
      // 더보기 버튼 렌더링
      const $loadMoreBtn = document.createElement("button");
      $loadMoreBtn.className = "add-items-btn";
      $loadMoreBtn.textContent = "+ 더보기";

      // 더보기 버튼 생성 후 타겟 요소에 추가
      this.$target.appendChild($loadMoreBtn);

      // 생성된 버튼을 누를 경우, 추가 cities가 나오도록 함수 설정
      $loadMoreBtn.addEventListener("click", () => {
        this.handleLoadMore();
      }); // => 이 부분이 실제 이벤트가 일어나는 장소, 그 전까지는 이벤트가 일어나도록 셋팅!
    }
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}

// "region":"Asia","city":"Chiang Mai","country":"Thailand","
