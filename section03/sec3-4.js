// section 03 - 04 . API 호출

// API : 서로 다른 프로그램이 통신할 수 있게 도와주는 약속이자 다리
//       꼭 서버 연결이 아닌 프로그램을 다루게 해주는 로컬 데이터 API, 라이브러리 API, 브라우저의 API 등도 있음.

// 웹 브라우저는 이러한 API를 이용해서 원하는 데이터를 서버에 요청하거나, 서버로부터 전달 받음

// JSON : Javascript Object Notation, 자바스크립트 객체 표기법
//        자바스크립트에서 데이터를 문자열로 나타내기 위해 사용하는 표기법
//        특정 배열 안에 객체 목록(key&value 쌍)으로 이루어져 있음
//        JS 웹 어플리케이션에서 데이터를 전송하기 위해서 사용 됨.

// fetch() : JSON 데이터를 호출할 수 있는 내장함수
let json_response = fetch("https://jsonplaceholder.typicode.com/users");

console.log(json_response); // fetch => promise 객체 출력

let fetch_promise = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

console.log(fetch_promise);

const getData = async () => {
  let respon = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await respon.json(); // 자바스크립트가 활용할 수 있도록 데이터를 변환 해 주기 위해서 .json(); 메서드 사용
  // fatch 함수와 .json메서드 모두 비동기로 움직이기 때문에,
  // 둘 다 응답을 완전히 받아 온 후 다음 단계가 실행 되도록 await을 설정 해 줌
  console.log(data);
};

getData();

const getDataFin = async () => {
  // 기존의 getData(); 에서 사용된 fetch() / .json() 은 모두 비동기 이므로,
  // 얼마나 걸릴 지 모르고 언제 실패할 지 모르므로 꼭 error를 처리할 수 있게 구문을 만들어야 함

  try {
    let respon = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await respon.json();
    console.log(data);
  } catch (err) {
    console.log(`에러 메세지 출력 : ${err}`);
  }
};

getDataFin();
