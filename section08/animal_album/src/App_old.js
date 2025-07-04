import TabBar from "./components/tabBar.js";
import Content from "./components/content.js";
import { imgDate } from "./components/api.js";

export default function App($app) {
  this.state = {
    // 어떤 버튼을 눌렀는지 & 어떤 데이터가 불러왔는지
    currentTab: window.location.pathname.replace("/", "") || "all",
    photos: [],
  };

  // Tab Bar를 누른 경우, 기존 값이 신규 값으로 업데이트 되어야 함
  const tabBar = new TabBar({
    $app,
    initialState: "",
    onClick: async (name) => {
      // 페이지를 눌렀을때, 상단 URL을 조작하기 위해서 History객체 이용
      history.pushState(null, `${name} 사진`, name);
      this.setState({
        ...this.state, // 기존의 다른 상태값은 유지를 하고
        currentTab: name, // 누른 name값을 currentTab의 값으로 넣어줌.
        photos: await imgDate(name === "all" ? "" : name),
        // 그리고 이미지 리스트를 불러오는데, 비동기 API를 불러오므로 async & await 을 함께 사용함
        // 이와 함께, 이미지 리스트 링크에 사용되는 name 중 "전체"는 URL 뒤에 아무것도 붙지 않으므로 빈 값 넘기는 코드로 수정
      });
    },
  });

  // 필요한 값 : photos의 값
  const content = new Content({
    $app,
    initialState: [],
  });

  // 상태를 업데이트 함수
  this.setState = (nextState) => {
    this.state = nextState; // 상태가 업데이트 되면 this.state의 값에 새로운 값을 넣어줌

    // 그런다음 tabBar / content 컴포넌트들에 각각 필요한 신규 값을 전달함
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);

    // this.render();
  };

  // popstate : 브라우저의 상태가 변경될 때 발생하는 이벤트
  window.addEventListener("popstate", async () => {
    console.log(window.location.pathname);

    let updatePage = window.location.pathname.replace("/", "") || "all";
    let updatePhotos = await imgDate(updatePage === "all" ? "" : updatePage);

    this.setState({
      ...this.state,
      currentTab: updatePage,
      photos: updatePhotos,
    });
  });

  // 초기 접속 시 사진의 상태를 기본값으로 셋팅 해 주는 함수
  // 새로고침 했을때도 해당 함수가 나오는데, 그때 초깃값이 나오게 되어 화면에 에러처럼 나옴
  const init = async () => {
    // API를 불러오기 때문에 try & catch 문을 사용하며 async & await 키워드도 함께 사용
    try {
      const currentPage = this.state.currentTab;
      const initailPhotos = await imgDate(
        currentPage === "all" ? "" : currentPage
      );
      this.setState({
        ...this.state, // 기존의 다른 상태값은 유지를 하고
        photos: initailPhotos, // 사진 목록만 초기값을 실행 해 줌
      });
    } catch (err) {
      console.log(err);
    }
  };

  init();
}
