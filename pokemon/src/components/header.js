export default function Header({$app, initialState,handleClick, handleSearch}){


    // header 인수값 바인딩 작업
    this.state = initialState;
    this.handleClick = handleClick;
    this.handleSearch = handleSearch;

    // header outBox 만들기
    this.$target = document.createElement('header');
    this.$target.className = 'header'

    $app.appendChild(this.$target);

    this.template = ()=>{

        const logoTag =  `<div class='header-content' id="title">
        <img src='/src/img/ball.webp' width=40px height=40px></img>
        포켓몬 도감</div>`;

        const searchTag = `<div class="search">
            <input type="text" placeholder="포켓몬을 검색하세요!" id="search" autocomplete="off" value=${decodeURIComponent(this.state.searchWord)}></input>
            <button id="search-button"><img src="src/img/search.png"></img></button>
            <button id="reset-button" class="resetBtn">X</button>
        </div>`;


        if(!this.state.currentPage.includes('/detail')){
            return `${logoTag} ${searchTag}`;
        }

        return logoTag;
    }

    this.render = ()=>{
        this.$target.innerHTML = this.template();

        const searchT = document.getElementById('search');

        document.getElementById('title').addEventListener('click',()=>{
            this.handleClick();
            searchT.value = '';
        });

        document.getElementById('search-button').addEventListener('click',()=>{
            this.handleSearch(searchT.value);
        });

        document.getElementById('reset-button').addEventListener('click',()=>{
            searchT.value = '';
            this.handleSearch(searchT.value);
        });
    }

    this.setState = (newState)=>{
        this.state = newState;
        this.render();
    }
    this.render();



}