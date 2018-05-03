module.exports = function(request, response, next){
    var start = new Date();
    var stream = process.stdout;
    var requestLine = request.method + ' ' + request.originalUrl + ' HTTP/' + request.httpVersion

    response.on('finish', function(){
        var duration = +new Date() - start.getTime();
        var message = start + ' took ' + duration + ' ms \n'
        + requestLine + '\n';
        var message_response = response._header;
        stream.write(message);
        stream.write(message_response);
    });

    next();
}