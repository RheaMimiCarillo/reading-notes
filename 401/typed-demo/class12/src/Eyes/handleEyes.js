'use strict';

// curried
const handleEyes = (socket) => (payload) =>
{
  // respond to the brain that we got some kind of stimulus
  // (tell the logger that we did something)
  if (payload.brightness > 70)
  {
    console.log('Dilate pupils');
  } 
  else
  {
    console.log('un-dilate pupils');
  }
}

module.exports = handleEyes;