/* Slider
================================================== */
 function main () {
	        var slider = new Slider(document.querySelector('#slider-1'),{
	            items : 1,
	            autoplay: true,
	            responsive : false
	        });
	    }

	    document.addEventListener('DOMContentLoaded', main);


/* Opacity effect
================================================== */

    $('.featuresContainer').css('opacity', 0);;
    $(window).scroll(function() {
        if ($(document).scrollTop() > 400) {
            $('.featuresContainer').css('opacity', 1)('slow');
        }
        else {
            $('.featuresContainer').css('opacity', 0)('slow');
        }
    });
