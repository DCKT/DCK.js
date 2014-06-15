/*
 DOM Manipulation
****************************** */
(function () {
  var DCK = function (params) {
    return new Library(params);
  };
   
  var Library = function (params) {
    var selector = document.querySelectorAll(params),
    i            = 0;

    this.length  = selector.length;
     
    // Add selector to object for method chaining
    for (; i < this.length; i++) {
        this[i] = selector[i];
    }
     
    // Return as object (like Jquery), we can access through all methods
    return this;        
  };

  DCK.fn = Library.prototype = {
    hide: function() {
      var length = this.length;
      while (length--) {
        this[length].style.display = 'none';
      }

      return this;
    },
    show: function () {
      var length = this.length;
      while (length--) {
        this[length].style.display = 'block';
      }

      return this;
    },
    html: function(html) {
      var length = this.length;
      while (length--) {
        this[length].innerHTML = html;
      }

      return this;
    }
  }

  // Assign our Q object to global window object.
  if(!window.DCK) {
      window.DCK = DCK;
  }
})();

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

  browserList.forEach(function(el) {
    var indexElement = userAgent.indexOf(el),
    found            = indexElement != -1,
    endIndexElement  = indexElement + el.length;

    if (found && parsedUserAgent.browser === undefined) {
      parsedUserAgent.browser = el;
      parsedUserAgent.version = userAgent.slice(endIndexElement + 1, endIndexElement + 5);
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

/*
XHR
****************************** */
DCK.xhr = function (parameters) {
  var xhr = new XMLHttpRequest(),
  data    = null;
 
  if (parameters.data) {
    for (var obj in parameters.data) {
      data += data === null ? '' : '&';
      data += obj +"="+ parameters.data[obj];
    }
  }
 
  xhr.open(parameters.method, parameters.url, true);

  if (parameters.headers) {
    for (var obj in parameters.headers) {
      xhr.setRequestHeader(obj, parameters.headers[obj]);
    }
  }
  
  xhr.onreadystatechange = function(e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        parameters.success(xhr);
      }
      else {
        parameters.error(xhr);
      }
    }
  };
 
  xhr.send(data);
};

DCK.get = function(url, success, error) {
  var parameters = {
    url     : url,
    method  : 'GET',
    success : success,
    error   : error
  };
  
  DCK.xhr(parameters);
};

DCK.post = function(url, data, success, error) {
  var parameters = {
    url     : url,
    method  : 'POST',
    data    : data,
    success : success,
    error   : error
  };

  DCK.xhr(parameters);
}

