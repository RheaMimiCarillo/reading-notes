'use strict';

const events= require('')

function handleEyes (payload) {
  console.log(payload);
  if (payload.brightness > 70)
  {
    console.log('Dilate pupils');
  }
  else
  {
    console.log('Contract pupils');
  }
}
module.exports = handleEyes;
