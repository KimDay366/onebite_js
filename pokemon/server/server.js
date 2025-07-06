// server setting

const express = require("express");
const path = require("path");
const app = express();
const PORT = 1001;

app.use(express.static(path.join(__dirname, "..")));

app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.listen(PORT, () => {
  console.log("OK!!!!");
});
