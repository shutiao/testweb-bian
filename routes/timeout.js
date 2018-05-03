// For Annie performace testing, you can change the 0[ms] below to emulate server processing time. This will affect all requests including homepage or redirect
module.exports = function(request, response, next){
    setTimeout(function(){
        next();
    }, 0);
}