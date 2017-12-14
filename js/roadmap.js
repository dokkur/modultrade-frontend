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
	var comp=AdobeAn.getComposition("B22544534C90461992B482D2E56E8622");
	var scheme=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var scheme=comp.getLibrary();
	loader.loadManifest(scheme.properties.manifest);
	function handleFileLoad(evt, comp) {
		var img_scheme=comp.getImages();	
		if (evt && (evt.item.type == "image")) { img_scheme[evt.item.id] = evt.result; }
	}
	function handleComplete(evt, comp) {
		var scheme=comp.getLibrary();
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
		}, 800);
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
		}, 1200);
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
		}, 1600);
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
		}, 800);
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
		}, 1200);
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
		}, 1600);
	}
}