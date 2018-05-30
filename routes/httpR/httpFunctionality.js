var express = require('express');
var httpFunctionality = express.Router();

httpFunctionality.route('/functionality')
    .get(function(req, res){
        var caseNum = req.query.case;
        if (!caseNum){
            res.render(__dirname + '/../../views/HTTP/functionality.html');
        }
        else{
            var options = {
                root: __dirname + '/../../views/HTTP',
                headers: {}
            };
            for (var header in req.query){
                if (header != 'case' &&	header != 'StatusCode'){
                    res.set(header, req.query[header]);
                    options.headers[header] = req.query[header];
                }
            }
            switch(caseNum){
                case "HTTP-3-1":
                    res.render(__dirname + '/../../views/HTTP/functionality.html');
                    break;
                case "HTTP-3-2":
                    var options_root = options.root;
                    options.root += '/cache-html';
                    res.sendFile('cache-static.html', options);
                    options.root = options_root;
                    break;
                case "HTTP-3-3":
                    res.redirect(301, '/HTTP/functionality');
                    break;
                case "HTTP-3-4":
                    res.redirect(302, '/HTTP/functionality');
                    break;
                case "HTTP-3-5":
                    res.sendStatus(200);
                    break;
                default:
                    res.json(res.locals);
            }
        }
    })

    .post(function(req, res){
        var caseNum = req.query.case || req.body.case;
        switch(caseNum){
            case 'csp-reports':
                res.send(res.locals);
                break;
            case 'HTTP-3-4':
                res.redirect(302, '/HTTP/functionality');
                break;
        }
    })
    
    .put(function(req, res){
        var caseNum = req.query.case || req.body.case;
        var statusCode = req.query.StatusCode || req.body.StatusCode;
        if (caseNum == undefined){
            res.sendStatus(200);
        }
        else{
            switch(caseNum){
                case 'HTTP-3-5':
                    res.location('/HTTP/methods');
                    res.statusCode = statusCode;
                    res.end();
                    break;
                default:
                    res.json(res.locals);
            }
        }
    });


httpFunctionality.route('/functionality/HTTP-3-6')
    .all(function(req, res){
        res.redirect(308, '/HTTP/functionality/HTTP-3-6/redirect');
    });

httpFunctionality.route('/functionality/HTTP-3-6/redirect')
    .all(function(req, res){
        res.sendStatus(200);
    });

httpFunctionality.route('/functionality/HTTP-3-7/:index')
    .all(function(req, res){
        var index = +req.params.index;
        index += 1;
        var nextLoc = '/HTTP/functionality/HTTP-3-7/' + index;
        if (index < 10){
            res.redirect(308, nextLoc);
        }
        else{
            res.sendStatus(200);
        }
    });

httpFunctionality.route('/functionality/HTTP-3-8')
    .all(function(req, res){
        var remoteAddress = req.query.remoteAddress || req.body.remoteAddress;
        res.redirect(302, remoteAddress);
    });

module.exports = httpFunctionality;