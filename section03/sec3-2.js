// section 03 - 02 . 프로미스 객체

// 프로미스(객체) : 비동기를 편리하게 처리 가능

// [ 사용 방법 ]
// const executor = (resolve, reject) => {
//       executor = 사용자가 생성한 함수

// 성공과 실패 전 대기 상태 - state : pending(대기) / result : undefined

// 비동기의 특성상 성공, 실패에 따라서 다른 함수를 호출해 실행 해야함.
// resolve, reject = 성공 or 실패 시 실행 될 콜백함수를 매게변수로 받음

//  (성공 시 실행) resolve("...") → state : fulfilled / result : value
//  (실패 시 실행) reject("...") → state : rejected / result : error

// };

// const promise = new Promise(executor);
//  => promise 객체를 생성 시 반드시 executor 함수를 전달 받으며, 자동으로 실행 됨.
//  => executor

// console.log(promise);

// =============================================================
// 실행 예제 1) 프로미스 객체 만들고 사용하기

const executor = (resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve("성공");
    } else {
      reject("실패");
    }
  }, 3000);
};

const promiseObj = new Promise(executor);

console.log(promiseObj);
// promise 객체 내 출력 값

// 3초를 기다리지 않고 바로 객체를 오픈하는 경우
// [[Prototype]] : Promise
// [[PromiseState]] : "pending"
// [[PromiseResult]] : undefined

// 3초가 지난 후 객체를 오픈하는 경우
// [[Prototype]] : Promise
// [[PromiseState]] : "fulfilled"
// [[PromiseResult]] : "성공" -> resolve("블라블라") 로 바꾸면 바꾼 값 출력

promiseObj
  .then((result) => {
    console.log(`ture : ${result}`);
  })
  .catch((error) => {
    console.log(`false : ${error}`);
  });
// promiseObj의 객체 생성 후 실행 시 then /catch 구문 사용
//   .then(()=>{}) : 객체가 성공했을 경우, 성공한 값을 받아 실행되는 동작 지정
//   .catch(()=>{}) : 객체가 실패했을 경우, 실패한 값을 받아 실행되는 동장 지정

//   .then(()=>{}, ()=>{}) : 앞 함수 = 성공용 / 뒷 함수 = 실패용

// [프로미스 전체 순서 정리]

// 1) 프로미스 객체를 만드는데, 사용되는 함수에 참(성공)/거짓(실패)를 구분할 수 있도록 구성

// 2) 만든 프로미스 객체를 "실행" 시킬 때 then / catch 를 써서 각각 실행 후 동작 할 함수를 구성

// 3-1) success 값이 ture면 if문에 따라 성공으로 되어 resolve가 실행되고,
//      실행 된 값을 then 에서 전달받아 then 구문이 실행 되는데, 그때 전달받은 값도 함께 출력
//        resolve("성공"); -> console.log(`ture : ${result}`); -> ture : 성공

// 3-2) success 값이 false면 if문에 따라 실패으로 되어 reject가 실행되고,
//      실행 된 값을 catch 에서 전달받아 catch 구문이 실행 되는데, 그때 전달받은 값도 함께 출력
//        reject("실패"); -> console.log(`false : ${error}`); -> false : 실패

//=====================================================================================

// 실행예제 2) 콜백지옥 해결하기

// 1) workA~C 함수를 만들어 차례로 실행 하려고 함
const workA = (value, callback) => {
  // 3) 10 전달 받아 5를 더하고 콜백함수에 넘겨 줌
  value += 5;
  callback(value);
};

const workB = (value, callback) => {
  callback(value + 2);
};

const workC = (value, callback) => {
  callback(value + 10);
};

// 2) 진행 경로를 보기 위하여 초기 임시값으로 value에 10을 전달함
workA(10, (resA) => {
  // 4) workA의 콜백 함수로 전달받은 value값 15가 resA에 저장 됨
  console.log(`workA : ${resA}`);

  workB(resA, (resB) => {
    // 5) 전달 받은 resA 값 15가 workB에 가서 2를 더해져 17이 된 후 콜백함수에 의해 value => resB로 전달 됨
    console.log(`workB : ${resB}`);

    workC(resB, (resC) => {
      // 6) 전달 받은 resB 값 17가 workC에 가서 10를 더해져 27이 된 후 콜백함수에 의해 value => resC 전달 됨
      console.log(`workC : ${resC}`);
    });
  });
});
// 콜백지옥

const workAP = (value) => {
  const promise = new Promise((res) => {
    res(value + 5);
  });
  return promise;
  // promise로 반환하기 때문에 workAP는 then 메서드 사용 가능
};

const workBP = (value) => {
  const promise = new Promise((res) => {
    res(value + 2);
  });
  return promise;
};

const workCP = (value) => {
  //   const promise = new Promise((res) => {
  //     res(value + 10);
  //   });
  //   return promise;
  return value + 10;
};

workAP(10)
  .then((resAP) => {
    // workAP가 promise 객체로 선언됬기 때문에, then 메서드를 사용해서 실행 시킴.
    console.log(`workAP : ${resAP}`);
    return workBP(resAP); // workBP가 promise로 선언 됫기 때문에 workBP로 값 넘김
  })
  .then((resBP) => {
    // 이후 then 메서드를 사용해서 workBP 실행 시킴.
    console.log(`workBP : ${resBP}`);
    return workCB(resBP); // promise 로 만들어 지지 않았기 때문에 값 전달 자체가 안됨
    console.log("test");
  })
  .then((resCP) => {
    console.log(`workCP : ${resCP}`);
  });

// ====================================================================
// 추가 예제 ) 비동기 방식과 실행 순서의 이해

const login = new Promise((resolve, reject) => {
  // 여기는 서버 요청을 보냈다고 상상!
  const userName = "kimday";
  const success = true; // 이걸 false로 바꾸면 실패 상황도 연습 가능

  if (success) {
    setTimeout(() => {
      resolve(`환영합니다, ${userName}님!`);
    }, 0);
  } else {
    reject("로그인에 실패했습니다.");
  }
});

console.log("로그인 시도 중..."); // pending...

login
  .then((msg) => {
    console.log(msg); // 성공 시: 환영 메시지 출력
  })
  .catch((err) => {
    console.log("❗", err); // 실패 시: 에러 메시지 출력
  });

// 1) js 엔진 => 로그인 시도
// 2) 비동기 작업으로 진행하기 위해 web API 에 로그인 작업 요청
// 3) js 엔진 => 로그인 로딩 화면 표기 (동기)
// 4) web API 가 일을 끝내고 정보를 받아온걸 들고 대기중 = 콜백 큐에 넣음
// 5) event Loop 가 Web API를 발견해서 실행 스택이 빈걸 보고 넣어줌
// 6) 로그인에 성공 했으므로 .then 메서드로 메인 화면이 실행 됨
