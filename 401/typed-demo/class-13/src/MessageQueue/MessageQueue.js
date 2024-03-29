'use strict';

const Chance = require('chance');

const chance = new Chance();

class MessageQueue
{
  constructor()
  {
    // store messages in memory, in this object literal
    // object literal
    this.messages =
    {
      /*
      clientId:
      {
        messageId:
        {

        }
      }
      */
    };
  }

  // add a single message to the Queue
  add(clientId, payload)
  {
    // generate a random messageId
    let messageId = chance.guid();

    // try catch for testing
    try
    {
      // check the `message` property in this object
      // then check the `[clientId]` property of the `message` property
      // if the message has a clientId
      if (this.messages[clientId])
      {
        // assign to messageId in the clientId in the message property the payload
        this.messages[clientId][messageId] = payload;

        /*
        it looks like this: this.messages =
        {
          clientId:
          {
            messageId:
            {
              <payload goes here>
            }
          }
        };
        */
      }

      // if the message property of this queue doesn't have a `clientId` property inside of it, give it a clientId property and assign the payload to `messageId` inside of clientId
      else
      {
        this.messages[clientId] = { messageId: payload };
      }
      return messageId;
    }
    catch (e)
    {
      throw new Error('error adding message: ', e);
    }
  }

  // read all messages associated with a `clientId`
  // return an array of objects with all 'messages'
  // read the `message` property of this queue
  // then read just the ones associated with the `clientId`
  get(clientId)
  {

    try
    {
      // use Object.keys() to make an array of the messages
      return Object.keys(this.messages[clientId]).map(messageId => ({
        messageId,
        payload: this.messages[clientId][messageId],
      }));
      // map over the array made by Object.keys()
    }
    catch (e)
    {
      console.log(e);
      throw new Error('problem getting messages', e);
    }
  }

  // confirm that a message has been read
  // then remove that message from the Queue
  read(clientId, messageId)
  {
    try
    {
      // check if we have a clientId on our messages prop
      if (this.message[clientId])
      {
        // remove this whole thing from the object
        delete this.messages[clientId][messageId];
        return {
          status: 'received',
          // attach the messageId to the return, so that users can confirm that the thing was deleted
          messageId,
        };
      }
    }
    catch (e)
    {
      console.log(e);
      throw new Error('problem deleting message', e);
    }
  }
}
