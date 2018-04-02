var express = require('express');
var app = express();
var server = require('http').createServer(app);
require('./public/NGJS/chattr-server.js')(server);

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.redirect('/NGJS/main');
});

app.route('/StatusCode');

app.get('/NGJS/:case', function(req, res){
    var subCase = req.params.case;
    var pathPrefix = __dirname + '/views/NGJS/';
    switch(subCase){
        case "main":
            res.render(pathPrefix + 'main.html');
            break;
        case "unpr":
            res.render(pathPrefix + 'unpr.html');
            break;
        case "chattr":
            res.render(pathPrefix + 'chattr-console.html');
            break;
        case "SPA":
            res.render(pathPrefix + 'SPA.html');
            break;
        default:
            res.render(pathPrefix + 'main.html');
    }
});

app.get('/VUE', function(req, res){
    res.sendFile(__dirname + '/views/' + 'nav.html');
});

app.route('/StatusCode/:code').get(function(req, res){
    var statusCode = req.params.code;
    res.status(statusCode).send(statusCode + ' 了哈');
});

server.listen(3000, function() {
    console.log('Express Server is Listening on Port 3000');
});



