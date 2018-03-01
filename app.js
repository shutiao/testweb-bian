var express = require('express');
    app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile('index.html');
});

app.listen(3000);
console.log('Express server started on port 3000');


