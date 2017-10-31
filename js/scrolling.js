function scrolling() {

	var gap = 300;
	var s;
	var roadmap = $('.roadmap'), roadmap_f = false;
	var participate = $('.participate'), participate_f = false;

	function scrollAction() {
		s = $(window).scrollTop();

		if (s+gap > participate.offset().top) {
			if (!participate_f) {
				participate_f = true;
				participate.removeClass('hide');
			}
		}

		if (s+gap > roadmap.offset().top) {
			if (!roadmap_f) {
				roadmap_f = true;
				roadmapStart();
			}
		}
	}
	$(window).scroll(scrollAction);
	scrollAction();
}