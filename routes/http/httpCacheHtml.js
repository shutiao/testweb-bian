var express = require('express');
var httpCacheHtml = express.Router();

httpCacheHtml.route('/cache')
    .get(function(req, res){
        var caseNum = req.query.case;
        // Hander Homepage when there is no query.
        if (!caseNum){
            res.render(__dirname + '/../../views/HTTP/cache.html');
        }
        else{
            // Add Custom Header To Response
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
                case "HTTP-2-1":
                    res.sendFile('cache-static.html', options);
                    break;
                case "HTTP-2-2":
                    res.render(__dirname +'/../../views/HTTP/cache.html');
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
            res.render(__dirname + '/../../views/HTTP/cache.html');
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
                    res.render(__dirname +'/../../views/HTTP/cache.html');
                    break;
            }
        }
    });


module.exports = httpCacheHtml;