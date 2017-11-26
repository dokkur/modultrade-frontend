function faq() {
	$('.faq .faq_block .item .title').click(function() {
		$(this).toggleClass('active').parent().find('.content').slideToggle(400);
		$(this).find('.ico').toggleClass('active');
	});
}