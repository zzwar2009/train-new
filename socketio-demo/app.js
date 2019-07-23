let express = require('express');
let http = require('http');
let path = require('path')
let app = express();
let mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'chat'
});
connection.connect();
app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.header('Content-Type', "text/html;charset=utf8");
    res.sendFile(path.resolve('index.html'));
});

let server = http.createServer(app);
//因为websocket协议是要依赖http协议实现握手的，所以需要把httpserver的实例的传给socket.io
let io = require('socket.io')(server);
const SYSTEM = '系统';
//保存着所有的用户名和它的socket对象的对应关系
let sockets = {};
let mysockets = {};
let messages = [];//从旧往新旧的  slice
//在服务器监听客户端的连接
io.on('connection', function (socket) {
    console.log('socket', socket.id)
    mysockets[socket.id] = socket;
    //用户名，默认为undefined
    let username;
    //放置着此客户端所在的房间
    let rooms = [];
    // 私聊的语法 @用户名 内容
    socket.on('message', function (message) {
        if (username) {
            //首先要判断是私聊还是公聊
            let result = message.match(/@([^ ]+) (.+)/);
            if (result) {//有值表示匹配上了
                let toUser = result[1];//toUser是一个用户名 socket
                let content = result[2];
                let toSocket = sockets[toUser];
                if (toSocket) {
                    toSocket.send({
                        user: username,
                        content,
                        createAt: new Date()
                    });
                } else {
                    socket.send({
                        user: SYSTEM,
                        content: `你私聊的用户不在线`,
                        createAt: new Date()
                    });
                }
            } else {//无值表示未匹配上
                //对于客户端的发言，如果客户端不在任何一个房间内则认为是公共广播，大厅和所有的房间内的人都听的到。
                //如果在某个房间内，则认为是向房间内广播 ，则只有它所在的房间的人才能看到，包括自己
                let messageObj = {
                    user: username,
                    content: message,
                    createAt: new Date()
                };
                //相当于持久化消息对象
                //messages.push(messageObj);
                connection.query(`INSERT INTO message(user,content,createAt) VALUES(?,?,?)`, [messageObj.user, messageObj.content, messageObj.createAt], function (err, results) {
                    console.log(results);
                });
                if (rooms.length > 0) {
                    /**
                    socket.emit('message', {
                        user: username,
                        content: message,
                        createAt: new Date()
                    });

                    rooms.forEach(room => {
                        //向房间内的所有的人广播 ，包括自己
                           io.in(room).emit('message', {
                              user: username,
                              content: message,
                              createAt: new Date()
                          });
                        //如何向房间内除了自己之外的其它人广播
                        socket.broadcast.to(room).emit('message', {
                            user: username,
                            content: message,
                            createAt: new Date()
                        });
                    });
                    */
                    let targetSockets = {};
                    rooms.forEach(room => {
                        let roomSockets = io.sockets.adapter.rooms[room].sockets;
                        console.log('roomSockets', roomSockets);//{id1:true,id2:true}
                        Object.keys(roomSockets).forEach(socketId => {
                            if (!targetSockets[socketId]) {
                                targetSockets[socketId] = true;
                            }
                        });
                    });
                    Object.keys(targetSockets).forEach(socketId => {
                        mysockets[socketId].emit('message', messageObj);
                    });
                } else {
                    io.emit('message', messageObj);
                }
            }
        } else {
            //把此用户的第一次发言当成用户名
            username = message;
            //当得到用户名之后,把socket赋给sockets[username]
            sockets[username] = socket;
            //socket.broadcast表示向除自己以外的所有的人广播
            socket.broadcast.emit('message', { user: SYSTEM, content: `${username}加入了聊天室`, createAt: new Date() });
        }
    });
    socket.on('join', function (roomName) {
        if (rooms.indexOf(roomName) == -1) {
            //socket.join表示进入某个房间
            socket.join(roomName);
            rooms.push(roomName);
            socket.send({
                user: SYSTEM,
                content: `你成功进入了${roomName}房间!`,
                createAt: new Date()
            });
            //告诉客户端你已经成功进入了某个房间
            socket.emit('joined', roomName);
        } else {
            socket.send({
                user: SYSTEM,
                content: `你已经在${roomName}房间了!请不要重复进入!`,
                createAt: new Date()
            });
        }
    });
    socket.on('leave', function (roomName) {
        let index = rooms.indexOf(roomName);
        if (index == -1) {
            socket.send({
                user: SYSTEM,
                content: `你并不在${roomName}房间，离开个毛!`,
                createAt: new Date()
            });
        } else {
            socket.leave(roomName);
            rooms.splice(index, 1);
            socket.send({
                user: SYSTEM,
                content: `你已经离开了${roomName}房间!`,
                createAt: new Date()
            });
            socket.emit('leaved', roomName);
        }
    });
    socket.on('getAllMessages', function () {
        //let latestMessages = messages.slice(messages.length - 20);
        connection.query(`SELECT * FROM message ORDER BY id DESC limit 20`, function (err, results) {
            // 21 20 ........2 
            socket.emit('allMessages', results.reverse());// 2 .... 21
        });

    });
});
server.listen(8080);

/**
 * socket.send 向某个人说话
 * io.emit('message'); 向所有的客户端说话
 * 
 */