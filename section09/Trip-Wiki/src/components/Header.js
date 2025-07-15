export default function Header({
  $app,
  initialState,
  handleSortChange,
  handleSearch,
}) {
  // 초기값 바인딩
  this.state = initialState;
  this.handleSortChange = handleSortChange;
  this.handleSearch = handleSearch;

  // header 전체 div 생성
  this.$target = document.createElement("div");
  this.$target.className = "header";

  $app.appendChild(this.$target);

  this.template = () => {
    const { sortBy, searchWord } = this.state;

    // header 요소 만들기 : 좌측 로고 & 홈페이지 이동 , 우측 정렬 & 검색 입력
    let temp = `<h1 class="title">
                  <a href = "/">✈️ Trip Wiki</a>
                </h1>
                <div class="filter-search-container">
                  <div class="filter">
                    <select id="sortList" class="sort-list">
                      <option value="total" ${sortBy === "total" ? "selected" : ""}>Total</option>
                      <option value="cost" ${sortBy === "cost" ? "selected" : ""}>Cost</option>
                      <option value="fun" ${sortBy === "fun" ? "selected" : ""}>Fun</option>
                      <option value="safety" ${sortBy === "safety" ? "selected" : ""}>Safety</option>
                      <option value="internet" ${sortBy === "internet" ? "selected" : ""}>Internet</option>
                      <option value="air" ${sortBy === "air" ? "selected" : ""}>Air Quality</option>
                      <option value="food" ${sortBy === "food" ? "selected" : ""}>Food</option>
                    </select>
                  </div>
                  <div class="search">
                    <input type="text" placeholder="Search" id="search" autocomplete="off" value=${searchWord}>
                  </div>
                </div>`;
    
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    console.log(`header render : ${this.state.sortBy}`);

    // 정렬이 변경 될 경우, 해당 값을 App.js에 만든 handleSortChange()에 전달하여 실행
    document.getElementById('sortList').addEventListener('change',(event)=>{
      this.handleSortChange(event.target.value);
      // event.target = document.getElementById('sortList')
    });

    // 검색어를 작성한 뒤 엔터를 누르면(=keydown & if문) 해당 값을 App.js에 만든 handleSearch()에 전달하여 실행
    const $searchInput = document.getElementById('search');
    $searchInput.addEventListener('keydown',(event)=>{
      if(event.key === "Enter"){
        this.handleSearch($searchInput.value);
      }
    });
  };
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render();
}
