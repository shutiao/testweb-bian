var express = require('express');
var ngjsR = express.Router();

ngjsR.route('/:case')
    .get(function(req, res){
    //console.log(req.headers);
    //console.log(req.body);
    var subCase = req.params.case;
    var pathPrefix = __dirname + '/../views/NGJS/';
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

module.exports = ngjsR;