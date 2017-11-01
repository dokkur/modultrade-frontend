function scrolling() {

	var gap = $(window).height()/1.5;
	var s;
	var participate = $('.participate'), participate$ = false;
	var mtrc = $('.mtrc'), mtrc$ = false;
	var howitworks = $('.howitworks'), howitworks$ = false;
	var benefits = $('.benefits'), benefits$ = false;
	var team = $('.team_members'), team$ = false;
	var advisors = $('.advisors_members'), advisors$ = false;
	var token = $('.token'), token$ = false;
	var roadmap = $('.roadmap'), roadmap$ = false;
	var increase1 = $('.increase1'), increase1$ = false;
	var increase2 = $('.increase2'), increase2$ = false;
	var supporters = $('.supporters'), supporters$ = false;

	function scrollAction() {
		s = $(window).scrollTop();

		if (s+gap > participate.offset().top) {
			if (!participate$) {
				participate$ = true;
				participate.removeClass('hide');
			}
		}

		if (s+gap > howitworks.offset().top) {
			if (!howitworks$) {
				howitworks$ = true;
				howitworks.removeClass('hide');
			}
		}

		if (s+gap > mtrc.offset().top) {
			if (!mtrc$) {
				mtrc$ = true;
				mtrc.removeClass('hide');
			}
		}

		if (s+gap > benefits.offset().top) {
			if (!benefits$) {
				benefits$ = true;
				benefits.removeClass('hide');
			}
		}

		if (s+gap > team.offset().top) {
			if (!team$) {
				team$ = true;
				team.removeClass('hide').find('.member').each(function(i,v) {
					var member = $(this);
					setTimeout(function() {
						member.removeClass('hide');
					}, i*500);
				});

			}
		}

		if (s+gap > advisors.offset().top) {
			if (!advisors$) {
				advisors$ = true;
				advisors.removeClass('hide').find('.member').each(function(i,v) {
					var member = $(this);
					setTimeout(function() {
						member.removeClass('hide');
					}, i*500);
				});

			}
		}

		if (s+gap > token.offset().top) {
			if (!token$) {
				token$ = true;
				token.removeClass('hide');
			}
		}

		if (s+gap > roadmap.offset().top) {
			if (!roadmap$) {
				roadmap$ = true;
				roadmap.removeClass('hide');
				roadmapStart();
			}
		}

		if (s+gap > increase1.offset().top) {
			if (!increase1$) {
				increase1$ = true;
				increase1.removeClass('hide');
				increase1Start();
				increase2Start();
				increase3Start();
			}
		}

		if (s+gap > increase2.offset().top) {
			if (!increase2$) {
				increase2$ = true;
				increase2.removeClass('hide');
				increase4Start();
				increase5Start();
				increase6Start();
			}
		}

		if (s+gap > supporters.offset().top) {
			if (!supporters$) {
				supporters$ = true;
				supporters.removeClass('hide');
				setTimeout(function() {
					$('.brand').removeClass('delay05 delay1 delay15 delay2 delay25');
				}, 3000);
			}
		}
	}
	$(window).scroll(scrollAction);
	scrollAction();
}