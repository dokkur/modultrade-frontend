function scrolling() {

    var gap = $(window).height() / 1.5;
    var s;
    var ourproduct = $('.ourproduct');
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
    var subscribe_block = $('.subscribe_block'), subscribe_block$ = false;
    var footer = $('.footer'), footer$ = false;
    var nav_active = $('.nav .a').first();

    var nav_about = $('.nav_about');
    var nav_team = $('.nav_team');
    var nav_token = $('.nav_token');
    var nav_roadmap = $('.nav_roadmap');
    var nav_partners = $('.nav_partners');
    var nav_media = $('.nav_media');
    var nav_qa = $('.nav_qa');

    window.roadmap_init = false;

    function scrollAction() {
        s = $(window).scrollTop();

        if (s + gap > ourproduct.offset().top) {
            navActive(nav_about);
        }

        // if (s+gap > participate.offset().top) {
        // 	if (!participate$) {
        // 		participate$ = true;
        // 		participate.removeClass('hide');
        // 	}
        // }
        //
        // if (s+gap > howitworks.offset().top) {
        // 	if (!howitworks$) {
        // 		howitworks$ = true;
        // 		howitworks.removeClass('hide');
        // 	}
        // }
        //
        // if (s+gap > mtrc.offset().top) {
        // 	if (!mtrc$) {
        // 		mtrc$ = true;
        // 		mtrc.removeClass('hide');
        // 	}
        // }
        //
        // if (s+gap > benefits.offset().top) {
        // 	if (!benefits$) {
        // 		benefits$ = true;
        // 		benefits.removeClass('hide');
        // 	}
        // }

        if (s + gap > team.offset().top) {
            navActive(nav_team);
            // if (!team$) {
            // 	team$ = true;
            // 	team.removeClass('hide').find('.member').each(function(i,v) {
            // 		var member = $(this);
            // 		setTimeout(function() {
            // 			member.removeClass('hide');
            // 		}, i*500);
            // 	});
            //
            // }
        }
        //
        // if (s+gap > advisors.offset().top) {
        // 	if (!advisors$) {
        // 		advisors$ = true;
        // 		advisors.removeClass('hide').find('.member').each(function(i,v) {
        // 			var member = $(this);
        // 			setTimeout(function() {
        // 				member.removeClass('hide');
        // 			}, i*500);
        // 		});
        //
        // 	}
        // }

        if (s + gap > token.offset().top) {
            navActive(nav_token);
            // if (!token$) {
            // 	token$ = true;
            // 	token.removeClass('hide');
            // }
        }

        if (s + gap > roadmap.offset().top) {
            navActive(nav_roadmap);
            // if (!roadmap$) {
            // 	roadmap$ = true;
            // 	roadmap.removeClass('hide');
            // 	roadmapStart();
            // }
        }

        var roadMapInterval = setInterval(function() {
            if (!window.roadmap_init) {
                roadmap.removeClass('hide');
                roadmapStart();
                if (window.roadmap_init) {
                    clearInterval(roadMapInterval);
                }
            }
        }, 500);

        if (s + gap > increase1.offset().top) {
            if (!increase1$) {
                increase1$ = true;
                increase1.removeClass('hide');
                increase1Start();
                increase2Start();
                increase3Start();
            }
        }

        if (s + gap > increase2.offset().top) {
            if (!increase2$) {
                increase2$ = true;
                increase2.removeClass('hide');
                increase4Start();
                increase5Start();
                increase6Start();
            }
        }

        if (s + gap > supporters.offset().top) {
            navActive(nav_partners);
            // if (!supporters$) {
            // 	supporters$ = true;
            // 	supporters.removeClass('hide');
            // 	setTimeout(function() {
            // 		$('.brand').removeClass('delay05 delay1 delay15 delay2 delay25');
            // 	}, 3000);
            // }
        }
        //
        // if (s+gap > subscribe_block.offset().top) {
        // 	if (!subscribe_block$) {
        // 		subscribe_block$ = true;
        // 		subscribe_block.removeClass('hide');
        // 	}
        // }

        if (s + gap * 2 > footer.offset().top) {
            navActive(nav_qa);
            // if (!footer$) {
            // 	footer$ = true;
            // 	footer.removeClass('hide');
            // 	setTimeout(function() {
            // 		$('.footer .tel').removeClass('delay');
            // 		$('.footer .soc_btn').removeClass('delay');
            // 		$('.footer .link').removeClass('delay1 delay15 delay2');
            // 	}, 2000);
            // }
        }
    }

    $(window).scroll(scrollAction);
    scrollAction();

    $('.nav .a').click(function() {
        $('html,body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
        return false;
    });

    function navActive(a) {
        nav_active.removeClass('active');
        nav_active = a;
        nav_active.addClass('active');
    }
}