const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
  //Q1：伺服器接收請求紀錄
  const reqTime = Date.now()
  const reqTimestamp = new Date().toLocaleString()
  console.log(reqTimestamp + ' | ' + req.method + ' from ' + req.originalUrl);
  //Q2：伺服器回應的時間
  res.on('finish', function () {
    const resTime = Date.now()
    const totalTime = resTime - reqTime
    console.log(`${reqTimestamp} | ${req.method} from ${req.originalUrl} | Total time ：${totalTime} ms.`)
  })
  next();
});

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