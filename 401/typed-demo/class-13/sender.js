'use strict';

// vendor

const MessageClient = require('./src/MessageClient/MessageClient.js');

//const URL = process.env.SERVER_URL || 'http://localhost';


// 'Chores' is the clientId, here
const messages = new MessageClient('Chores');


messages.subscribe('received', (payload) =>
{
  console.log(payload);
});

messages.publish('message', {
  text: 'hello from sender :3',
});
