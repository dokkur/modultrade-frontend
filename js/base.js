$(function() {
	if ($('.main')[0]) {
		main();
		countdown();
		participate();
		howitworks();
		team();
		roadmap();
		supporters();
		brandsScroll();
		setTimeout(function() {
			scrolling();
		}, 1000);
	}
	if ($('.faq')[0]) {
		faq();
	}
	scrollAll();
});

function scrollAll() {
	var nav = $('.nav');
	var nav_y = nav.offset().top;
	var h = $(window).height();
	var top_btn = $('.top_btn');
	var s;

	function scrollAction() {
		s = $(window).scrollTop();

		if (s >= nav_y) {
			nav.addClass('fix');
		} else {
			nav.removeClass('fix');
		}

		if (s > h) {
			top_btn.removeClass('hide');
		} else {
			top_btn.addClass('hide');
		}
	}

	top_btn.click(function() {
		$('html,body').stop().animate( { scrollTop: 0 }, 500 );
		return false;
	});

	$(window).scroll(scrollAction);
	scrollAction();
}