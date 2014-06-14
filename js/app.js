document.addEventListener('DOMContentLoaded', function() {
	var userAgent = DCK.getUserAgent();

	DCK('#os').html(userAgent.os);
	DCK('#browser').html(userAgent.browser);
	DCK('#version').html(userAgent.version);

	var getParametersButton = DCK('#checkURLParameters')[0];

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

	DCK.xhr({
		method: 'GET',
		url: 'http://localhost:8888/api/news',
		success: function(res) {
			console.log(res);
		},
		error: function(res) {
			alert('error');
		}
	});
}, true);