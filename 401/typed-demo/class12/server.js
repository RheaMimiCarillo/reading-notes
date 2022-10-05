'use strict';

// import io
const io = require('socket.io');
const PORT = process.env.PORT || 3002;

let server = io(PORT); // client wants to go to this url to get into this server http://localhost:3002


/// say how server should respond

// respond to connection event (this is a built-in Socket.io method)
// for every connection, a `socket` is generated for the `client`
server.on('connection', socket =>
{
    // see the socket ('s id)
    console.log('Client connected, ID: ', socket.id);

    // generate a 'welcome' event
    socket.emit('welcome', {text: "Welcome to our Server!"});

    // generate a 'new user' event
    server.emit('new-user', {text: 'a new user has joined the arena'})

    // listen for 'message' event
    // take in the payload as an argument
    socket.on('message', payload =>
    {
        // .broadcast.emit to send out this 'message' event to all other sockets aside from
        // send the payload to all other sockets, except for the one who sent it
        socket.broadcast.emit('message', payload);
    })
});

