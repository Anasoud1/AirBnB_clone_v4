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
});
