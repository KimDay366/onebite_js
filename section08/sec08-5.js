// section 08-5 . SPA 와 Routing

// 웹페이지 라우팅 : 웹사이트 내에서 웹 주소(URL)를 특정 페이지에 연결하는 과정

// SPA select Library,FrameWork : React.js , Angular.js, Vue.js
// SPA로 개발하면, 사용자가 뒤로가기 앞으로 가기 등의 버튼을 사용하지 못하게 됨
// => 별도의 라우팅 제작 키워드를 사용하여 사용자의 불편함을 줄임

// 바닐라 자바스크립트는 라우팅 관련 기능 없음, 따라서 History API를 이용 해 구현함
// History API : 사용자가 방문한 목록에 대해 접근,이용 가능하도록 기록을 제공하는 HTML5 API
//               => History 객체 사용하기

// ================================================================================

// 1. 페이지 버튼 누를 때, 페이지 URL 생성하고 해당 페이지 번호 표기하기

const changePage = (page) => {
  let $content = document.getElementById("content").querySelector("span");
  $content.textContent = page;
  history.pushState({ page: page }, `Title ${page}`, `/${page}`);
  // 세셔니스트에 현재 상태를 저장 가능 (state = 페이지 상태, title = 페이지 타이틀, url = 페이지 URL)
  // 해당 문장으로 인하여, 우리가 원하는 URL을 셋팅 가능
};

document.getElementById("page1").addEventListener("click", () => {
  changePage("1");
});

document.getElementById("page2").addEventListener("click", () => {
  changePage("2");
});

document.getElementById("page3").addEventListener("click", () => {
  changePage("3");
});

// ================================================================================

// 2. 뒤로 가기, 앞으로 가기 버튼 만들기
// 버튼을 만들었지만, 상단의 브라우저 자체 버튼을 이용해도 동일한 기능으로 움직임

const goBack = () => {
  history.back();
};

const goForward = () => {
  history.forward();
};

document.getElementById("goBack").addEventListener("click", () => {
  goBack();
});

document.getElementById("goForward").addEventListener("click", () => {
  goForward();
});

// popstate : 뒤로가기, 앞으로 가기 같이 브라우저의 상태가 변경 됬을때 이벤트를 발생하게 함
// 상단 URL은 바뀌고 있지만 하위 문구는 그대로 이므로, 해당 문구까지 따라가게 함
window.addEventListener("popstate", (event) => {
  if (event.state.page) {
    let $content = document.getElementById("content").querySelector("span");
    $content.textContent = event.state.page;
  }
});
