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
            default:
                res.render(pathPrefix + 'tSuite-5-Form.html');
        }
    })
    
    .post(function(req, res){
        var testSuite = req.params.testSuite;
        var pathPrefix = __dirname + '/../views/HTML/';
        switch(testSuite){
            case "HTML-5-1":
                
                res.writeHead(200);
                var newFile = fs.createWriteStream(filePath);
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
                req.pipe(newFile);
                req.on('end', function(){
                    if (fileBytes){
                        res.end('Progress: 100%\n');
                        //fs.unlinkSync(filePath);
                    }
                    else{
                        res.render(pathPrefix + 'tSuite-5-Form.html');
                    }
                });
                //res.render(pathPrefix + 'tSuite-5-Form.html');
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

module.exports = htmlR;