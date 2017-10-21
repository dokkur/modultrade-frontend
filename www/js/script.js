$(function() {
	$('.play').click(function(event) {
		$('.howitworks').height('auto').html('<script src="https://fast.wistia.com/embed/medias/7irviqctbk.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_7irviqctbk videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>');		
	});

	$('.member').click(function(event) {
		return false;
	});

	brandsScroll();
});

function brandsScroll() {
	var brands = $('.brands');
	var len = $('.brand').length;
	var n = 0;
	var pos = 0;
	var w = 254;
	var left = $('.scroll .arrow.left');
	var right = $('.scroll .arrow.right');
	
	left.click(scrollLeft);
	right.click(scrollRight);

	function scrollLeft() {
		pos += w;
		scroll();
	}
	function scrollRight() {
		pos -= w;
		scroll();
	}
	function scroll() {
		if (pos >= 0) {
			pos = 0;
			left.hide();
		} else {
			left.show();
		}

		if (pos < -w*(len-2) ) {
			pos = -w*(len-1);
			right.hide();
		} else {
			right.show();
		}
		brands.css('left', pos);
	}
	scroll();

	$('.scroll').on('touchstart', function (e) { 
		xDown = e.originalEvent.touches[0].clientX; 
		yDown = e.originalEvent.touches[0].clientY; 
		swiped = false; 
	}).on('touchmove', function (e) { 
		if (!xDown || !yDown) return; 
		var xUp = e.originalEvent.changedTouches[0].clientX; 
		var yUp = e.originalEvent.changedTouches[0].clientY; 
		var xDiff = xDown - xUp; 
		var yDiff = yDown - yUp; 
		var horizontal = Math.abs(xDiff) > 10 && Math.abs(xDiff) > Math.abs(yDiff); 
		if (horizontal && !swiped) { 
			if (xDiff > 0) {
				scrollRight();
			} else { 
				scrollLeft();
			} 
			swiped = true; 
		} 
		if(swiped) { 
			e.preventDefault(); 
		} 
	}).on('touchend touchcancel', function (e) { 
		xDown = null; 
		yDown = null; 
	});
}