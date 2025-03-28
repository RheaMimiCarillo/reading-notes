# Event Driven Applications

I think today is going to be about multiple users using a web server simultaneously

``` JavaScript
'use strict';

// built-in npm thingy
const Events = require('events');

const events = new Events();

// observable
// are we listening or emitting?
// names of the events we can subscribe to
const eventPool = ['message-sent', 'message-received'];

// payload is some object that we are receiving when someone publishes
// subscribing to the message-sent event
events.on(eventPool[0], (payload) =>
{
  // just log the payload, for now
  console.log(payload);
});

// can store messages here, if we want

//const messages = [];

// trigger the event
// just immediately publish the payload
// emit this payload to anyone that is listening
events.emit(eventPool[0], {text: 'Hellur'});

// run `node events.js` to get a proof of life, and see the payload in the terminal

```

Publishers: `emit` stuff; `doing the action`

Subscriber: `doing the waiting for the stuff`

Observer: a

Statefulness: some `state` managed by our `observable`

- the server doesn't handle the 'state' of http requests
  - the state of the request is generally handled by the `model`
- for example, something is keeping track of the two characters in a fighting game, but the request has the actual button inputs attached to it

events.on = method to `subscribe` to an event

- 2 params: the name of the event (observable), callback function that runs when the event occurs.

events.emit = method for publishing

- 2 params: an event name (observable), object to send to other clients (payload)
- ex: events.emit(eventPool[0], {text: 'hello"});
  - `eventPool[0]` is the event name (observable)
  - `{text: 'hello"}` is the object to send other clients (payload)

State and event analogy:

sunlight observable

skin module (subscribe/listen for sunlight):

- What's the temperature/heat?
  - sweat at a certain threshold
  - shiver at a certain threshold

eyes module (subscribe/listen for sunlight):

- what's the brightness level?
  - dilate at a certain threshold
  - contract at a certain threshold

``` javascript
'use strict';

// built-in npm thingy
const Events = require('events');

const events = new Events();

// observable
const observable = ['brightness', 'warmth'];


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

function handleBrain(payload)
{
  console.log("Change occurred in body!");
}

// these are 2 subscribers (.on())
events.on('brightness', handleEyes);
events.on('warmth', handleSkin);


// randomness for temp
/*
setInterval(() => 
{
  // target brightness observable
  events.emit(observables[0], {
    brightness: Math.floor(Math.random() * 100),
  });

  // target warmth observable
  events.emit(observables[1], {
    warmth: Math.floor(Math.random() * 100),
  });
}, 2000);
*/
// brain version:
setInterval(() => 
{
  // target brightness observable
  events.emit(;'brain', {
    brightness: Math.floor(Math.random() * 100),
  });

  // target warmth observable
  events.emit('brain', {
    warmth: Math.floor(Math.random() * 100),
  });
}, 2000);

//events.emit(observables[0], {brightness: })
```
lab:

event pool for packages (the state of the packages): ready for pick up, in transit, delivered

global logger: (subscribed to all three events in to pool(waiting for messages to be emitted))

vendor:
  - listening for (delivers)
  - publishes (ready for pickup)

driver:
  - emits: ("hey, I'm in transit")
  - emits: ('hey, I delivered the package')
    - sends back to the global logger that the package was delivered
    - global logger sends the payload to vendor saying the package was delivered
