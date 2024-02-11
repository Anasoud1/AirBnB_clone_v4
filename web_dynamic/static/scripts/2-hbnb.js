$(document).ready(function() {
    const dict = {};
    $('input[type=checkbox]').change(function() {
	if ($(this).prop('checked')) {
		dict[$(this).attr('data-id')] = $(this).attr('data-name');
	} else {
		delete dict[$(this).attr('data-id')];
	}
	$('div.amenities h4').text(Object.values(dict).join(', '));
	});
    $.getJSON('http://0.0.0.0:5001/api/v1/status/', function(response) {
	if (response.status === "OK") {
		$('div#api_status').addClass('available');
	} else {
		$('div#api_status').removeClass('available');
	}
    });
});
