var idx, state;
var arr;

$('th').click(thClick);

function thClick() {
	thRemovePre.call(this);
	if ($(this).hasClass('ascend')) {
		thToDescend.call(this);
	} else {
		thToAscend.call(this);
	}
	readySort.call(this);
	trReset();
}
function thRemovePre() {
	var tryAs = $(this).parent().children('.ascend');
	var tryDes = $(this).parent().children('.descend');
	if (tryAs.length > 0 && !tryAs.is( $(this) )) {
		tryAs.removeClass('ascend');
	} else if (tryDes.length > 0 && !tryDes.is( $(this) )) {
		tryDes.removeClass('descend');
	}
}
function thToAscend() {
	$(this).removeClass('descend');
	$(this).addClass('ascend');
	state = 'ascend';
}
function thToDescend() {
	$(this).removeClass('ascend');
	$(this).addClass('descend');
	state = 'descend';
}
function readySort() {
	idx = $(this).index();
	var ndToSort = $(this).parents('table').children('tbody').children('tr');
	arr = new Array();
	ndToSort.each(function (index) {
		arr[index] = $(this).children('td').eq(idx);
	});
	tdSort();
}
function tdSort() {
	for (i = 0; i < arr.length; i++) {
		for (j = i+1; j < arr.length; j++) {
			tryCompare(arr[i], arr[j]);
		}
	}
}
function tryCompare(a, b) {
	if (state == 'ascend' && a.html() > b.html()) {
		tdExchange(a, b);
	} else if (state == 'descend' && a.html() < b.html()){
		tdExchange(a, b);
	}
}
function tdExchange(a, b) {
	var t = a.html();
	a.html(b.html());
	b.html(t);
}