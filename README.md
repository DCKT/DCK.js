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
`DCK.getURLParameters(url)` retrieve the GET parameters in the URL passed in parameters. This method return an object.
`DCK.getURLParameter(url, parameter)` retrieve the value of the parameter passed in argument.

#### - User Agent
`DCK.getUserAgent()` return an object with the current Operating System, the browser used with the version of him.


