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

$('#HTTP-1-5').on('click', 'button', function(){
    $.ajax({
        method: 'PATCH',
        url: '',
        dataType: "json",
        data: {
            "case": 'HTTP-1-5'
        },
        success: function(response) {
            $('#line').text('PATCH /HTTP/methods HTTP/1.1');
        }
    })
})

$('#HTTP-1-9').on('click', '.ajax', function(event){
    event.preventDefault();
    $.ajax({
        method: 'POST',
        url: '',
        dataType: "json",
        data: $('form[name="HTTP-1-9"]').serialize(),
        success: function(response) {
            console.log('OK');
        }
    })
})

$('#HTTP-1-10').on('click', '.ajax', function(event){
    event.preventDefault();
    var rangeStart = $('#HTTP-1-10').find('input[name="range"]').val();
    $.ajax({
        method: 'GET',
        url: '/asset/logo_bi-an.png',
        dataType: "image/png",
        headers: {
            Range: "bytes = " + rangeStart + "-"
        },
        complete: function(response) {
            // ToDo: Find Out Why success callback is not executed.
            var responseText = response.responseText;
            var img = document.createElement('img');
            img.src = "data:image/png;base64," + btoa(responseText);
            document.body.appendChild(img);
           $('#body').html(responseText);
        }
    })
})

$('#HTTP-1-11').on('click', 'button', function(event){
    event.preventDefault();
    var enabled = $('#HTTP-1-11').find('input[name="enabled"]').is(':checked');
    var httpMethod = $('#HTTP-1-11').find('select[name="httpMethod"]').val();
    var reqHeaderField = $('#HTTP-1-11').find('input[name="reqHeaderField"]').val();
    var reqHeaderVal = $('#HTTP-1-11').find('input[name="reqHeaderVal"]').val();
    $.ajax({
        method: httpMethod || 'POST',
        url: '',
        dataType: "application/json",
        data: $('form[name="HTTP-1-11"]').serialize(),
        beforeSend: function(xhr) {
            if(enabled){
                xhr.setRequestHeader(reqHeaderField, reqHeaderVal);
            }
        },
        complete: function(response) {
            var responseText = JSON.parse(response.responseText);
            updateHeaderWell(responseText);
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