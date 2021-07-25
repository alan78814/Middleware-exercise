# Middleware 練習
實作一個 middleware ，當伺服器收到任何來自瀏覽器的 request 時，都會自動把資訊紀錄到 server log 裡。

## 功能說明
- 紀錄伺服器收到請求的時間戳記 & 伺服器送出回應的時間
- 終端機上顯示伺服器收到請求 & 送出回應時間的處理時間，輸出「total time: Xms」的形式

## 環境建置
- Visual Studio Code:1.57.1
- Node.js:v10.15.0
- Express.js:4.17.1
- Express-handlebars:5.3.2
- Nodemon:2.0.7

## 安裝流程
請依照敘述於終端機輸入指令

1.開啟終端機將專案存至本機:
```
git clone https://github.com/alan78814/expense-tracker.git
```
2.進入專案目錄
```
cd expense-tracker
```
3.安裝套件
```
npm install
```
4.啟動專案
```
npm run dev
```
5.成功終端機顯示"App running on port 3000"

6.可開啟瀏覽器輸入 http://localhost:3000 開始使用
