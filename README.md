clientサイドフォルダとserverサイドフォルダを用意し、
異なるオリジン間で通信を行い、同一オリジンポリシー違反とCORSの実装を確認するプログラムです。

clientサイド：localhost:5500 ※起動方法:LiveServer
serverサイド：localhost:5000 ※起動方法:npm run stratを実行


<プログラムの内容>
1.Clientサイドがfetchで通信を行い、serverサイドに"http://localhost:5000/data"リクエストを送る
2.リクエストを受け取ったServerサイドが、"Server.jsからデータを取得しました" とJSON形式でレスポンスを返す
3.レスポンスを受け取ったClientサイドが、受け取ったレスポンス（"Server.jsからデータを取得しました"）をConsoleに表示

※CORSの設定の箇所をコメントアウトすると同一オリジンポリシー違反になりConsoleにエラーが表示されます
※CORSの設定の箇所をコメントインにするとCORSが実行されConsoleに"Server.jsからデータを取得しました"が表示されます


<ハンズオンの参考>
https://youtu.be/8fE2TmbPqlU?si=fyiXOKdCvp0lppY4