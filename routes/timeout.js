/* 
For performace testing, 
you can change the 0[ms]毫秒 below to emulate server processing time. 
This will affect all requests including homepage or redirect but excluding resource request。
One caveat is that curl request without cookie will encounter immediate response by RAS.
*/
module.exports = function(request, response, next){
    setTimeout(function(){
        next();
    }, 0);
}