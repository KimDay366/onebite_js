import { request } from "./components/api.js";

// 현재 상태 + 상태 변화, 각 컴포넌트 로드, 초기화(inti) 작업
export default function App() {
  // 현재 상태 로드
  this.state = {};

  // 컴포넌트 로드 샘플
  //   const poke = new Poke();

  // 상태 변화 로드
  this.setState = (newState) => {
    this.state = newState;
  };

  // 초기화 작업
  const init = () => {};

  init();
}
