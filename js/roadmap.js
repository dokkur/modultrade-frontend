function roadmap() {
	
	var canvas, stage, canva;
	canvas = document.getElementById("roadmap");
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(scheme.properties.manifest);
	function handleFileLoad(evt) {
		if (evt.item.type == "image") { img_scheme[evt.item.id] = evt.result; }
	}
	function handleComplete(evt) {
		canva = new scheme.scheme();
		stage = new createjs.Stage(canvas);
		stage.addChild(canva);
		canvas.style.width = '100%';
		createjs.Ticker.setFPS(scheme.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}

	roadmapStart = function() {
		canva.gotoAndStop(1);

		$('.roadmap .b').hover(function() {
			canva['g'+$(this).index()].play();
		});
	}
}