export default function Header({$app, initialState,handleClick, handleSearch}){


    // header 인수값 바인딩 작업
    this.state = initialState;
    this.handleClick = handleClick;
    this.handleSearch = handleSearch;
    // this.handleReset = handleReset;

    // header outBox 만들기
    this.$target = document.createElement('header');
    this.$target.className = 'header'

    $app.appendChild(this.$target);

    this.template = ()=>{

        const logoTag =  `<div class='header-content' id="title">
        <img src='/src/img/ball.webp' width=40px height=40px></img>
        포켓몬 도감</div>`;

        const searchTag = `<div class="search">
            <div id="typeSet" class="type-setting"></div>
            <input type="text" placeholder="포켓몬을 검색하세요!" id="search" autocomplete="off" value=${decodeURIComponent(this.state.searchWord)}></input>
            <button id="search-button"><img src="src/img/search.png"></img></button>
            <button id="reset-button" class="resetBtn"> 검색 초기화 </button>
        </div>`;


        if(!this.state.currentPage.includes('/detail')){
            return `${logoTag} ${searchTag}`;
        }

        return logoTag;
    }

    const setPokeType = () =>{

        const urlType = window.location.pathname.replace("/",'');
        const resetType = urlType !== "" ? urlType.toUpperCase() : 'ALL';
        
        document.getElementById('typeSet').innerText = `Select Type : ${resetType}`;
    }

    this.render = ()=>{

        this.$target.innerHTML = this.template();

        if (!this.state.currentPage.includes('detail/')){
            setPokeType();

            const searchT = document.getElementById('search');

            document.getElementById('title').addEventListener('click',()=>{
                this.handleClick();
                searchT.value = '';
                document.getElementById('typeSet').innerText = 'Select Type : ALL';
            });

            document.getElementById('search-button').addEventListener('click',()=>{
                this.handleSearch(searchT.value);
                setPokeType();
            });

            document.getElementById('reset-button').addEventListener('click',()=>{
                searchT.value = '';
                this.handleSearch(searchT.value);
                setPokeType();
            });

        }
        
    }

    this.setState = (newState)=>{
        this.state = newState;
        this.render();
    }

    this.render();

}