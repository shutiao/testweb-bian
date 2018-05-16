var express = require('express');
var httpCacheOthers = express.Router();
var auth = require('basic-auth');

httpCacheOthers.route('/cache-o')
    .get(function(req, res){
        res.render(__dirname + '/../../views/HTTP/cache-others/cache-o.html');
    });

/**
 * http 4-2
 */
httpCacheOthers.route('/cache/http-4-2-switch-version')
    .get(function (req, res) {
        res.set("Cache-Control", "no-store,no-cache,max-age=0,s-maxage=0");
        res.set("Pragma", "no-cache");
        res.cookie("http_4_2_version", req.query['version']);
        res.redirect('/HTTP/cache-o');
    });

httpCacheOthers.route('/cache/http-4-2.js')
    .get(function (req, res) {
        var options = {
            root: __dirname + '/../../public/HTTP/tSuite-4-cache-o-sources/',
            headers: req.cookies["http_4_2_cache_headers"]
        };
        var jsVersion = req.cookies["http_4_2_version"];
        var jsFile = (jsVersion == 2) ? 'v2.js' : 'v1.js';
        res.sendFile(jsFile, options);
    });

httpCacheOthers.route('/cache/http-4-2')
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
httpCacheOthers.route('/cache/http-4-3-switch-version')
    .get(function (req, res) {
        res.set("Cache-Control", "no-store,no-cache,max-age=0,s-maxage=0");
        res.set("Pragma", "no-cache");
        res.cookie("http_4_3_version", req.query['version']);
        res.redirect('/HTTP/cache-o');
    });

httpCacheOthers.route('/cache/http-4-3.js')
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

httpCacheOthers.route('/cache/http-4-3')
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



module.exports = httpCacheOthers;