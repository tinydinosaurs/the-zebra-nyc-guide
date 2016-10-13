// In case any Vonnegut fans check the console.
// It's how I test my javascript.
console.log('goodbye blue monday');

var $ = require('jquery');


$(document).ready(function(){
	$('a[href^="#"]').on('click',function (evt) {
	    evt.preventDefault();
	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 2000, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
