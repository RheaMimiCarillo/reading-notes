'use strict';

// import socket.io
const io = require('socket.io');
const PORT = process.env.PORT || 3002;

const eventPool = require('../eventPool.js');

let server = io(PORT);

// client wants to go to this url to get into this server http://localhost:3002/body
const body = server.of('/body');

// this is the instance of the socket thing that we want the other body parts to connect to
body.on('connection', (socket) =>
{
    console.log('bodypart connected!');
    // logger to happen for every event
    // look at the events listed in the event Pool

    // joining a room
    // lookat socket.io docs on how to join the rooms you want tojoin
    // socket.join('room-name');
    eventPool.forEach(event =>
    {
        socket.on(event, (payload) =>
        {
            console.log('EXPERIENCE SOMETHING :', payload);
        });
    });

    // capture 'brightness' and 'warmth' events
    socket.on('brightness', (payload) => socket.broadcast.emit('brightness', payload));
    socket.on('warmth', (payload) => socket.broadcast.emit('warmth', payload));
});

