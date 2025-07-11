// section 03 - 01 . 비동기 처리

// 동기 : 하나의 작업이 실행되는 동안은 다른 작업을 수행하지 않는 방식
//       동기 방식으로 처리되면, 사용자가 다음 작업이 진행 될 때까지 기다려야 함
// 방식 : [   1 = 5s  ]→[2=3s]→[       3 = 10s       ]

// 비동기 : 작업이 종료되기를 기다리지 않고 다음 작업을 병렬적으로 수행하는 방식
//         단, 여러 작업이 함께 수행 될 수 있도록 스레드가 여러개 있어야 함(멀티 스레드)
// 방식 : [   1 = 5s  ]
//        [2=3s]
//        [       3 = 10s       ]

// 스레드 : 작업을 수행하는 흐름, 코드가 지나가는 일종의 도로
//         자바스크립트는 싱글 스레드이므로, 특정 내장함수를 이용하여 멀티스레드처럼 움직이게 함

// setTimeout(함수, 딜레이 타임)
// 딜레이 타임 만큼 시간을 뒤로 밀어서 작성한 함수를 실행 시킴

const work = (callback) => {
  setTimeout(() => {
    console.log("비동기");
    callback(); // 작성한 콜백함수를 여기에 넣어줌
  }, 1000);
};

work(() => {
  console.log("종료"); // 구동할 때 실행 시키기 위한 콜백함수
});

const workA = () => {
  setTimeout(() => {
    console.log("workA");
  }, 5000);
};

const workB = () => {
  setTimeout(() => {
    console.log("workB");
  }, 3000);
};

const workC = () => {
  setTimeout(() => {
    console.log("workC");
  }, 7000);
};

workA();
workB();
workC();

const workD = () => {
  console.log("workD = 동기 출력");
};

workD();

// "workD = 동기 출력" 시간 지정을 하지 않은 함수는 동기로 출력되고,
// 나머지 work 함수들은 [ workB → workA → workC ] 순서로 비동기 처리 되어진다

// ------------------------------------------------------------------------

// 동기와 비동기 추가 설명
// 동기 • 비동기 처리로 사용자의 경험에 영향을 미칠 수 있으므로,
// 개발자가 해당 처리 방식에 대해 컨트롤 할 수 있어야 함.

// 모든 작업이 "동기"적으로 움직이게 될 떄, 중간에 있는 거대한 함수로 인해 나머지 작업이 딜레이 되면
// 사용자는 이 부분을 에러라고 생각하고 빠져나가거나 불편함을 호소 할 수 있음
// 따라서 화면이 멈추지 않은 것 처럼 보이게 하고, 순서 제어 및 에러 처리 등을 위하여 비동기 처리가 필요함

// 비동기 동작은 단순한 UI 효과(=지금까지 내가 썻던 스크립트 영역)에선 굳이 필요 없지만,
// 로그인 처리, 데이터 로딩(글 불러오기), 파일 업로드 등과 같은 고차원적인 작업에선 꼭 필요한 개념
