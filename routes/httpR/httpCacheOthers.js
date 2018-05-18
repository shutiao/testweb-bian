var express = require('express');
var httpCacheOthers = express.Router();
var fs = require("fs");

httpCacheOthers.route('/cache-o')
    .get(function (req, res) {
        res.render(__dirname + '/../../views/HTTP/cache-others.html');
    });



/**
 * http 4-1
 */
var http_4_1_common_header = {
    'Cache-Control': 'no-store,no-cache,max-age=0,s-maxage=0,private',
    'Expires': '-1',
    'Pragma': 'no-cache',
    'age': '2181',
    'timing-allow-origin': '*',
    'vary': '*',
    'X-normal': 'Y',
    'x-**': '-1',
    'x-cache': 'unknown',
    'via': 'nothing'
};
httpCacheOthers.route('/cache-o/http-4-1')
    .get(function (req, res) {
        res.set("Cache-Control", 'no-cache,no-store,max-age=-1,s-maxage=-1');
        res.set("Pragma", 'no-cache');
        res.set("Expires", '-1');
        var renderFile = __dirname + '/../../views/HTTP/cache-others/cache-http-4-1.html';
        res.render(renderFile);
    });

httpCacheOthers.route('/cache-o/http-4-1.css')
    .get(function (req, res) {
        var options = {
            root: __dirname + '/../../public/HTTP/tSuite-4-cache-o-sources/',
            headers: http_4_1_common_header
        };
        res.sendFile('http-4-1.css',options);
    });

//no cache headers js
httpCacheOthers.route('/cache-o/http-4-1.js')
    .get(function (req, res) {
        res.app.disable("etag");
        fs.readFile(__dirname + '/../../public/HTTP/tSuite-4-cache-o-sources/' + 'v1.js', function(error, data){
            if (error) {
                throw console.log(error);
            }
            res.type("application/javascript; charset=UTF-8");
            res.send(data.toString());
            res.end();
            res.app.enable("etag");
        });

    });

httpCacheOthers.route('/cache-o/http-4-1/fonts/:src_name')
    .get(function (req, res) {
        var src_name = req.params.src_name;
        var options = {
            root: __dirname + '/../../public/lib/fonts/',
            headers: http_4_1_common_header
        };
        res.sendFile(src_name, options);
    });


/**
 * http 4-2
 */
httpCacheOthers.route('/cache-o/http-4-2-switch-version')
    .get(function (req, res) {
        res.set("Cache-Control", "no-store,no-cache,max-age=0,s-maxage=0");
        res.set("Pragma", "no-cache");
        res.cookie("http_4_2_version", req.query['version']);
        res.redirect('/HTTP/cache-o');
    });

httpCacheOthers.route('/cache-o/http-4-2.js')
    .get(function (req, res) {
        var options = {
            root: __dirname + '/../../public/HTTP/tSuite-4-cache-o-sources/',
            headers: req.cookies["http_4_2_cache_headers"]
        };
        var jsVersion = req.cookies["http_4_2_version"];
        var jsFile = (jsVersion == 2) ? 'v2.js' : 'v1.js';
        res.sendFile(jsFile, options);
    });

httpCacheOthers.route('/cache-o/http-4-2')
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
        res.cookie("http_4_2_cache_headers", options.headers);
        var jsVersion = req.cookies["http_4_2_version"];
        jsVersion = (jsVersion == 2) ? 2 : 1;
        res.locals.jsVersion = jsVersion;
        var renderFile = __dirname + '/../../views/HTTP/cache-others/cache-http-4-2.html';
        res.render(renderFile, options);
    });

/**
 * http 4-3
 */
httpCacheOthers.route('/cache-o/http-4-3-switch-version')
    .get(function (req, res) {
        res.set("Cache-Control", "no-store,no-cache,max-age=0,s-maxage=0");
        res.set("Pragma", "no-cache");
        res.cookie("http_4_3_version", req.query['version']);
        res.redirect('/HTTP/cache-o');
    });

httpCacheOthers.route('/cache-o/http-4-3.js')
    .get(function (req, res) {
        var options = {
            root: __dirname + '/../../public/HTTP/tSuite-4-cache-o-sources/',
            headers: req.cookies["http_4_3_cache_headers"]
        };
        var jsVersion = req.cookies["http_4_3_version"];
        console.log(jsVersion);
        var jsFile = (jsVersion == 2) ? 'v2.js' : 'v1.js';
        res.sendFile(jsFile, options);
    });

httpCacheOthers.route('/cache-o/http-4-3')
    .get(function (req, res) {
        var options = {
            headers: {}
        };
        for (var header in req.query) {
            res.set(header, req.query[header]);
            options.headers[header] = req.query[header];
        }
        res.cookie("http_4_3_cache_headers", options.headers);
        var renderFile = __dirname + '/../../views/HTTP/cache-others/cache-http-4-3.html';
        res.render(renderFile, options);
    });

/**
 * http 4-5
 */
httpCacheOthers.route('/cache-o/http-4-5.js')
    .get(function (req, res) {
        var options = {
            root: __dirname + '/../../public/HTTP/tSuite-4-cache-o-sources/',
            headers: {
                'Cache-Control':'public,max-age=9999,s-maxage=999'
            }
        };
        res.sendFile('v1.js', options);
    });

httpCacheOthers.route('/cache-o/http-4-5')
    .get(function (req, res) {
        var options = {
            root: __dirname + '/../../views/HTTP/cache-others/',
            headers: {
                'Cache-Control':'public,max-age=9999,s-maxage=999'
            }
        };
        res.sendFile("cache-http-4-5.html", options);
    });

module.exports = httpCacheOthers;