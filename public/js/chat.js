//Make Connection
var socket=io.connect('http://localhost:3000');
//Query DOM

var message=document.getElementById('message');
var handle=document.getElementById('handle');
var btn=document.getElementById('send');
var output=document.getElementById('output');
var feedback=document.getElementById('feedback');


//emit events
btn.addEventListener('click',()=>{
    if(message.value!=''){
        socket.emit('chat',{
            message:message.value,
            handle:handle.value
        });
        message.value='';
    }
    
});

message.addEventListener('keypress',()=>{
    socket.emit('typing',handle.value);
});

//Listen for events
socket.on('chat',(data)=>{
    feedback.innerHTML="";    
    output.innerHTML+='<p><strong>'+data.handle+' :</strong>'+data.message+'</p>';
});

socket.on('typing',(data)=>{
    
    feedback.innerHTML='<p><em>'+data+' is typing a message...</em></p>';    
});
