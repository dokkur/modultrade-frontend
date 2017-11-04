function main() {
	setTimeout(function() {
		$('.main').removeClass('hide');
		$('.countdown').removeClass('hide');
	}, 1000);
	setTimeout(function() {
		$('.main .tel').removeClass('delay');
		$('.main .soc_btn').removeClass('delay');
	}, 4000);
	setTimeout(function() {
		$('.main .buttons .button').removeClass('delay delay3 delay35 delay4');
	}, 6000);
}