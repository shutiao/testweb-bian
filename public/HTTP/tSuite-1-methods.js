$('#HTTP-1-1').on('click', 'button', function(){
    $.ajax({
        method: 'GET',
        url: '',
        dataType: "json",
        data: {
            "case": 'HTTP-1-1'
        },
        success: function(response) {
            updateHeaderWell(response);
        }
    })
})

function updateHeaderWell(reqPkg){
    // Update Request Line
    $('#line').text(reqPkg.reqLine);
    // Update Request Headers
    transformJSON2HTML(reqPkg.headers, '#headers');
    // Update Request Body
    transformJSON2HTML(reqPkg.body, '#body');
}

function transformJSON2HTML(object, selector){
    var divHeader = $(selector).parent().find('h4');
    divHeader.text('Ajax Request ' + selector.charAt(1).toUpperCase() + selector.slice(2));
    $(selector).empty();
    var liArray = [];
    for (var key in object) {
        var li = $('<li></li>');
        var label = $('<label></label>');
        label.text(key);
        label.appendTo(li);
        var p = $('<p></p>');
        p.text(object[key]);
        p.appendTo(li);
        liArray.push(li);
    }
    $(selector).html(liArray);
}

var HTTP_1_3 = function (){
        var code = $('#HTTP-1-3').find('input[name="status"]').val();
        var cmd = "curl -i -X DELETE 'http://localhost:3000/HTTP/methods?case=HTTP-1-3&code=" + code + "'";
        $('#HTTP-1-3').find('code').text(cmd);
}

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