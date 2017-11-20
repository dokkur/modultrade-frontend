function roadmap() {
	scheme();
	n1();
	n2();
	n3();
	n4();
	n5();
	n6();
}

function scheme() {
	var canvas, stage, canva;
	canvas = document.getElementById("roadmap_canvas");
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
		if (canva) {
			canva.gotoAndStop(1);
		}
		$('.roadmap .b').hover(function() {
			canva['g'+$(this).index()].play();
		});
	}
}

function n1() {
	var canvas, stage, canva;
	canvas = document.getElementById("increase1");
	var loader = new createjs.LoadQueue(false);
	loader.loadManifest(increase.properties.manifest);
	canva = new increase.increase();
	stage = new createjs.Stage(canvas);
	stage.addChild(canva);
	createjs.Ticker.setFPS(increase.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	increase1Start = function() {
		setTimeout(function() {
			canva.as.gotoAndStop(1);
		}, 1000);
	}
}
function n2() {
	var canvas, stage, canva;
	canvas = document.getElementById("increase2");
	var loader = new createjs.LoadQueue(false);
	loader.loadManifest(increase.properties.manifest);
	canva = new increase.increase();
	stage = new createjs.Stage(canvas);
	stage.addChild(canva);
	createjs.Ticker.setFPS(increase.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	increase2Start = function() {
		setTimeout(function() {
			canva.as.gotoAndStop(2);
		}, 1500);
	}
}
function n3() {
	var canvas, stage, canva;
	canvas = document.getElementById("increase3");
	var loader = new createjs.LoadQueue(false);
	loader.loadManifest(increase.properties.manifest);
	canva = new increase.increase();
	stage = new createjs.Stage(canvas);
	stage.addChild(canva);
	createjs.Ticker.setFPS(increase.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	increase3Start = function() {
		setTimeout(function() {
			canva.as.gotoAndStop(3);
		}, 2000);
	}
}







function n4() {
	var canvas, stage, canva;
	canvas = document.getElementById("increase4");
	var loader = new createjs.LoadQueue(false);
	loader.loadManifest(increase.properties.manifest);
	canva = new increase.increase();
	stage = new createjs.Stage(canvas);
	stage.addChild(canva);
	createjs.Ticker.setFPS(increase.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	increase4Start = function() {
		setTimeout(function() {
			canva.as.gotoAndStop(1);
		}, 1000);
	}
}
function n5() {
	var canvas, stage, canva;
	canvas = document.getElementById("increase5");
	var loader = new createjs.LoadQueue(false);
	loader.loadManifest(increase.properties.manifest);
	canva = new increase.increase();
	stage = new createjs.Stage(canvas);
	stage.addChild(canva);
	createjs.Ticker.setFPS(increase.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	increase5Start = function() {
		setTimeout(function() {
			canva.as.gotoAndStop(2);
		}, 1500);
	}
}
function n6() {
	var canvas, stage, canva;
	canvas = document.getElementById("increase6");
	var loader = new createjs.LoadQueue(false);
	loader.loadManifest(increase.properties.manifest);
	canva = new increase.increase();
	stage = new createjs.Stage(canvas);
	stage.addChild(canva);
	createjs.Ticker.setFPS(increase.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	increase6Start = function() {
		setTimeout(function() {
			canva.as.gotoAndStop(3);
		}, 2000);
	}
}