const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
// https://www.delftstack.com/zh-tw/howto/javascript/ javascript-convert-timestamp-to-date/
// https://ipirozhenko.com/blog/measuring-requests-duration-nodejs-express/
function requestTime (req, res) {
  const starTime = new Date()
  res.on('finish', () => {
    const endTime = new Date()
    console.log(
      (starTime.getFullYear() +
        '/' + (starTime.getMonth() + 1) +
        '/' + starTime.getDate() +
        ' ' + starTime.getHours() +
        ':' + starTime.getMinutes() +
        ':' + starTime.getSeconds() +
        ':' + starTime.getMilliseconds()
      ) + ' | ' + req.method + ' from ' + req.url + ' | total time: ' + (endTime - starTime) + 'ms'
    )
  })
}

app.use((req, res, next) => {
  requestTime(req, res)
  next()
})

app.get('/', (req, res) => {
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
