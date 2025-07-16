// modules
import { pokemonApi } from "./modules/api.js";

// components
import PokemonList from "./components/pokemonList.js";
import Header from './components/header.js';

// 현재 상태 + 상태 변화, 각 컴포넌트 로드, 초기화(inti) 작업
export default function App($app) {
  const getSearchWorld = () => {
    if (window.location.search.includes("search=")) {
      return window.location.search.split("search=")[1];
    }
    return "";
  };

  // 현재 상태 로드
  this.state = {
    type: "",
    pokemonList: [],
    searchWord: getSearchWorld(),
    currentPage: window.location.pathname,
  };

  // 컴포넌트 로드 샘플
  const header = new Header({
    $app,
    initialState : {searchWord: getSearchWorld(), currentPage: window.location.pathname},
    handleClick : async ()=>{
      history.pushState(null,null,'/');

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

      const searchPKList = await pokemonApi(this.state.type, searchWord);

      this.setState({
        ...this.state,
        pokemonList: searchPKList,
        searchWord: searchWord,
        currentPage: `?search=${searchWord}`,
      });

      const searchURL = this.state.type===''? `?search=${searchWord}`: `/${this.state.type}?search=${searchWord}`
      history.pushState(null, null, searchURL);

    },
  });

  const pokemonList = new PokemonList({
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
    },
  });

  this.setState = (newState) => {
    this.state = newState;
    pokemonList.setState(this.state.pokemonList);
  };
  

  // 초기화 작업
  const init = async () => {
    try {
      const initPokemonList = await pokemonApi(
        this.state.type,
        this.state.searchWord
      ); // 초기 로드 시 리스트 데이터를 가져오기 위한 작업

      this.setState({
        ...this.state,
        pokemonList: initPokemonList, // 해당 변수에 초기 리스트를 삽입
      });

      // console.log(`init = ${initPokemonList}`);
    } catch (err) {
      console.log(err);
    }
  };

  init();
}
