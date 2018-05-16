$.fn.updateCaseID = function() {
    this.each(function(){
        var idArray = $(this).attr('zendao-case').split(',');
        var idString = idArray.map(function(id, index){
            if (index == 0){
                return '#' + id;
            }
            else {
                return ' #' + id;
            }
        })
        caseIDHTML = ' (' + idString +') ';
        $(this).find('h4').find('.caseID').text(caseIDHTML);
        })
}

$(document).ready(function() {
    $('.caseModule').updateCaseID();
})

function HTTP_4_3_js_version() {
    var version = $.cookie("http_4_3_version");

    if(version == undefined){
        $('#http-4-3-current-version').text("undefined");
    }else if(version == 1 ){
        $('#http-4-3-current-version').text("V1");
    }else if (version == 2){
        $('#http-4-3-current-version').text("V2");
    }
}
function HTTP_4_2_js_version() {
    var version = $.cookie("http_4_2_version");
    if(version == undefined){
        $('#http-4-2-current-version').text("undefined");
    }else if(version == 1 ){
        $('#http-4-2-current-version').text("V1");
    }else if (version == 2){
        $('#http-4-2-current-version').text("V2");
    }
}
$(document).ready(
    HTTP_4_3_js_version(),
    HTTP_4_2_js_version()
);