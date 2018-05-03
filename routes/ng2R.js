var express = require('express');
var ng2R = express.Router();

ng2R.route('/:docType/:suiteNum')
    .get(function(req, res){
        var docType = req.params.docType, suiteNum = req.params.suiteNum;
        var tSuitePath = __dirname + '/../views/NGJS/' + docType + '-' + suiteNume + '-';
        if (docType == 'tSuite'){
            switch(suiteNum){
                case "0":
                    res.render(tSuitePath + 'basics.html');
                    break;
                default:
                    res.render(tSuitePath + '0-basics.html');
            }
        };
    });

module.exports = ng2R;

