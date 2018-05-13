var HTTP_2_2 = function () {
    $('#HTTP-2-2').find('input[name="Cache-Control"]').val("s-maxage=60, max-age=0");
    $('#HTTP-2-2').find('input[name="Expires"]').val("Mon, 17 Apr 2028 07:46:32 GMT");
}

function HTTP_2_8_js_version() {
    var version = $.cookie("http_2_8_version");

    if(version == undefined){
        $('#http-2-8-current-version').text("undefined");
    }else if(version == 1 ){
        $('#http-2-8-current-version').text("V1");
    }else if (version == 2){
        $('#http-2-8-current-version').text("V2");
    }
}
function HTTP_2_7_js_version() {
    var version = $.cookie("http_2_7_version");
    if(version == undefined){
        $('#http-2-7-current-version').text("undefined");
    }else if(version == 1 ){
        $('#http-2-7-current-version').text("V1");
    }else if (version == 2){
        $('#http-2-7-current-version').text("V2");
    }
}
$(document).ready(
    HTTP_2_8_js_version(),
    HTTP_2_7_js_version()
);