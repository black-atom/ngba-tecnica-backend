
module.exports = (http) =>{

    const io = require('socket.io')(http);

    io.on('connection', (socket) => {

        console.log("A new client has been connected " + socket.id);

        setInterval(()=>{
            console.log("sending message to front!");
            socket.emit('chamado', socket.id);
        },2000);

        socket.on('new message', function (data) {
            // we tell the client to execute 'new message'
            socket.broadcast.emit('new message', {
                //username: socket.username,
                message: data
            });
        });
        

    });

}