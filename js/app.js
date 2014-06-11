document.addEventListener('DOMContentLoaded', function() {
	var userAgent = DCK.getUserAgent();

	document.getElementById('os').innerHTML = userAgent.os;
	document.getElementById('browser').innerHTML = userAgent.browser;
	document.getElementById('version').innerHTML = userAgent.version;

	var getParametersButton = document.getElementById('checkURLParameters');
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