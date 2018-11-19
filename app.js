var express=require('express');
var socket=require('socket.io');
var reload=require('reload');
var app=express();
var dataFile=require('./data/data.json');
var path=require('path');
app.use(express.static(path.join(__dirname,'public')));
app.use('/',require('./routes/index'));
app.use('/friends',require('./routes/friend'));
app.use('/feedback',require('./routes/feeback'));
app.use('/api',require('./routes/api'));
app.use('/chat',require('./routes/chat'));

app.set('appData',dataFile);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//Gobal vars
app.locals.siteTitle='Our Friends List';
app.locals.allFriends=dataFile.friends;

app.set('port',process.env.PORT || 3000);
var Server=app.listen(app.get('port'),()=>{
    console.log('listen to port:'+app.get('port'));
});
//Socket setup
var io=socket(Server);
io.on('connection',(socket)=>{
    console.log('made socket connection.',socket.id);

    socket.on('disconnect',(sock)=>{
        
        console.log('User is disconnect');
    });

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data)
    });
    
    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    });
});