var DCK = {};

/*
 DOM Manipulation
****************************** */
DCK = function (selector) {
	var element = document.querySelectorAll(selector);

	return element.length == 1 ? element[0] : element;
};

/*
 User Agent parsing
****************************** */
DCK.getUserAgent = function() {
	var OSList      = ['Windows', 'Macintosh'],
	browserList     = ['Chrome', 'Firefox', 'Safari'],
	userAgent       = navigator.userAgent,
	parsedUserAgent = {};

	OSList.forEach(function(el) {
		var found = userAgent.indexOf(el) != - 1;

		if (found) {
			parsedUserAgent.os = el;
			return false;
		}
	});

	browserList.every(function(el) {
		var indexElement = userAgent.indexOf(el),
		found            = indexElement != -1,
		endIndexElement  = indexElement + el.length;

		if (found) {
			parsedUserAgent.browser = el;
			parsedUserAgent.version = userAgent.slice(endIndexElement + 1, endIndexElement + 5);
			return false;
		}
	});

	return parsedUserAgent;
};

/*
 URL Parameter parsing
****************************** */
DCK.getURLParameters = function(url) {
	if (url.indexOf("?") == -1) return false;
  var parameters   = url.slice(url.indexOf("?") + 1, url.length).split("&");
  var paramsObject = {};
  
  parameters.forEach(function(el) {
    var attribute = el.slice(0, el.indexOf("=")); 
    var value     = el.slice(el.indexOf("=") + 1, el.length);

    if (!isNaN(parseInt(value))) {
      value = parseInt(value);
    }

    paramsObject[attribute] = value;        
  });
  
  return paramsObject;
};

DCK.getURLParameter = function(url) {
	var parameters = DCK.getURLParameters(url);

  return parameters[attribute];
};