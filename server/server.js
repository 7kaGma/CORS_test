const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Server.jsを起動しました：localost:5000" );
});

/*==========
CORSの設定
==========*/
// const cors = require("cors");
// app.use(
//   cors({
//     origin: "http://127.0.0.1:5500",
//     methods: ["GET", "POST"],
//   })
// );




// 2.リクエストを受け取ったServerサイドが、"Server.jsからデータを取得しました" とJSON形式でレスポンスを返す
app.get("/data", (req, res) => {
  res.json({ text: "Server.jsからデータを取得しました" });
});

app.listen(port, () =>
  console.log(`Server is Runnning : http://localhost:${port}`)
);
