var HTTP_2_2 = function () {
    $('#HTTP-2-2').find('input[name="Cache-Control"]').val("s-maxage=60, max-age=0");
    $('#HTTP-2-2').find('input[name="Expires"]').val("Mon, 17 Apr 2028 07:46:32 GMT");
}

$(document).ready(function(){
    $.ajax({
        method: 'GET',
        url: 'cache',
        dataType: "html",
    });
    $.ajax({
        method: 'POST',
        url: 'cache',
        dataType: "html",
    })
});

