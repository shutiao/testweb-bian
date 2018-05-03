var express = require('express');
var HttpR = express.Router();

HttpR.route('/methods')
    .get(function(req, res){
        var caseNum = req.query.case;
        if (!caseNum){
            res.render(__dirname +'/../views/HTTP/methods.html');
        }
        switch(caseNum){
            case "HTTP-1-1":
                res.set('Content-Location', '/asset/rules_config.json');
                res.json(req.headers);
                break;
        }
    })

    .post(function(req, res){
        res.render(__dirname +'/../views/HTTP/methods.html');
    })
    
    .delete(function(req, res){
        var caseNum = req.query.case;
        var statusCode = req.query.code || 200;
        switch(caseNum){
            case "HTTP-1-3":
                res.status(statusCode).send(res.locals); 
                break;
        }
    });


HttpR.route('/cache')
    .get(function(req, res){
        var caseNum = req.query.case;
        if (!caseNum){
            res.render(__dirname + '/../views/HTTP/cache.html');
        }
        else{
            // Add Custom Header To Response
            var options = {
                root: __dirname + '/../views/HTTP',
                headers: {}
            };
            for (var header in req.query){
                if (header != 'case' &&	header != 'StatusCode'){
                    res.set(header, req.query[header]);
                    options.headers[header] = req.query[header];
                }
            };
            switch(caseNum){
                case "HTTP-2-1":
                    res.sendFile('cache-static.html', options);
                    break;
                case "HTTP-2-2":
                    res.render(__dirname +'/../views/HTTP/cache.html');
                    break;
                case "HTTP-2-6":
                    res.status(req.query['StatusCode']);
                    res.sendFile('cache-static.html', options);
                    break;
            }
        }
    })

    .post(function(req, res){
        var caseNum = req.body.case;
        if (!caseNum){
            res.render(__dirname + '/../views/HTTP/cache.html');
        }
        else {
            // Add Custom Header To Response
            for (var header in req.body){
                if (header != 'case'){
                    res.set(header, req.body[header]);
                }
            }
            switch(caseNum){
                case "HTTP-2-4":
                case "HTTP-2-5":
                    res.render(__dirname +'/../views/HTTP/cache.html');
                    break;
            }
        }
    });

HttpR.route('/functionality')
    .get(function(req, res){
        var caseNum = req.query.case;
        if (!caseNum){
            res.render(__dirname + '/../views/HTTP/functionality.html');
        }
        else{
            var options = {
                root: __dirname + '/../views/HTTP',
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
                    res.render(__dirname + '/../views/HTTP/functionality.html');
                    break;
                case "HTTP-3-2":
                    res.sendFile('cache-static.html', options);
                    break;
                case "HTTP-3-3":
                    res.redirect(301, '/HTTP/functionality');
                    break;
                case "HTTP-3-4":
                    res.redirect(302, '/HTTP/functionality');
                    break;
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
    });

module.exports = HttpR;