module.exports = function(req, res, next){
    res.locals = {headers: req.headers, body: req.body || {}, reqLine: req.method + ' ' + req.originalUrl + ' HTTP/' + req.httpVersion};
    next();
};

