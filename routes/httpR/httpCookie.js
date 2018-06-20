var express = require('express');
var httpCookie = express.Router();

httpCookie.route('/')
    .get(function (req, res) {
        res.render(__dirname + '/../../views/HTTP/cookie.html');
    });

httpCookie.route('/http-6-1')
    // Set HttpOnly for All Cookies
    .put(function(req, res){
        for (var cookie in req.cookies) {
            if(cookie.includes('20145')){
                //Exclude WebConsole Cookie
            }
            else{
                res.cookie(cookie, req.cookies[cookie], { httpOnly: true });
            }
            
        }
        res.send();
    })

    // Delete HttpOnly Attribute for All Cookies
    .delete(function(req, res){
        for (var cookie in req.cookies) {
            res.cookie(cookie, req.cookies[cookie], { httpOnly: false });
        }
        res.send();
    });

module.exports = httpCookie;