/**
 * 用户接口
 */
module.exports = function(app){
  app.get('/user/index', function(req, res){
    res.send("Hello world")
  })
}