// app.js
const express = require('express')
const app = express()
const port = 3000

//https://www.delftstack.com/zh-tw/howto/javascript/javascript-convert-timestamp-to-date/
const requestTime = function (req, res, next) {
  time = new Date();
  console.log(time.getTime())
  console.log(
    (time.getFullYear() +
    "/" + (time.getMonth() + 1) +
    "/" + time.getDate() +
    " " + time.getHours() +
    ":" + time.getMinutes() +
      ":" + time.getSeconds()
    ) + " | " +  req.method + " from " + req.url
  )
  next()
}

app.use(requestTime)

app.get('/', (req, res, next) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})