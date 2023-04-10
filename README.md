# 登入頁面練習

運用 Node.js + Express 製作的簡易登入


## 特色功能

1. 可測試種子內資料，如果username + password 組合正確，使用者就進入自己的 welcome page，在此頁面上會顯示登入使用者的 firstName。
2. 如果找不到 username，或是 password 錯誤，就彈回登入頁並且在介面上顯示「Username 或Password 錯誤。


## 開發工具

* Node.js @v18.15.0
* Express @4.18.2
* express-handlebars @3.0.0
* mongoose @6.0.5
* dotenv@16.0.3


## 安裝與使用

1. 請先確認有安裝 Node.js 、 npm

2. 將專案 clone 至本機:

3. 透過終端機進入資料夾，輸入：
```
npm install
```

4. 設定 MongoDB 連線：
```
MONGODB_URI=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table><?retryWrites=true&w=majority
```

5. 完成連線後輸入：
```
npm run seed
```
顯示loading userList done!後，接著輸入：
```
npm run start
```

6. 若看見此行訊息則代表伺服器已啟動
```
Express is listening on http://localost:3000
```

7. 打開瀏覽器進入到以下網址
```
http://localhost:3000
```

其他備註：
本專案僅測試使用