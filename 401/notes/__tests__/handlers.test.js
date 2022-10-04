'use strict';

const events = require('../src/eventEmitter.js');
const handleEyes = require('../src/Eyes/handleEyes.js');

const { default: test } = require("node:test");

describe('testing event handlers', () =>
{
  test('Should dilate eyes when bright', () =>
  {

    // we can spy on console.log with just
    jest.spyOn(console, "log");
    jest.spyOn(events, "emit");
    // for the eye handler, we're expecting the events.emit to log

    events.on('brightness', handleEyes);
    events.emit('brightness', { brightness: 76 });
    expect(console.log).toHaveBeenCalledWith('Dilate pupils');
    expect(events.emit).toHaveBeenCalledWith('brain', 76);
  });
});
