var nasaApp = {};
nasaApp.apiKey = 'WPzPTu9m5hI1SrfCcPpBIssrdH89VpdeCwf1CMsO';

nasaData.getList = function(today) {

	nasaData.apiUrl = 'https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true'
	$.ajax({
		url: nasaData.apiUrl,
		method: 'GET'
		dataType: 'json'
		data: {
			api_key: nasaData.apiKey
		}
	}).then(function(nasaData) {
		var results = 0;
		if (nasaData) {
			var nearObjects = nasaData.near_earth_objects[today];
			if (!nearObjects) {
				$('.nasaSelection').hide();
			}
			else {
				nearObjects = nearObjects.map(function(item) {
					return {
						name: item.name,
						hazard: item.is_potentially_hazardous_asteroid
					}
				});
			}
		}
	});
	var dataArray;
	for (var i = 0; i < nasaData.length; i++) {
		if(dataArray[i]) {
			results++;
		}
	}
	$('.nasaSelection').show();
	nasaApp.displayNasa(dataArray);
}
