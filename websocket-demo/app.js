let express = require('express');
const path = require('path');
let app = express();
let server = require('http').createServer(app);
app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.listen(3000);


//-----------------------------------------------
let WebSocketServer = require('ws').Server;
let wsServer = new WebSocketServer({ port: 8888 });
wsServer.on('connection', function (socket) {
    console.log('连接成功');
    socket.on('message', function (message) {
        console.log('接收到客户端消息:' + message);
        socket.send('服务器回应:' + message);
        setInterval(function(){
            socket.send('服务器回应:' + new Date());
        },2000)
    });
});