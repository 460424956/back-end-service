var http = require('http')
 
var server = http.createServer(function (req, res) {
    console.log("收到客户端请求：",req.url)
   
})
 
server.listen(8888, function () {
    console.log('start server')
})