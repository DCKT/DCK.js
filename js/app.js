document.addEventListener('DOMContentLoaded', function() {
	var userAgent = DCK.getUserAgent();
	
	DCK('#os').innerHTML = userAgent.os;
	DCK('#browser').innerHTML = userAgent.browser;
	DCK('#version').innerHTML = userAgent.version;

	var getParametersButton = DCK('#checkURLParameters');

	getParametersButton.onclick = function(e) {
		e.preventDefault();
		var inputValue = document.getElementById('url').value;
		var result = DCK.getURLParameters(inputValue);

		if (result != false) {
			var string = "";

			for(var obj in result) {
				string += obj +" = "+ result[obj] + "<br />";
			}

			document.getElementById('results').innerHTML = string;
		}
	};
}, true);