'use strict';


function handleSkin (payload)
{
  if (payload.warmth > 75)
  {
    console.log('sweat, baby');
  }
  else if (payload.warmth < 25)
  {
    console.log('brrr');
  }
  else 
  {
    console.log('meep');
  }
}


module.exports = handleSkin;
