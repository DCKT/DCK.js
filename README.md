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

#### - XMLHttpRequest
Create a XMLHttpRequest often takes a lot of line, I created a method like JQuery ($.ajax).
You can pass in argument :
- URL
- Method
- Data
- Success callback
- Error callback
- Headers

Actualy it doesn't support FormData, but it will soon :smile:
I send the xhr object on the success/error callback, this offer better maintainability.

````
DCK.xhr({
  url: 'http://my-hot-api.com/cats',
  method: 'GET',
  success: function(res) {
    console.log(res.responseText);
  },
  error: function(res) {
    console.error('Something went wrong : '+ res.responseText);
  }
}); 
````

You can even use the shortcut for **GET** or **POST** methods, you just need to pass the URL and callback.
````
DCK.get({
  url: 'http://my-hot-api.com/cats',
  success: function(res) {
    console.log(res.responseText);
  },
  error: function(res) {
    console.error('Something went wrong : '+ res.responseText);
  }
}); 
````
