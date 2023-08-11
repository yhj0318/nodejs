const express = require('express')
const app = express()
// 5000번 포트를 사용한다.
const port = 5000

// 출력하는 부분
app.get('/', (req, res) => {
  res.send('Hello World!~안녕하세요')
})

// 실행할 때 메세지
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})