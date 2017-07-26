const eventChange = require('../changeEvent');

const connectedClients = [];

module.exports = (server) =>{

    const io = require('socket.io')(server);

    io.on('connection', (client) => {

        connectedClients.push(client);
        eventChange.emit('newClientHasJustConnected');

        
        console.log("A new client has been connected " + client.id);

        setInterval(()=>{
            console.log("sending message to front!");
            client.emit('chamado', client.id);
        },2000);

        client.on('new message', function (data) {
            // we tell the client to execute 'new message'
            client.broadcast.emit('new message', {
                //username: socket.username,
                message: data
            });
        });

        client.on('disconnect', function() {
            connectedClients.splice(connectedClients.indexOf(client));
        })
        

    });

}