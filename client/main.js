// 1.Clientサイドがfetchで通信を行い、serverサイドに"http://localhost:5000/data"リクエストを送る
const fetchDataFromServer=()=>{
  fetch("http://localhost:5000/data")
  .then((res)=> res.json())
// 3.レスポンスを受け取ったClientサイドが、受け取ったレスポンス（"Server.jsからデータを取得しました"）をConsoleに表示
  .then((data)=>console.log(data));
};

fetchDataFromServer();