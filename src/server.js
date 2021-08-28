let express = require('express')
let app = express()

//let fs = require('fs')
//let bodyParser = require('body-parser')
//let cookieParser= require('cookie-parser')
//let urlencodedParser = bodyParser.urlencoded({ extended: false })
//app.use(bodyParser.json({ extended: false })); 


/* 静态文件目录 */
app.use('/assets', express.static(__dirname + '/assets'));
//请求
app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html')
})


app.listen(8080, () => console.log('http://localhost:8080/'))