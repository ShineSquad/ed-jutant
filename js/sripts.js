const drink = 4,
	  donuts = 7,
	  hamburger = 5;
$(function() {
	$('#hamburger_value').text(hamburger);
	$('#donuts_value').text(donuts);
	$('#drink_value').text(drink);
	$('.drag_elem').draggable({
		helper: "clone"
	});
	$('#avatar').droppable({
		drop: function() {
            alert('Вкусно');
            donuts = 5 - 1;
        }
	});
});

function modal_view( _item, _state ) {
	var items = ['clothing-modal', 'food-modal', 'artifacts-modal'];
	if (_state == 'none') {
		for (let i in items) {
			$('.' + items[i]).removeClass('active');
		}
	} else {
		$('.'+_item).addClass('active');
	}
	$('#skin-shop').css('display', _state);
}

