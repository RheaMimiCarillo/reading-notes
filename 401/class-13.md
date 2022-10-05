# Message Queues

## [Socket.io Chat Example](https://socket.io/get-started/chat/)

**1. Explain to a non-technical recruiter what the Chat Example (above) does.**

This chat example has users who want to chat connect to a server that accepts user-inputted text messages and then disseminates that message to all other users connected to the same server.

**2. What proof of life are we getting on the backend from the above app?**

On the backend, we're getting `listening on *:3000`

**3. Socket.IO gives us the i0.emit() method to send an event to everyone. What flag would you use if you want to send a message to everyone except for a certain emitting socket?**

`io.broadcast.emit()`

## [Rooms](https://socket.io/docs/v4/rooms)

**1. What is a room and how might a room be useful?**

A room is a `channel` that clients can `join()` and `leave()`.  They're useful if you want clients to only emit and receive events in their own room.

**2. How do you join a room?**

`socket.join('a room')`

**3. How do you leave a room?**

`socket.leave('a room)`


## [Namespaces](https://socket.io/docs/v4/namespaces/)

**1. What is a Namespace and what does it allow you to do?**


**2. Each namespace potentially has its own what? (hint: 3 things)**


**3. Discuss a possible use case for separate namespaces**


## Bookmark and Review

- [Socket.io Emit Cheatsheet](https://socket.io/docs/v4/emit-cheatsheet/)

## Things I Want To Know More About

- How can we change the unique identifier of a room?

[Previous Reading](./class-12.md)

[Next Reading](./class-14.md)
