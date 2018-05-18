var express = require('express');
var miscR = express.Router();
var listener = require('../bin/www');

miscR.route('/:moduleName')
    .get(function(req, res){
        var moduleName = req.params.moduleName;
        var pathPrefix = __dirname + '/../views/Misc/';
        switch(moduleName){
            case "HealthCheck":
                //host-validation
                var inHost = req.headers.host;
                var listenerPort = req.socket.address().port;
                var regex = RegExp(":" + listenerPort + "$");
                if (inHost && inHost.length > 1){
                    // Valid Host Port
                    if (regex.test(inHost)){
                        res.sendStatus(200);
                    }
                    // Invalid Host Post
                    else {
                        res.sendStatus(403);
                    }
                }
                // Malformat Host Header String
                else {
                    res.sendStatus(400);
                }
                break;
            default:
                res.sendStatus(200);
        }
    })

module.exports = miscR;