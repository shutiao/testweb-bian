var socket = io.connect();
/*
socket.on('message', function (data){
    alert(data.hello);
});
*/

var chat_input = document.getElementById('chat-input');
var chat_console = document.getElementById('chat-console');

socket.on('connected', function (isConnected){
    if (isConnected.status){
        document.getElementById('status').innerText = 'Connected To Chattr';
        //var nickname = prompt('What is your nickname?');
        var nickname = socket.io.opts.hostname;
        socket.emit('join', nickname);
    }
    else{
        document.getElementById('status').innerText = 'Connecting';
    }
});

document.getElementById('chat-form').onsubmit = function(e){
    e.preventDefault();
    socket.emit('message', chat_input.value);
}

socket.on('message', function(data){
    insertMessage(data);
});

var insertMessage = function(message){
    var new_message = document.createElement('span');
    new_message.innerHTML = message + '<br/>';
    chat_console.appendChild(new_message);
}