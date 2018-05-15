var express = require('express');
var HttpR = express.Router();
var auth = require('basic-auth');

HttpR.route('/methods')
    .get(function(req, res){
        var caseNum = req.query.case;
        if (!caseNum){
            res.render(__dirname + '/../views/HTTP/methods.html');
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
                    res.status(req.query.StatusCode).render(__dirname + '/../views/HTTP/methods-xxx.ejs');
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
            res.render(__dirname + '/../views/HTTP/cache.html');
        }
        else {
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


HttpR.route('/cache')
    .get(function(req, res){
        var caseNum = req.query.case;
        // Hander Homepage when there is no query.
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

/**
 * http 2-7
 */
HttpR.route('/cache/http-2-7-switch-version')
.get(function (req, res) {
    res.set("Cache-Control", "no-store,no-cache,max-age=0,s-maxage=0");
    res.set("Pragma", "no-cache");
    res.cookie("http_2_7_version", req.query['version']);
    res.redirect('/HTTP/cache');
});

HttpR.route('/cache/http-2-7.js')
.get(function (req, res) {
    var options = {
        root: __dirname + '/../public/HTTP/tSuite-2-cache-js-version/',
        headers: req.cookies["http_2_7_cache_headers"]
    };
    var jsVersion = req.cookies["http_2_7_version"];
    var jsFile = (jsVersion == 2) ? 'v2.js' : 'v1.js';
    res.sendFile(jsFile, options);
});

HttpR.route('/cache/http-2-7')
.get(function (req, res) {
    var options = {
        headers: {}
    };
    for (var header in req.query) {
        if (header != 'version') {
            res.set(header, req.query[header]);
            options.headers[header] = req.query[header];
        }
    }
    res.cookie("http_2_7_cache_headers", options.headers);
    var jsVersion = req.cookies["http_2_7_version"];
    jsVersion = (jsVersion == 2) ? 2 : 1;
    res.locals.jsVersion = jsVersion;
    var renderFile = __dirname + '/../views/HTTP/cache-http-2-7.html';
    res.render(renderFile, options);
});

/**
* http 2-8
*/
HttpR.route('/cache/http-2-8-switch-version')
.get(function (req, res) {
    res.set("Cache-Control", "no-store,no-cache,max-age=0,s-maxage=0");
    res.set("Pragma", "no-cache");
    res.cookie("http_2_8_version", req.query['version']);
    res.redirect('/HTTP/cache');
});

HttpR.route('/cache/http-2-8.js')
.get(function (req, res) {
    var options = {
        root: __dirname + '/../public/HTTP/tSuite-2-cache-js-version/',
        headers: req.cookies["http_2_8_cache_headers"]
    };
    var jsVersion = req.cookies["http_2_8_version"];
    console.log(jsVersion);
    var jsFile = (jsVersion == 2) ? 'v2.js' : 'v1.js';
    res.sendFile(jsFile, options);
});

HttpR.route('/cache/http-2-8')
.get(function (req, res) {
    var options = {
        headers: {}
    };
    for (var header in req.query) {
        res.set(header, req.query[header]);
        options.headers[header] = req.query[header];
    }
    res.cookie("http_2_8_cache_headers", options.headers);
    var renderFile = __dirname + '/../views/HTTP/cache-http-2-8.html';
    res.render(renderFile, options);
});

HttpR.route('/cache-o')
    .get(function(req, res){
        res.render(__dirname + '/../views/HTTP/cache-o.html');
    });

module.exports = HttpR;