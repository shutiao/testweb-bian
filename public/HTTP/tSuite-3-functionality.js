var HTTP_3_1 = function (){
    $('#HTTP-3-1').find('input[name="Content-Security-Policy"]').val("default-src 'self'; report-uri /HTTP/functionality");
}

var HTTP_3_3 = function (){
    $('form[name = "HTTP-3-3"]').attr("method", "POST");
    $('#HTTP-3-3').find('input[name="Method"]').val("POST");
    $('#HTTP-3-3').find('input[name="StatusCode"]').val("302");
}