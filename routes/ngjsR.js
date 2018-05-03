var express = require('express');
var ngjsR = express.Router();

ngjsR.route('/:docType/:suiteNum')
    .get(function(req, res){
        var docType = req.params.docType, suiteNume = req.params.suiteNum;
        var tSuitePath = __dirname + '/../views/NGJS/' + docType + '-' + suiteNume + '-';
        if (docType == 'tSuite'){
            switch(suiteNume){
                case "1":
                    res.render(tSuitePath + 'url.html');
                    break;
                case "2":
                    res.render(tSuitePath + 'form.html');
                    break;
                case "3":
                    res.render(tSuitePath + 'ngRoute.html');
                    break;
                case "4":
                    res.render(tSuitePath + 'obfs.html');
                    break;
                case "5":
                    res.render(tSuitePath + 'SocketConsole.html');
                    break;
                case "6":
                    res.render(tSuitePath + 'Ajax.html');
                    break;
                default:
                    res.render(tSuitePath + '1-url.html');
            }
        }
    });

ngjsR.route('/:docType/:suiteNum')
    .post(function(req, res){
        var docType = req.params.docType, suiteNume = req.params.suiteNum;
        var tSuitePath = __dirname + '/../views/NGJS/' + docType + '-' + suiteNume + '-';
        if (docType == 'tSuite'){
            switch(suiteNume){
                case "2":
                    if (req.xhr){
                        res.json(req.body);
                    }
                    else{
                        res.render(tSuitePath + 'form.html');
                    }
                    break;
                default:
                    res.json('received');
            }
        }
    });

module.exports = ngjsR;