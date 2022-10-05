'use strict';

// don't deploy 'clients'
// they're code you'd install on a physical machine, not in the server

// import io
const io = require('socket.io-client');

// define where the URL of the server is running on
const URL = process.env.SERVER_URL || 'http://localhost:3002';


// establish a socket for a client
let socket = io.connect(URL);

// listen for welcome events, and log
socket.on('welcome', console.log);

// listen for new-user events and then log the payload.text
socket.on('new-user', (payload) =>
{
    console.log(payload.text);
})

// listen for 'message' events
socket.on('message', console.log);

// output a 'message' event 
socket.emit('message', {text: 'hello from client ' + socket.id})


