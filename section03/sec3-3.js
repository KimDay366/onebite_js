// section 03 - 03 . async와 await

// async와 await : promise 객체를 쓰기 쉽고, 직관적으로 보여 줌

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise : ${ms / 1000}초가 지났습니다`);
    }, ms);
  });
};

const start = (scd) => {
  delay(scd).then((res) => {
    console.log(res);
    // promise 로 선언했기 떄문에 then 메서드 사용
    // res = return 으로 받은 resolve 값
  });

  console.log(`${scd / 1000}초 걸릴 예정`);
  // delay 함수가 진행 될 동안, console.log() 메세지 출력 됨
};

start(4000);

// async 함수로 사용하면 더 직관적으로 사용 가능
// async 함수를 사용하면 자동으로 프로미스 객체를 반환하게 됨.
// await 키워드 : async 함수 내부에서 사용하는 키워드
//               해당 키워드의 실행이 종료 될 때까지 다른 작업은 중단됨.
const startPM = async (scd) => {
  let result = await delay(scd);
  console.log(result);

  console.log(`STOP!! ${scd / 1000}초 동안 멈춤! STOP!!`);
  // await 으로 인해 다른 작업이 중단되었기 때문에,
  // delay 함수가 진행 된 이후, console.log() Stop 메세지가 출력 됨
};

startPM(2000);

// 에러 처리 방법 : try & catch 사용하기
const startTC = async (scd) => {
  try {
    // promise가 성공 시 실행 될 구문
    let result = await delay(scd);
    console.log(result);

    console.log(`STOP!! ${scd / 1000}초 동안 멈춤! STOP!!`);
  } catch (err) {
    // promise가 실패 할 경우 실행 될 구문
    console.log(err);
  }
};

// =====================================================
// async & awaite 을 이용하여 실행 순서 조절하기

const workA = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res("Work A : 실행 시간 6초");
    }, 6000);
  });
};

const workB = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res("Work B : 실행 시간 3초");
    }, 3000);
  });
};

const workC = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res("Work C : 실행 시간 4초");
    }, 4000);
  });
};

const startOther = async () => {
  try {
    let wa = await workA();
    console.log(wa);

    let wb = await workB();
    console.log(wb);

    let wc = await workC();
    console.log(wc);
    // 하나의 await 작업 후 console.log가 실행 되므로 시간 타임에 따라 각각 출력 됨
  } catch (err) {
    console.log(err);
  }
};

const startAll = async () => {
  try {
    let wa = await workA();
    let wb = await workB();
    let wc = await workC();

    console.log(`${wa} (한번에 출력)`);
    console.log(`${wb} (한번에 출력)`);
    console.log(`${wc} (한번에 출력)`);
    // await 이 걸려 있으므로, 세 작업이 모두 완료 된 다음 console.log가 한번에 출력 됨
  } catch (err) {
    console.log(err);
  }
};

startOther(); // 소요시간 : 총 13초, 단 한 작업이 끝날때마다 중간 표기 함
startAll(); // 소요시간 : 총 13초, 모든 작업이 완료 된 후 한번에 표기 됨

const startMultiple = async () => {
  try {
    let results = await Promise.all([workA(), workB(), workC()]);
    results.forEach((res) => console.log(`${res} (동시 병렬 작업)`));
  } catch (err) {
    console.log(err);
  }
};
// Promise.all : 프로미스 객체를 한번에 받아 한번에 작업하는 자바스크립트 내장 메서드
//               선택된 모든 객체가 fulfilled(성공) 되어야 출력하고
//               하나라도 rejected(실패)하면, 에러 메세지 출력

startMultiple(); // 소요시간 : 6초, 모든 작업이 동시에 병렬적으로 이루어짐
