// modules
import { pokemonApi, getPokemonDetail } from "./modules/api.js";

// components
import Header from './components/header.js';
import PokemonList from "./components/pokemonList.js";
import PokemonDetail from './components/pokemonDetail.js';

// 현재 상태 + 상태 변화, 각 컴포넌트 로드, 초기화(inti) 작업
export default function App($app) {

  // 검색어가 있는 경우, 새로고침 해도 해당 값 유지 할 수 있도록 셋팅
  const getSearchWorld = () => {
    if (window.location.search.includes("search=")) {
      return window.location.search.split("search=")[1];
    }
    return "";
  };

  // 타입을 선택 한 경우, 새로고침 해도 해당 값 유지할 수 있도록 셋팅
  const getPokeType = () => {
    
    const urlType = window.location.pathname.replace("/",'');
    const setType = urlType !== "" ? urlType : '';
    
    return setType;

  }

  const setPokeType = () =>{

    const urlType = window.location.pathname.replace("/",'');
    const resetType = urlType !== "" ? urlType.toUpperCase() : 'ALL';
    
    document.getElementById('typeSet').innerText = `Select Type : ${resetType}`;
  }

  // 현재 상태 로드
  this.state = {
    type: getPokeType(),
    pokemonList: [],
    searchWord: getSearchWorld(),
    currentPage: window.location.pathname,
  };

  // 컴포넌트 로드 샘플
  const header = ()=>{
    new Header({
      $app,
      initialState : {type :getPokeType(), searchWord: getSearchWorld(), currentPage: window.location.pathname},
      handleClick : async ()=>{
        history.pushState(null,null,'/');
        setPokeType();

        const resetPkList = await pokemonApi();

        this.setState({
          ...this.state,
          pokemonList : resetPkList,
          type : '',
          searchWord: getSearchWorld(),
          currentPage : '/',
        })
        // console.log(window.location.href);
      },
      handleSearch : async (searchWord)=>{

        const searchURL = this.state.type===''? `?search=${searchWord}`: `/${this.state.type}?search=${searchWord}`
        history.pushState(null, null, searchURL);

        const searchPKList = await pokemonApi(this.state.type, searchWord);
        
        this.setState({
          ...this.state,
          pokemonList: searchPKList,
          searchWord: searchWord,
          currentPage: `?search=${searchWord}`,
        });
        
        
        setPokeType();
      },
      // handleReset : async() =>{
      //   const resetPKList = await pokemonApi('','');

      //   this.setState ({
      //     ...this.state,
      //     pokemonList : resetPKList,
      //     type : '',
      //     searchWord : '',
      //     currentPage : '',
      //   });

      //   document.getElementById('typeSet').innerText = `Select Type : ALL`;
      //   document.getElementById('search').value = '';

      //   URL 바꿔야 함 ㅠ
      // }
    });
  }

  const pokemonList = ()=>{
    new PokemonList({
      $app,
      initialState: this.state.pokemonList,
      handleItem: async (id) => {
        // 코드 작성
        //아이템을 클릭하면 "/detail/id" 로 이동할 수 있도록 아래의 함수를 완성하세요.

        history.pushState(null, null, `/detail/${id}`);

        this.setState({
          ...this.state,
          currentPage: `/detail/${id}`,
        });
      },
      handleType: async (type) => {
        //타입을 클릭하면, 클릭한 타입에 해당하는 포켓몬만 띄워지고,
        // "/type" 으로 이동할 수 있도록 아래의 함수를 완성하세요.

        const typeURL = this.state.searchWord ===''? `/${type}`: `/${type}?search=${this.state.searchWord}`
        
        history.pushState(null, null, typeURL);

        const typePokeList = await pokemonApi(type, this.state.searchWord);

        this.setState({
          ...this.state,
          pokemonList: typePokeList,
          type: type,
          currentPage: `/${type}`,
        });

        setPokeType();
      },
    });
  }

  const pokemonDetail = async (pokemonId)=>{

    try{

      const pokeDetailData = await getPokemonDetail(pokemonId);
      new PokemonDetail({$app, initialState : pokeDetailData });

      console.log(`id : ${pokemonId}`);
      console.log(pokeDetailData);

    }catch(err){

      console.log(err);

    }
  }

  this.setState = (newState) => {
    this.state = newState;
    // pokemonList.setState(this.state.pokemonList);
    render();
  };

  // 앞으로 가기, 뒤로가기 버튼 사용 시 정확한 이동을 위한 셋팅
  window.addEventListener('popstate', async()=>{

    const urlPath = window.location.pathname;

    const prevType = urlPath.replace('/','');
    const prevSearch = getSearchWorld(); 

    const prevPokeList = await pokemonApi(prevType, prevSearch);

    this.setState({
      ...this.state,
      type: prevType,
      pokemonList: prevPokeList,
      searchWord: prevSearch,
      currentPage: urlPath,
    });

    setPokeType();
  });

  const render = ()=>{
    const path = window.location.pathname;

    $app.innerHTML = '';

    if (path.startsWith('/detail/')){

      const detailPageId = path.split('/detail/')[1];

      header();
      pokemonDetail(detailPageId);

    }else {
      header();
      pokemonList();
    }
  }
  

  // 초기화 작업
  const init = async () => {

    const path = window.location.pathname;

    if(path.startsWith('/detail/')){
      render();
    }else{
      
      try {
        const initPokemonList = await pokemonApi(
          this.state.type,
          this.state.searchWord
        ); // 초기 로드 시 리스트 데이터를 가져오기 위한 작업

        this.setState({
          ...this.state,
          pokemonList: initPokemonList, // 해당 변수에 초기 리스트를 삽입
        });

        setPokeType();

        // console.log(`init = ${initPokemonList}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  init();
}
