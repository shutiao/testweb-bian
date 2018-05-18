var express = require('express');
var httpCacheHtml = express.Router();

httpCacheHtml.route('/cache')
    .get(function (req, res) {
        var caseNum = req.query.case;
        // Hander Homepage when there is no query.
        if (!caseNum) {
            res.render(__dirname + '/../../views/HTTP/cache-html.html');
        }
        else {
            // options is for sendFile
            var options = {
                root: __dirname + '/../../views/HTTP/cache-html',
                headers: {}
            };
            // Add Response Header by Extracting it from Request Query
            for (var header in req.query) {
                if (header != 'case' && header != 'StatusCode') {
                    res.set(header, req.query[header]);
                    options.headers[header] = req.query[header];
                }
            }
            ;
            switch (caseNum) {
                case "HTTP-2-1":
                    res.sendFile('cache-static.html', options);
                    break;
                case "HTTP-2-2":
                    res.render(__dirname + '/../../views/HTTP/cache-html.html');
                    break;
                case  "HTTP-2-3":
                    res.app.disable("etag");
                    res.render(__dirname + '/../../views/HTTP/cache-html.html');
                    res.app.enable("etag");
                    break;
                case "HTTP-2-6":
                    res.status(req.query['StatusCode']);
                    res.sendFile('cache-static.html', options);
                    break;
            }
        }
    })

    .post(function (req, res) {
        var caseNum = req.body.case;
        if (!caseNum) {
            res.render(__dirname + '/../../views/HTTP/cache-html.html');
        }
        else {
            // Add Custom Header To Response
            for (var header in req.body) {
                if (header != 'case') {
                    res.set(header, req.body[header]);
                }
            }
            switch (caseNum) {
                case "HTTP-2-4":
                case "HTTP-2-5":
                    res.render(__dirname + '/../../views/HTTP/cache-html.html');
                    break;
            }
        }
    });


/**
 * http 2-7
 */
httpCacheHtml.route('/cache/http-2-7')
    .get(function (req, res) {
        var options = {
            root: __dirname + '/../../views/HTTP/cache-html',
            headers: {}
        };
        for (var header in req.query) {
            res.set(header, req.query[header]);
            options.headers[header] = req.query[header];
        }
        ;
        for (var header in req.body) {
            res.set(header, req.body[header]);
        }
        res.render(__dirname + '/../../views/HTTP/cache-html/cache-static.html', options);
    });

module.exports = httpCacheHtml;