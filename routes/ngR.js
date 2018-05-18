var express = require('express');
var ngR = express.Router();

ngR.route('/')
    .get(function(req, res){
        res.render(__dirname + '/../angular-app/dist/toh-index.html');
    });

ngR.route('/dashboard|heroes/*')
    .get(function(req, res){
        res.render(__dirname + '/../angular-app/dist/toh-index.html');
    });

ngR.route('/api/:res')
    .get(function(req, res){
        var resource = req.params.res;
        switch (resource){
            case "heroes":
                var heroes = [
                    { id: 11, name: 'Mr. Nice' },
                    { id: 12, name: 'Narco' },
                    { id: 13, name: 'Bombasto' },
                    { id: 14, name: 'Celeritas' },
                    { id: 15, name: 'Magneta' },
                    { id: 16, name: 'RubberMan' },
                    { id: 17, name: 'Dynama' },
                    { id: 18, name: 'Dr IQ' },
                    { id: 19, name: 'Magma' },
                    { id: 20, name: 'Tornado' }
                  ];
                res.json(heroes);
        }
    })

module.exports = ngR;

