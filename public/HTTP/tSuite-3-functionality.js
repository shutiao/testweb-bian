var HTTP_3_1 = function (){
    $('#HTTP-3-1').find('input[name="Content-Security-Policy"]').val("default-src 'self'; report-uri /HTTP/functionality");
}

var HTTP_3_3 = function (){
    $('form[name = "HTTP-3-3"]').attr("method", "POST");
    $('#HTTP-3-3').find('input[name="Method"]').val("POST");
    $('#HTTP-3-3').find('input[name="StatusCode"]').val("302");
}

$('#HTTP-3-3').on('click', '.ajax', function(event){
    event.preventDefault();
    var el = $('#HTTP-3-3');
    var httpMethod = el.find('select[name="Method"]').val();
    $.ajax({
        method: httpMethod || 'GET',
        url: '',
        dataType: "application/json",
        data: $('form[name="HTTP-3-3"]').serialize(),
        complete: function(response) {
            $("#body").parent().find('h4').text('Response Body');
            $("#body").text(response.responseText);
        }
    })
})

$('#HTTP-3-4').on('click', '.ajax', function(event){
    event.preventDefault();
    var el = $('#HTTP-3-4');
    var httpMethod = el.find('select[name="Method"]').val();
    $.ajax({
        method: httpMethod || 'POST',
        url: '',
        dataType: "application/json",
        data: $('form[name="HTTP-3-4"]').serialize(),
        complete: function(response) {
            $("#body").parent().find('h4').text('Response Body');
            $("#body").text(response.responseText);
        }
    })
})

$('#HTTP-3-5').on('click', 'button', function(event){
    event.preventDefault();
    var el = $('#HTTP-3-5');
    var httpMethod = el.find('select[name="httpMethod"]').val();
    $.ajax({
        method: httpMethod || 'PUT',
        url: '',
        dataType: "application/json",
        data: $('form[name="HTTP-3-5"]').serialize(),
        complete: function(response) {
            var responseText = JSON.parse(response.responseText);
            updateHeaderWell(responseText);
        }
    })
})

$('#HTTP-3-6').on('click', '.ajax', function(event){
    event.preventDefault();
    var el = $('#HTTP-3-6');
    var httpMethod = el.find('select[name="httpMethod"]').val();
    $.ajax({
        method: httpMethod || 'POST',
        url: '/HTTP/functionality/HTTP-3-6',
        dataType: "application/json",
        data: $('form[name="HTTP-3-6"]').serialize(),
        complete: function(response) {
            var responseText = JSON.parse(response.responseText);
            updateHeaderWell(responseText);
        }
    })
})

$('#HTTP-3-7').on('click', '.ajax', function(event){
    event.preventDefault();
    var el = $('#HTTP-3-7');
    var httpMethod = el.find('select[name="httpMethod"]').val();
    $.ajax({
        method: httpMethod || 'POST',
        url: '/HTTP/functionality/HTTP-3-7/0',
        dataType: "application/json",
        data: $('form[name="HTTP-3-7"]').serialize(),
        complete: function(response) {
            var responseText = JSON.parse(response.responseText);
            updateHeaderWell(responseText);
        }
    })
});

$('#HTTP-3-8').on('click', '.ajax', function(event){
    event.preventDefault();
    var el = $('#HTTP-3-8');
    var httpMethod = el.find('select[name="httpMethod"]').val();
    $.ajax({
        method: httpMethod || 'POST',
        url: '/HTTP/functionality/HTTP-3-8',
        dataType: "application/json",
        data: $('form[name="HTTP-3-8"]').serialize(),
        complete: function(response) {
            var responseText = JSON.parse(response.responseText);
            updateHeaderWell(responseText);
        }
    })
})

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