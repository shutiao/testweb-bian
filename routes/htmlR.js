var express = require('express');
var htmlR = express.Router();
var fs = require('fs');

var filePath = __dirname + '/../public/asset/editMyExtention.xxx';

htmlR.route('/:testSuite')
    .get(function(req, res){
        var testSuite = req.params.testSuite;
        var pathPrefix = __dirname + '/../views/HTML/';
        switch(testSuite){
            case "Form":
                res.render(pathPrefix + 'tSuite-5-Form.html');
                break;
            case "Parse":
                res.render(pathPrefix + 'tSuite-1-Parse.html');
                break;
            default:
                res.render(pathPrefix + 'tSuite-5-Form.html');
        }
    })
    
    .post(function(req, res){
        var testSuite = req.params.testSuite;
        var pathPrefix = __dirname + '/../views/HTML/';
        switch(testSuite){
            case "HTML-5-1":
                /*DAP-4366
                res.writeHead(200);
                DAP-4366*/
                var newFile = fs.createWriteStream(filePath);
                /*DAP-4366
                var fileBytes = req.headers['content-length'];
                var uploadedBytes = 0;
                req.on('readable', function(){
                    if (fileBytes){
                        var chunk = null;
                        while (null != (chunk = req.read())){
                            uploadedBytes += chunk.length;
                            var progress = (uploadedBytes / fileBytes) * 100;
                            res.write('Progress: ' + parseInt(progress, 10) + "%\n");
                        }
                    }
                });
                DAP-4366*/
                req.pipe(newFile);
                /*DAP-4366
                req.on('end', function(){
                    if (fileBytes){
                        res.end('Progress: 100%\n');
                        //fs.unlinkSync(filePath);
                    }
                    else{
                        res.render(pathPrefix + 'tSuite-5-Form.html');
                    }
                });
                */
                res.render(pathPrefix + 'tSuite-5-Form.html');
                break;
            
            default:
                res.render(pathPrefix + 'tSuite-5-Form.html');

        }
    })
    .delete(function(req, res){
        fs.unlinkSync(filePath);
        res.sendStatus(204);
    })
    ;

htmlR.route('/parse/HTML-1-1')
    .get(function(req, res){
        res.render(__dirname + '/../views/HTML/HTML-1-1.html');
    });

module.exports = htmlR;