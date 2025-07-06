// components
import pokemonList from "./components/pokemonList.js";

// modules
import { pokemonApi } from "./modules/api.js";

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
  const pokemonList = new PokemonList({
    type,
    searchWord,
    handleItemClick: () => {},
    handleTypeClick: () => {},
  });

  // 상태 변화 로드
  this.setState = (newState) => {
    this.state = newState;
  };

  // 초기화 작업
  const init = () => {};

  this.setState = (newState) => {
    this.state = newState;
  };

  init();
}
