var express = require('express');
var reactR = express.Router();

reactR.route('/index')
    .get(function(req, res){
        res.render(__dirname + '/../react-app/index.html');
    });

reactR.route('/api/comments')
    .get(function(req, res){
        res.sendFile('comments.json', {root: __dirname + '/../react-app/dist'});
    })

reactR.route('/api/comments/:commentIndex')
    .delete(function(req, res){
        var index = req.params.commentIndex;
        res.status(200).send('the ' + index + 'comment has been deleted');
    })

module.exports = reactR;