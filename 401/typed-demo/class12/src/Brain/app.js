'use strict';
// be the kickoff of all events

// bring in brain.js
// when we bring in brain.js, it runs all of the code in that file
const body = require('./brain.js');

// simulate stuff happening
setInterval(() => {
    // emit change in brightness every three seconds
    body.emit('brightness', {
      brightness: Math.floor(Math.random() * 100),
    });
    body.emit('warmth', {
      warmth: Math.floor(Math.random() * 100),
    });
  }, 3000);