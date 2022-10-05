'use strict';
// this is the entry point into the 
const io = require('socket.io-client');

// take in handle function
const handleEyes = require('./handleEyes.js');

// connect to server to get a socket id
const socket = io.connect('http://localhost:3002/body');

// set a socket listener (.on()) for brigness events and runn handleEyes(sock) callback
socket.on('brightness', handleEyes(socket));

