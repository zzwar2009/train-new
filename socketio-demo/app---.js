var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.resolve('index.html'));
});

var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log('客户端已经连接');
    socket.send('欢迎光临');
    //接收到客户端发过来的消息时触发
    socket.on('message',function(data){
        console.log(data);
    });
});
server.listen(8080);