const express = require("express");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 3000);

// 정적파일 제공
app.use("/", express.static(path.resolve(__dirname + "/frontend")));

// 메인페이지로 접근시, home.html 렌더링
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/frontend/home.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
