module.exports = function (server){
    var io = require('socket.io')(server);
    io.on('connection', function(client){
        client.emit('connected', { status: true });
        client.on('join', function(nickname){
            client.nickname = nickname;
            console.log('Client ' + nickname + ' connected...');
            client.broadcast.emit('message', nickname + ' joined the room');
        });
        client.on('message', function(message){
            var nickname = client.nickname;
            client.broadcast.emit('message', nickname + ": " + message);
            client.emit('message', nickname + ": " + message);
        });
    });
}
