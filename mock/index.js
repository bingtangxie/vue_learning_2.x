var path = require('path')
var express = require('express')
var mockjs = require('mockjs')


var app = express()
var router = require('./api/user.js')(app)


var config = {
  port: 3000
}
// app.use('/api', mockjs(path.join(__dirname, 'api')))
// app.use(mockjs(path.join(__dirname, 'api')))
// var args = process.argv
// for (let i = 0; i < args.length; i++){
//   if (args[i] === '--port' && i < args.length - 1 && args[i+1] > 0){
//     config.port == args[i+1]
//     break
//   }
// }

app.listen(config.port, function(){
  console.log('mock-server[mockjs-lite]:http://localhost:' + config.port)
  console.log(router)
})