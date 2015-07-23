

(function(){
	var app = angular.module('store', [ ]);
	app.controller('StoreController', function(){
		this.product = gem;
	});
})();

var gem = {
 name: 'Leather Love Seat',
 price: 50,
 distance: '.25 miles away',
}


/* ----- font resize to window ----- */
var fontScale = 15;

function resizeText() {
	var width = window.innerWidth;
	if(width > 500) {
		$("#top-nav h3").css("display", "inline-block");
		$(".textresize").css("font-size", Math.floor((width / fontScale)).toString() + "%");
	}
	else {
		$("#top-nav h3").css("display", "block");
		$("#top-nav h3").css("text-align", "center");
		$(".textresize").css("font-size", "13px");
	}
}

$(document).ready(resizeText);

$(window).resize(resizeText);


