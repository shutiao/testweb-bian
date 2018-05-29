$('#HTML-5-1').on('click', '.delete', function(event){
    $.ajax({
        method: 'delete',
        url: '',
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