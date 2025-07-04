console.log("hello");

const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "..")));

app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
  // 모든 경로 요청에 대해 index.html 파일로 보내는 함수가 만들어짐
});

app.listen(PORT, () => {
  console.log("START SERVER");
});
