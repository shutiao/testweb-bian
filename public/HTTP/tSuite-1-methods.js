$('#HTTP-1-1').on('click', 'button', function(){
    $.ajax({
        method: 'GET',
        url: '',
        dataType: "json",
        data: {
            "case": 'HTTP-1-1'
        },
        success: function(response) {
            // Replace Request Header in the well.
            // updateHeaderWell(response);
        }
    })
})

function updateHeaderWell(response){
    
}

var HTTP_1_3 = function (){
        var code = $('#HTTP-1-3').find('input[name="status"]').val();
        var cmd = "curl -i -X DELETE 'http://localhost:3000/HTTP/methods?case=HTTP-1-3&code=" + code + "'"
        $('#HTTP-1-3').find('code').text(cmd);
}