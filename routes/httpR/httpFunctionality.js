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
        if (caseNum == undefined){
            res.sendStatus(200);
        }
        else{
            switch(caseNum){
                case 'HTTP-3-5':
                    res.location('/HTTP/functionality?case=HTTP-3-5');
                    res.statusCode = 303;
                    res.end();
                    break;
                default:
                    res.json(res.locals);
            }
        }
    });

module.exports = httpFunctionality;