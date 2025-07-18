// component
import Header from "./components/Header.js";
import RegionList from "./components/RegionList.js";
import CityList from "./components/CityList.js";
import CityDetail from "./components/CityDetail.js";

// Module
import { request, requDetail } from "./components/api.js";

// 현재 상태 표기 + 변경값 확인, 각각의 컴포넌트 불러오기, 초기값(init) 셋팅 진행
export default function App($app) {

  // 웹페이지 새로고침 할 경우, 설정했던 sort & search가 url엔 남아 있지만 리스트는 바뀜. 
  // 따라서 아래의 두가지 함수를 셋팅 한 뒤, 현재 상태의 값을 업데이트 해 주어야 함

  const getSortBy = () =>{

    if(window.location.search){
      const sortText = window.location.search.split('sort=')[1].split('&')[0];
      console.log(`getSortBy : ${sortText}`);
      return sortText;
    };

    return '';
  };

  const getSearchWord = () => {

    if(window.location.search && window.location.search.includes('search=')){
      return window.location.search.split('search=')[1];
    };

    return '';
  };


  // 현재 상태 표기
  this.state = {
    // 페이지 로드 조건의 우선 순위는 아래 적은 내용과 상관 없음
    
    // 페이지 로드 조건1) 페이지 로드 시 어떤 인덱스 데이터부터 가져올지 결정
    startIdx: 0,

    // 페이지 로드 조건2) 지역 선택에 대해 필터링
    region: "",
    
    // 페이지 로드 조건3) '정렬'의 기본값 셋팅
    // sortBy: "",
    // 페이지 로드 조건3 추가 ) 새로고침 시 '정렬'의 설정값 제거 후 'total'로 셋팅
    sortBy : getSortBy(),
    
    // 페이지 로드 조건4) 검색한 값으로 필터링
    // searchWord: "",
    // 페이지 로드 조건4 추가 ) 새로고침 시 '검색값' 제거 
    searchWord: getSearchWord(),    

    // 최종 페이지 로드가 이루어 지는 데이터
    cities: "",

    // 메인 페이지와 상세 페이지의 구분을 위한 URL 가져오기 
    currentPage : window.location.pathname,
  };

  // 각 컴포넌트 불러오기

  // 컴포넌트 변수 선언형 -> 함수 선언형으로 변경
  // 그래야 새로운 페이지가 로드 될 때마다 알맞은 컴포넌트를 제대로 불러올 수 있음 

  // [기존, 변수 선언형]
  // const header = new Header({
  //   $app,
  //   initialState: {
  //     sortBy: this.state.sortBy,
  //     searchWord: this.state.searchWord,
  //   },

  //   handleSortChange: async (sortBy) => {

  //     // 정렬 기준에 따라 변경
  //     const pageUrl = `/${this.state.region}?sort=${sortBy}`; // URL 변겅

  //     history.pushState( null, null, this.state.searchWord ? pageUrl + `&search=${this.state.searchWord}` : pageUrl ); 
  //     // 검색어가 있는 경우, 해당 내용까지 함께 적용하여 사용

  //     // 정렬기준이 변경됨에 따라, 출력되는 cities도 변경 되어야 함
  //     const sortCities = await request( 0, this.state.region, sortBy, this.state.searchWord);

  //     // 정렬 기준이 변하면서 출력값도 변하기 때문에 상태값 업데이트
  //     this.setState({
  //       ...this.state,
  //       startIdx: 0,
  //       sortBy: sortBy,
  //       cities: sortCities,
  //     });
  //   },

  //   handleSearch: async (searchWord) => {

  //     history.pushState( null, null, `/${this.state.region}?sort=${this.state.sortBy}&search=${searchWord}`
  //     ); // 검색어가 있는 경우 사용할 URL 할당

  //     // 검색 필터가 설정됨에 따라, 출력되는 cities도 변경 되어야 함
  //     const searchCities = await request( 0, this.state.region, this.state.sortBy, searchWord);

  //     // 검색 필터로 인해 출력값이 변하므로, 상태값 업데이트
  //     this.setState({
  //       ...this.state,
  //       startIdx: 0,
  //       searchWord: searchWord,
  //       cities: searchCities,
  //     });
  //   },
  // });

  // [신규, 함수 선언형]
  const renderHeader = ()=>{
    new Header({
      $app,
      initialState: {
        sortBy: this.state.sortBy,
        searchWord: this.state.searchWord,
        currentPage : this.state.currentPage,
      },

      handleSortChange: async (sortBy) => {

        // 정렬 기준에 따라 변경
        const pageUrl = `/${this.state.region}?sort=${sortBy}`; // URL 변겅

        history.pushState( null, null, this.state.searchWord ? pageUrl + `&search=${this.state.searchWord}` : pageUrl ); 
        // 검색어가 있는 경우, 해당 내용까지 함께 적용하여 사용

        // 정렬기준이 변경됨에 따라, 출력되는 cities도 변경 되어야 함
        const sortCities = await request( 0, this.state.region, sortBy, this.state.searchWord);

        // 정렬 기준이 변하면서 출력값도 변하기 때문에 상태값 업데이트
        this.setState({
          ...this.state,
          startIdx: 0,
          sortBy: sortBy,
          cities: sortCities,
        });
      },

      handleSearch: async (searchWord) => {

        history.pushState( null, null, `/${this.state.region}?sort=${this.state.sortBy}&search=${searchWord}`
        ); // 검색어가 있는 경우 사용할 URL 할당

        // 검색 필터가 설정됨에 따라, 출력되는 cities도 변경 되어야 함
        const searchCities = await request( 0, this.state.region, this.state.sortBy, searchWord);

        // 검색 필터로 인해 출력값이 변하므로, 상태값 업데이트
        this.setState({
          ...this.state,
          startIdx: 0,
          searchWord: searchWord,
          cities: searchCities,
        });
      },
    });
  }; // renderHeader()


  const renderRegion = ()=>{
    new RegionList({ 
      $app, 
      initialState : this.state.region, 
      handleregion: async (region)=>{
        history.pushState(null,null,`/${region}?sort=total`);

        const regionCities = await request( 0, region, 'total', this.state.searchWord );

        this.setState({
          ...this.state, 
          startIdx : 0,
          region : region,
          sortBy : 'total',
          searchWord : '',
          cities : regionCities,
        })
      } 
    });
  }; // renderRegion();

  const renderCityList = ()=>{
    new CityList({
      $app,
      initialState: this.state.cities,
      handleLoadMore: async () => {
        // [더보기] 버튼을 눌렀을 때 기존은 유지하며, 추가로 cities를 40개씩 불러옴

        const newStartIndex = this.state.startIDX + 40;
        // 가지고 올 시티의 숫자는 api.js에서 'start=index'구문을 통해 결정됨 = url로 결정

        const newCities = await request(
          newStartIndex,
          this.state.region,
          this.state.sortBy,
          this.state.searchWord,
        );
        this.setState({
          ...this.state,
          startIdx: newStartIndex,
          cities: {
            cities: [...this.state.cities.cities, ...newCities.cities],
            isEnd: newCities.isEnd,
            // isEnd : 불러올 API값이 남아 있는지 없는지 확인, false이면 데이터가 남았고 true이면 데이터가 없음
          },
        });
      },
      handleItemClick : (id)=>{
        // 특정 도시가 클릭 되었을때 실행 될 값
        history.pushState(null,null,`/city/${id}`);
        this.setState({
          ...this.state,
          currentPage : `/city/${id}`,
        });
      },
    });
  }; // renderCityList();

  const cityDetial = async (cityId)=>{

    // api.js에서 detail 페이지에 사용 할 데이터를 가져옴
    try{

      const detailCity = await requDetail(cityId);
      new CityDetail({ $app , initialState: detailCity });

    }catch(err){
      console.log(err);
    }

  }; // cityDetial();

  // 변경되는 상태값 표기
  // 컴포넌트 생성자가 함수 선언형으로 변경됨에 따라 해당 내용도 변경 

  this.setState = (newState) => {
      this.state = newState;

    // [기존, 변경 상태 표기] - 각 컴포넌트 마다 선언해서 업데이트
  //   cityList.setState(this.state.cities);
  //   header.setState({
  //     sortBy: this.state.sortBy,
  //     searchWord: this.state.searchWord,
  //   });
  //   regionList.setState(this.state.region);

  // [신규, 변경 상태 표기] - render() 함수 하나로 호출하여 진행
      render();

  };

  const render = ()=>{
    const path = this.state.currentPage;

    $app.innerHTML = '';

    if(path.startsWith('/city')){

      const urlId = path.split('/city/')[1];

      renderHeader();
      cityDetial(urlId);

    }else {

      renderHeader();
      renderRegion();
      renderCityList();

    };
  };

  // 앞으로 가기, 뒤로 가기 버튼 사용
  window.addEventListener('popstate', async ()=>{

    const urlPath = window.location.pathname;

    const prevRegion = urlPath.replace('/','');
    const prevSortBy = getSortBy();
    const prevSearch = getSearchWord();
    const prevIdx = 0;
    const prevCities = await request(prevIdx, prevRegion, prevSortBy, prevSearch, );

    this.setState({
      ...this.state,
      startIDX : prevIdx,
      region : prevRegion,
      sortBy : prevSortBy,
      searchWord : prevSearch,
      cities : prevCities,
      currentPage : urlPath,
    });

  });

  // 초기값(init) 셋팅
  // 컴포넌트 생성자가 함수 선언형으로 변경됨에 따라 해당 내용도 변경 
  // if문으로 detail 페이지 확인해서 render()함수 실행하고, 기존에 셋팅 했던값은 else로 보내 최초 실행형으로 사용할 수 있도록 함 

  const init = async () => {

    // [신규, 초기값 셋팅 방법] 
    const urlPath = window.location.pathname;

    if(urlPath.startsWith('/city')){

      render();
    }else{
      
      // [기존, 초기값 셋팅 방법]
      const cities = await request(
        this.state.startIdx,
        this.state.region,
        this.state.sortBy,
        this.state.searchWord,
      ); // 최초의 cities는 API 의 반환된 URL을 기반으로 데이터를 가지고 옴
  
      this.setState({
        ...this.state, // 기존에 있던 다른 값은 유지
        cities: cities, // 해당하는 변수는 이미 선언한 것이 아닌 init()내에서 새로 정리한 cities!
      });
    }

  };
  init();
}

// 조건부 렌더링 : Page Url을 참고하여, 보여줘야 할 페이지의 컴포넌트를 결정 

// 만약 path에 'city(상세페이지를 나타내는 url 키워드)'가 있으면 
//   -> detail 페이지 이므로, header와 city detail이 표기되고

// path에 'city'가 없으면 
//   -> 메인 페이지 이므로, header region city list가 순서대로 표기 됨
