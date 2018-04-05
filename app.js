var express = require('express');
var app = express();
var server = require('http').createServer(app);
var routers = require('./routes');
var chattr = require('./public/NGJS/chattr-server.js');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
routers(app);
chattr(server);

server.listen(3000, function() {
    console.log('Express Server is Listening on Port 3000');
});



