// 변경 사항 1
// 로그인 브랜치 변경사항 2

//  프레임워크, 패키지 호출
const express = require("express");

//  라우터 호출
const postsRouter = require("./routes/posts.route.js");
const usersRouter = require("./routes/users.route.js");

//  express.js 호출 + 포트번호
const app = express();
const port = 3000;

//  json이 파싱하는 미들웨어
// 이 부분이 없으면 body를 썬더 클라이언트에서 처리할 수 없다.
app.use(express.json());

//  api 호출
// 프론트 주소와 헷갈리지 않기 위해 앞에 /api를 붙인다.
app.use("/api", [postsRouter, usersRouter]);

//  listen 포트 열기
// listen 서버를 계속 열어둔다.
// app.listen(()=>{})
app.listen(port, () => {
  console.log(port, " 번 포트로 서버가 열렸습니다.");
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/api/posts", async (req, res) => {
  const { title, text } = req.body;
  const post = await Posts.create({
    title,
    text,
  });

  return res.status(200).json({ message: "글쓰기 완료" });
});
