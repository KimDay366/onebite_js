let API_URL = "https://pokemon-api-ecru-eta.vercel.app/";

export const pokemonApi = async ({ type, searchWord }) => {
  try {
    // 1) 기본 URL 설정
    let url = API_URL;

    // 타입을 선택 한 경우, 타입 붙임
    if (type) {
      url += `${type}`;
    }
    // 검색어가 있는경우, 검색URL & 검색어 붙임
    if (searchWord) {
      url += `?search=${searchWord}`;
    }

    let res = await fetch(url);
    let poketmons = await res.json();

    return poketmons.data;
  } catch (err) {
    console.log(err);
  }
};

export const getPokemonDetail = async (id) => {
  const url = API_URL + "detail/" + id;
  const res = await fetch(url);
  const pokemonDetails = await res.json();
  return pokemonDetails.data;
};
