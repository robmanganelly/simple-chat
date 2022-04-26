// const {Server} = require('socket.io'); 
// const io  = new Server({});
//delete previous lines

module.exports = function(io){
    io.on("connection",(socket)=>{
        console.log(`socket ${socket.id} connected`);
        eventRegister(socket);
    });
    
};

function eventRegister(socket){
    socket.on("message",(data)=>{
        console.log(data);
    });
}