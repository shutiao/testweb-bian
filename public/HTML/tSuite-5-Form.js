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
        success: function(response) {
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