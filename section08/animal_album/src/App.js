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
    onClick: (name) => {
      // 페이지를 눌렀을때, 상단 URL을 조작하기 위해서 History객체 이용
      history.pushState(null, `${name} 사진`, name);
      this.updateContent(name);
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

  // 컨텐츠 업데이트 항목을 함수로 만들어 더 간결하게 수정
  this.updateContent = async (tabName) => {
    try {
      const currentPage = tabName === "all" ? "" : tabName;
      const photos = await imgDate(currentPage);
      this.setState({
        ...this.state,
        currentTab: tabName,
        photos: photos,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // popstate : 브라우저의 상태가 변경될 때 발생하는 이벤트
  window.addEventListener("popstate", () => {
    const urlText = window.location.pathname.replace("/", "");
    this.updateContent(urlText);
  });

  // 초기 접속 시 사진의 상태를 기본값으로 셋팅 해 주는 함수
  // 새로고침 했을때도 해당 함수가 나오는데, 그때 초깃값이 나오게 되어 화면에 에러처럼 나옴
  // 서버 안에는 index.html 만 있기 때문에 /동물 값은 찾을 수 없는것
  // => node.js 또는 express.js를 통해 해당 문제 해결 가능
  const init = () => {
    this.updateContent(this.state.currentTab);
  };

  init();
}
