// section 08-7. nodejs & expressjs

// node.js : 자바스크립트 엔진을 모든곳에서 동작하게 하는 실행환경 (=런타임)
// express.js : 순수 node.js로 구축하기엔 너무 복잡하여, 좀 더 쉽게 개발환경을 구축하기 위해 개발 된 프레임워크

const express = require("express");
// node.js 의 프레임워크인 express 모듈 불러오기

const path = require("path");
// 파일 시스템의 경로를 다루기 위해 사용되는 path 모듈 불러오기

const app = express();
// express 함수를 호출해서 express 애플리케이션 객체를 생성

const PORT = 3000;
// 서버가 계속해서 듣고있을 포트 번호 설정

app.use(express.static(__dirname + "/.."));
// app.use() : express 애플리케이션에 미들웨어(middle ware = 응답을 중간 정리 해 주는 함수) 추가
// express.static() : 정적파일을 제공하는 미들웨어 함수
// __dirname : 현재 파일의 경로를 나타냄
// "/.." : 원하는 파일의 경로

app.use(express.static(path.join(__dirname, "..")));
// path.join('src','component','content.js') => /src/component/content.js 로 반환됨

// =============================================================

// 브라우저 (Client)  --- request --->   서버(server)
//                  <--- response ---

// http : 웹에서 클라이언트와 서버간에 데이터를 주고받기 위한 규칙

// http 메서드
// - GET : 서버로부터 데이터 요청
// - POST : 서버로부터 데이터 전송
// - PUT : 서버에 데이터 업로드
// - DELETE : 서버에서 데이터 삭제

// app.get(경로, 콜백함수)
// '/*' 또는 '/*splat' : 모든 경로와 매칭시키는 와일드카드 격 경로 (express@4 , express@5 버전별로 사용)
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
  // 모든 경로 요청에 대해 index.html 파일로 보내는 함수가 만들어짐
});

// express server에서 우리가 지정한 포트 넘버를 알아들을 수 있도록 함
app.listen(PORT, () => {
  console.log("START SERVER");
});
