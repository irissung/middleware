### Middleware 實作練習
實作 如何利用 express 來 偵測伺服器收到請求的狀態與時間。

### 功能
- 伺服器接收請求紀錄
  Terminal："request time" | "method" from "URL"
  ![image](https://github.com/irissung/middleware/blob/master/image/request.JPG)

- 伺服器回應的時間
  Terminal："request time" | "method" from "URL | Total time ： "從請求到回應所花時間" ms
  ![image](https://github.com/irissung/middleware/blob/master/image/response.JPG)

### 啟動方式
- 將專案clone到本地端
  ```
  git clone https://github.com/irissung/middleware.git
  ```

- 進入到專案資料夾後，安裝packages
  ```
  cd middleware
  npm install
  ```

- 透過nodemon啟動專案
  ```
  npm run dev
  ```
  或
  ```
  npm start
  ```

- 在terminal可以看到 Express is listening on localhost : 3000，開啟瀏覽器在網址列輸入localhost:3000

### 開發環境
- Node.js: v10.15.0
- Express: v4.17.1

### 開發人員
Iris Sung