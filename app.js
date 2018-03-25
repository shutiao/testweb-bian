var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.redirect('/NGJS');
});

app.get('/abc', function(req, res){
    res.end('this is /abc');
});

app.get('/NGJS', function(req, res){
    res.sendFile(__dirname + '/views/' + 'NGJS-UT.html');
});

app.get('/NG', function(req, res){
    res.sendFile(__dirname + '/views/' + 'nav.html');
});

app.get('/React', function(req, res){
    res.sendFile(__dirname + '/views/' + 'nav.html');
});

app.get('/VUE', function(req, res){
    res.sendFile(__dirname + '/views/' + 'nav.html');
});

app.get('/chattr', function(req, res){
    res.sendFile(__dirname + '/views/' + 'chattr-console.html');
})


server.listen(3000);
console.log('HTTP server started on port 3000');

var io = require('socket.io')(server);

io.on('connection', function(client){
    //client.emit('message', { hello: 'world'});
    client.emit('connected', { status: true });
    client.on('join', function(nickname){
        // available both on the server and client
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

