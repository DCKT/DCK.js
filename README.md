DCK.js
======

This is my own JavaScript library, this is where I push some useful functions.


## Features
#### - DOM Selector

You can select a DOM element like JQuery with the notation `DCK('#selector')`.
This will return you the elements, the number of elements as well, and some extra methods :

- .html(html)
- .hide() / .show()


#### - URL parameters
Retrieve the GET parameters in the URL passed in parameters.
````
DCK.getURLParameters('http://petit-bateau.fr/?id=12&size=43'); // Return { id: 12, size: 43 }
DCK.getURLParameters('http://petit-bateau.fr?color=blue); // Return { color: 'blue' }
````

Retrieve the value of the parameter passed in argument.
````
DCK.getURLParameter('http://petit-bateau.fr/?id=12&size=43', 'id'); // Return 12
DCK.getURLParameter('http://petit-bateau.fr/?color=blue', 'color'); // Return 'blue'
````

#### - User Agent
Return an object with the current Operating System, the browser used with him version.
````
DCK.getUserAgent(); // { os: 'Macintosh', browser: 'Chrome', version: '35.0' }
````

