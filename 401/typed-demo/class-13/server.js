'use strict';


// make three files:
// 1. one for MessageQueue class

// 2. file to define the `.on` functions do

// 3. file to do the io, PORT, MessageQueue, and onGoingQueue stuff

const io = require('socket.io');

const PORT = process.env.PORT || 3002;


const MessageQueue = require('./src/MessageQueue/MessageQueue.js');

const outGoingQueue = new MessageQueue();

// queue for outgoing messages
const receivedQueue = new MessageQueue();

// pickup queue
// enqueue pickup payload to pickup queue
// listen for in-transit event and then dequeue pickup from queue

// in-transit queue
// enqueue in-transit payload to in-transit queue
// listen for delivered event and then dequeue pickup from queue

// delivered queue
// enqueue delivered payload to delivered queue
// then dequeue the payload from this delivered queue

const server = io(PORT);

const messages = server.of('messages');

messages.on('connection', (socket) =>
{
  console.log('socket connected', socket.id);
  socket.on('join', (payload) =>
  {
    console.log('joined room: ', payload.clientId);
  });
  socket.on('message', (payload) =>
  {
    // the client makes a `payload` object with a `payload.body` property
    // add it to the outgoingQueue
    outGoingQueue.add(payload.clientId, payload.body);

    // `socket.to` ensures that the following `.emit()` gets published to a specified room (payload.clientId, in this case)
    socket.to(payload.clientId).emit('message', payload);
  });

  // client needs all messages from a clientId
  socket.on('get-messages', (payload) =>
  {
    // this emits back to the same client that published the "get-messages"
    outGoingQueue.get(payload.clientId).forEach(message =>
    {
      // we don't want the users to see the clientId, so just extract the messages from the payload and send those to the users as 'message' events
      // this emits back to the same client that published the 'get-messages' event
      socket.emit('message', message);
    });
    // should get an array of message objects
  });


  socket.on('received', (payload) =>
  {
    // pass in a clientId and a messageId
    // delete the message in the outgoing queue with the matching clientId and messageId props
    let receipt = outGoingQueue.read(payload.clientId, payload.body.messageId);

    // `socket.to` ensures that the following `.emit()` gets published to a specified room (payload.clientId, in this case)
    socket.to(payload.clientId).emit('received', receipt);
  });
});
