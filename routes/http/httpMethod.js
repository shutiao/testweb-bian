var express = require('express');
var httpMethod = express.Router();
var auth = require('basic-auth');

httpMethod.route('/methods')
    .get(function(req, res){
        var caseNum = req.query.case;
        if (!caseNum){
            res.render(__dirname + '/../../views/HTTP/methods.html');
        }
        else{
            switch(caseNum){
                case "HTTP-1-1":
                    res.set('Content-Location', '/asset/rules_config.json');
                    res.json(res.locals);
                    break;
                case "HTTP-1-6":
                    //res.sendStatus(req.query.status);
                    res.locals.statusCode = req.query.StatusCode;
                    res.status(req.query.StatusCode).render(__dirname + '/../../views/HTTP/methods-xxx.ejs');
                    break;
                case "HTTP-1-7":
                    var credentials = auth(req);
                    if (!credentials) {
                        res.status(401);
                        res.set('WWW-Authenticate', 'Basic realm = HTTP-1-7');
                        res.end('Access denied');
                    }
                    else{
                        res.end('Acces granted');
                    }

            }
        }
    })

    .post(function(req, res){
        var caseNum = req.body.case;
        if (!caseNum){
            res.render(__dirname + '/../../views/HTTP/methods.html');
        }
        else {
            var options = {
                root: __dirname + '/../../views/HTTP',
                headers: {}
            };
            for (var header in req.query){
                if (header != 'case' &&	header != 'StatusCode'){
                    res.set(header, req.query[header]);
                    options.headers[header] = req.query[header];
                }
            };
            switch(caseNum){
                case "HTTP-1-4":
                    res.location('/HTTP/methods');
                    res.sendStatus(201);
                    break;
                case "HTTP-1-9":
                    res.sendStatus(req.body.StatusCode);
            }
        }
    })

    .delete(function(req, res){
        var caseNum = req.query.case;
        var statusCode = req.query.code || 200;
        switch(caseNum){
            case "HTTP-1-3":
                res.status(statusCode).send(res.locals);
                break;
        }
    })

    .patch(function(req, res){
        var caseNum = req.query.case;
        switch(caseNum){
            case "HTTP-1-5":
                res.sendStatus(204);
        }
    })

    .put(function(req, res){
        var caseNum = req.query.case;
        switch(caseNum){
            case "HTTP-1-8":
                res.sendStatus(100);
        }
    })
;

module.exports = httpMethod;