var express = require('express');
    app = express();

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



app.listen(3000);
console.log('Express server started on port 3000');


