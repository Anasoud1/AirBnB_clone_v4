$('document').ready(function() {
    $('input[type=checkbox]').change(function() {
	const dict = {};
	if ($(this).prop('checked')) {
		dict[$(this).attr('data-name')] =($(this).attr('data-id'));
	} else {
		delete amenityIds[$(this).attr('data-name')];
	}
		$('div.amenities h4').text(Object.keys(dic).join(',')):
	});
});
