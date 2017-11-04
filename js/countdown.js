function countdown() {

	function format(v) {
		return (v.toString().length == 1) ? '0' + v : v;
	}
	
	var now = new Date();
	
	var currentDate = Date.now();
	now.setTime(now.getTime() + 86400000);
	var endDateString = '2017-11-28T00:00:00';
	var endDateTime = Date.parse(endDateString);
	var endDate = new Date(endDateTime);
	
	var $days = $('.countdown .days');
	var $hours = $('.countdown .hours');
	var $mins = $('.countdown .minutes');
	var $secs = $('.countdown .seconds');
	
	setInterval(function() {
		
		currentDate = Date.now();
		if (currentDate < endDate) {
		
			var time = endDate - currentDate;
		
			var seconds = Math.floor((time / 1000) % 60);
			var minutes = Math.floor((time / 60000) % 60);
			var hours = Math.floor((time / 3600000) % 24);
			var days = Math.floor((time / 86400000));
		
			$secs.text( format(seconds) );
			$mins.text( format(minutes) );
			$hours.text( format(hours) );
			$days.text( days );
	 	}

	}, 1000);
}