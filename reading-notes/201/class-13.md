# Local Storage


## [](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/)


1. Why would a developer use local storage for a web applicaiton?

By dafault, web applications are stateless, so data from a user's input don't persist when they navigate to another page or refresh or shut down and reload the application. A developer can use a web application to "remember" where the user left off, like savedata in a video game.

2. What information should not be stored in local storage?

Sensitve user data should not be stored in local storage. Local storage should also only be used for storing small amounts of data.

3. Local storage can store what type of data? How would you convert it to that type before storing?

Local storage can store string data in key/value pairs. There are workarounds to get around the key/value pair limitation, but not all browsers support every workaround. 
To convert stored data from `string` back into a desired type, we'd need to "coerce" it back with parseInt() for example.


## Bookmark/Skim:

["The Past, Present, and Future of Local Storage for Web Applications](http://diveinto.html5doctor.com/storage.html)


## Things I want to know more about

- How can we transfer data that's stored locally to a more pernanent storage space when we desire?
