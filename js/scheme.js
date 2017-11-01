(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.lines = function() {
	this.initialize(img.lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1076,366);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvHHIAAuNMAlfAAAIAAONg");
	this.shape.setTransform(120,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.w, new cjs.Rectangle(0,0,240.1,91), null);


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("January\n2018", "20px 'Lato'", "#B7B6B6");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 82;
	this.text.parent = this;
	this.text.setTransform(0,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-26.5,86.1,53);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("October\n2017", "20px 'Lato'", "#B7B6B6");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 82;
	this.text.parent = this;
	this.text.setTransform(0,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-26.5,86.1,53);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("April\n2016", "20px 'Lato'", "#B7B6B6");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 82;
	this.text.parent = this;
	this.text.setTransform(0,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-26.5,86.1,53);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("March\n2016", "20px 'Lato'", "#B7B6B6");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 82;
	this.text.parent = this;
	this.text.setTransform(0,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-26.5,86.1,53);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("October\n2016", "20px 'Lato'", "#B7B6B6");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 82;
	this.text.parent = this;
	this.text.setTransform(0,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-26.5,86.1,53);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("US market", "18px 'Lato'", "#1A97D5");
	this.text.textAlign = "right";
	this.text.lineHeight = 24;
	this.text.lineWidth = 133;
	this.text.parent = this;
	this.text.setTransform(66.3,-10.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.2,-12.8,136.5,25.6);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Asian market", "18px 'Lato'", "#1A97D5");
	this.text.textAlign = "right";
	this.text.lineHeight = 24;
	this.text.lineWidth = 133;
	this.text.parent = this;
	this.text.setTransform(66.3,-10.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.2,-12.8,136.5,25.6);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Europe market", "18px 'Lato'", "#1A97D5");
	this.text.textAlign = "right";
	this.text.lineHeight = 24;
	this.text.lineWidth = 133;
	this.text.parent = this;
	this.text.setTransform(66.3,-10.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.2,-12.8,136.5,25.6);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#071545").ss(1,2).p("Aj9AAIH7AA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,-1,52.7,2);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#071545").ss(1,2).p("AoaAAIQ1AA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.8,-1,109.8,2);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#071545").ss(1,2).p("AoaAAIQ1AA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.8,-1,109.8,2);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Marketplaces", "18px 'Lato'", "#0A2A5C");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 138;
	this.text.parent = this;
	this.text.setTransform(0,-35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.1,-37,142.3,74);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Trade &\nreputational\nbank", "18px 'Lato'", "#0A2A5C");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 138;
	this.text.parent = this;
	this.text.setTransform(0,-35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.1,-37,142.3,74);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Marketplace \nfor trade \nrelated service", "18px 'Lato'", "#0A2A5C");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 138;
	this.text.parent = this;
	this.text.setTransform(0,-35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.1,-37,142.3,74);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("ModulTrade\nsmart-contract\nplatform", "18px 'Lato'", "#0A2A5C");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 138;
	this.text.parent = this;
	this.text.setTransform(0,-35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.1,-37,142.3,74);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("ModulTrade\ntoken\ndistribution", "18px 'Lato'", "#0A2A5C");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 133;
	this.text.parent = this;
	this.text.setTransform(0,-34.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.2,-36.4,136.5,72.8);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Preparation\nfor public\nlaunch", "18px 'Lato'", "#1A97D5");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 133;
	this.text.parent = this;
	this.text.setTransform(0,-34.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.2,-36.4,136.5,72.8);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Concept\nlaunch", "18px 'Lato'", "#1A97D5");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 133;
	this.text.parent = this;
	this.text.setTransform(0,-27.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.2,-29.4,136.5,58.9);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#071545").ss(1,2).p("AAAwUMAAAAgp");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-105.5,2,211);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#071545").ss(1,2).p("AAAtRIAAaj");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-85.9,2,172);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3497D5").ss(1,2).p("AAAo3IAARv");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-57.7,2,115.5);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3497D5").ss(1,2).p("AAAo3IAARv");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-57.7,2,115.5);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3497D5").ss(1,2).p("AAAo3IAARv");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-57.7,2,115.5);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3497D5").ss(1,2).p("AAAo3IAARv");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-57.7,2,115.5);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#68CD52").ss(1,2).p("AAAo3IAARv");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-57.7,2,115.5);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Concept\ndevelopment\nat MIT", "18px 'Lato'", "#1A97D5");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 133;
	this.text.parent = this;
	this.text.setTransform(0,-34.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.2,-36.4,136.5,72.8);


(lib.t1_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Idea", "18px 'Lato'", "#1A97D5");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 54;
	this.text.parent = this;
	this.text.setTransform(29,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_, new cjs.Rectangle(0,0,58,25.6), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E3E3E3").ss(1,2).p("AAAi4IAAFx");
	this.shape.setTransform(0,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-1,-1,2,39), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("2018 – 2019", "20px 'Lato'", "#FFAA01");
	this.text.lineHeight = 26;
	this.text.lineWidth = 152;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,156.4,28), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("PRODUCT\nLAUNCH", "bold 24px 'Lato'", "#FFAA01");
	this.text.lineHeight = 31;
	this.text.lineWidth = 155;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,158.9,76.1), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#F6A931","#F6A931"],[0,0.282,1],0.1,-79.1,0.1,78.7).s().p("AgEMVIAA4qIAJAAIAAYqg");
	this.shape.setTransform(0.5,79);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,1,157.9), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#F6A931","#F6A931","#FFFFFF"],[0,0.282,0.714,1],0.9,-36.4,-1,36.4).s().p("AgEFtIAArZIAJAAIAALZg");
	this.shape.setTransform(0.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,1,72.9), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F6A931","#FFFFFF"],[0.42,1],0.1,-26.5,0.1,26.5).s().p("AgEEJIAAoRIAJAAIAAIRg");
	this.shape.setTransform(0.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,1,53), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("PRODUCT\nLAUNCH", "bold 24px 'Lato'", "#FFAA01");
	this.text.textAlign = "right";
	this.text.lineHeight = 31;
	this.text.lineWidth = 169;
	this.text.parent = this;
	this.text.setTransform(171,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,173,76.1), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("PRODUCT\nDEVELOPMENT", "bold 24px 'Lato'", "#071545");
	this.text.lineHeight = 31;
	this.text.lineWidth = 216;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,220,75.1), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E3E3E3").ss(1,2).p("AAAxVMAAAAir");
	this.shape.setTransform(0,111);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1,-1,2,224.1), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("WHITE PAPER\nPROTOTUPE", "bold 24px 'Lato'", "#1A97D5");
	this.text.lineHeight = 31;
	this.text.lineWidth = 216;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,220,75.1), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("IDEA \nDEVELOPMENT", "bold 24px 'Lato'", "#68CD52");
	this.text.lineHeight = 31;
	this.text.lineWidth = 216;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,220,73.2), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E3E3E3").ss(1,2).p("AAAxVMAAAAir");
	this.shape.setTransform(0,111);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,2,224.1), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E3E3E3").ss(1,2).p("AAA4hMAAAAxD");
	this.shape.setTransform(0,157);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,2,316), null);


(lib.l2_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#68CD52").ss(1,2).p("AAAquIAAVd");
	this.shape.setTransform(0,68.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l2_, new cjs.Rectangle(-1,-1,2,139.4), null);


(lib.l1_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#68CD52").ss(1,2).p("AAAmyIAANl");
	this.shape.setTransform(0,43.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l1_, new cjs.Rectangle(-1,-1,2,89), null);


(lib.gear_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#071545").p("AECAAQAABrhLBMQhMBLhrAAQhqAAhMhLQhLhMAAhrQAAhqBLhMQBMhLBqAAQBrAABMBLQBLBMAABqg");
	this.shape.setTransform(41,41);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#071545").ss(1.2).p("AF0BLIAmgMIAAh9IgmgMIgYgHIgKgDIAAAAIhGgWQAUAxAAA5QAAA6gUAxQgBADgBAEQgWAxgoApQgpAogxAWIBBAiIAfAQQg+AqhJAOQgkAGgnAAQgmAAgkgGIAMAmIB9AAIAMgmIAKgiQAwgLAugbAE8jRIASgkIhZhYIgjASIgMAHIgTAKQAAAAAAAAIhBAhQAxAWApAoQAoApAWAxQABAEABADAEriyIAKgTAEriyIAAAAIAKgTIAHgMQAqA+AOBJQAGAkAAAmQAAAngGAkQgOBJgqA+QgVAegbAcQgcAbgeAVIAjASIBZhYIgSgkIgIgOIgJgRQAagsANgyIAAAAIAKgDIAYgHADSk7QAeAVAcAbQAbAcAVAeABSlbIgHgYIgMgmIh9AAQgGATgGATQAkgHAmAAQAnAAAkAHQBJAOA+AqABVlRIAAAAIgDgKABVlRIgDgKABrkLQADABAEABACzkqQgsgagygNAhqkLQAxgUA5AAQA6AAAxAUIgWhGABdAAQAAAngcAaQgaAcgnAAQglAAgbgcQgcgaAAgnQAAglAcgbQAbgcAlAAQAnAAAaAcQAcAbAAAlgAFchRIgKgDQgNgygagsAEKhxIAhhBADGk0IgTAKAhKlzQgCAIgDAIQAAACgBACIgBAEIgDAKIAAAAQgyANgsAaIgRgJIgOgHQA+grBJgOgAhRlbIgDAKIgWBGAiykqIAAAAIgRgJAkJhxQAWgxAogpQApgoAxgWQAEgBADgBAhxkJIhBghAk7jRIAQAfIAiBBAk7jRQAVgeAbgcQAcgbAegUIgkgTIhYBYgAkLhqQABgDABgEAlzhKIgmAMIAAB9IAmAMIAYAHIAKADIAAAAIBGAWQgUgxAAg6QAAg5AUgxIhGAWIgiAKQAOhJAqg+AlzBLQgHgkAAgnQAAgmAHgkAkriyQgbAugLAwAhqEMQgDgBgEgBAiyEsIBBgiQgxgWgpgoQgogpgWgxIgiBBIgQAfIgSAkIBYBYIAkgSQgegVgcgbQgbgcgVgeQgqg+gOhJAkJByQgBgEgBgDAlRBVQAMAwAaAuAhRFcIAHAYQhJgOg+gqIAfgQQAuAaAwAMgAhUFSIAAAAIADAKAhqEMIAWBGAE0DEIgJgRIAAAAIghhBAEMBrIBGgWIAKgDABrEMQgxAUg6AAQg5AAgxgUAByEKQgEABgDABABVFSIAWhGAlbBSIAKAD");
	this.shape_1.setTransform(41,41);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#071545").s().p("AgkAlQgPgPAAgWQAAgVAPgPQAQgPAUAAQAVAAAPAPQAQAPAAAVQAAAWgQAPQgPAPgVAAQgUAAgQgPg");
	this.shape_2.setTransform(41,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gear_3, new cjs.Rectangle(-1,-1.7,84.8,85.5), null);


(lib.gear_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A97D5").p("AECAAQAABrhLBMQhMBLhrAAQhqAAhMhLQhLhMAAhrQAAhqBLhMQBMhLBqAAQBrAABMBLQBLBMAABqg");
	this.shape.setTransform(41,41);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1A97D5").ss(1.2).p("AF0BLIAmgMIAAh9IgmgMIgYgHIgKgDIAAAAIhGgWQAUAxAAA5QAAA6gUAxQgBADgBAEQgWAxgoApQgpAogxAWIBBAiIAfAQQg+AqhJAOQgkAGgnAAQgmAAgkgGIAMAmIB9AAIAMgmIAKgiQAwgLAugbAE8jRIASgkIhZhYIgjASIgMAHIgTAKQAAAAAAAAIhBAhQAxAWApAoQAoApAWAxQABAEABADAEriyIAKgTAEriyIAAAAIAKgTIAHgMQAqA+AOBJQAGAkAAAmQAAAngGAkQgOBJgqA+QgVAegbAcQgcAbgeAVIAjASIBZhYIgSgkIgIgOIgJgRQAagsANgyIAAAAIAKgDIAYgHADSk7QAeAVAcAbQAbAcAVAeABSlbIgHgYIgMgmIh9AAQgGATgGATQAkgHAmAAQAnAAAkAHQBJAOA+AqABVlRIAAAAIgDgKABVlRIgDgKABrkLQADABAEABACzkqQgsgagygNAhqkLQAxgUA5AAQA6AAAxAUIgWhGABdAAQAAAngcAaQgaAcgnAAQglAAgbgcQgcgaAAgnQAAglAcgbQAbgcAlAAQAnAAAaAcQAcAbAAAlgAFchRIgKgDQgNgygagsAEKhxIAhhBADGk0IgTAKAhKlzQgCAIgDAIQAAACgBACIgBAEIgDAKIAAAAQgyANgsAaIgRgJIgOgHQA+grBJgOgAhRlbIgDAKIgWBGAiykqIAAAAIgRgJAkJhxQAWgxAogpQApgoAxgWQAEgBADgBAhxkJIhBghAk7jRIAQAfIAiBBAk7jRQAVgeAbgcQAcgbAegUIgkgTIhYBYgAkLhqQABgDABgEAlzhKIgmAMIAAB9IAmAMIAYAHIAKADIAAAAIBGAWQgUgxAAg6QAAg5AUgxIhGAWIgiAKQAOhJAqg+AlzBLQgHgkAAgnQAAgmAHgkAkriyQgbAugLAwAhqEMQgDgBgEgBAiyEsIBBgiQgxgWgpgoQgogpgWgxIgiBBIgQAfIgSAkIBYBYIAkgSQgegVgcgbQgbgcgVgeQgqg+gOhJAkJByQgBgEgBgDAlRBVQAMAwAaAuAhRFcIAHAYQhJgOg+gqIAfgQQAuAaAwAMgAhUFSIAAAAIADAKAhqEMIAWBGAE0DEIgJgRIAAAAIghhBAEMBrIBGgWIAKgDABrEMQgxAUg6AAQg5AAgxgUAByEKQgEABgDABABVFSIAWhGAlbBSIAKAD");
	this.shape_1.setTransform(41,41);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A97D5").s().p("AgkAlQgPgPAAgWQAAgVAPgPQAQgPAUAAQAVAAAPAPQAQAPAAAVQAAAWgQAPQgPAPgVAAQgUAAgQgPg");
	this.shape_2.setTransform(41,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gear_2, new cjs.Rectangle(-1,-1.7,84.8,85.5), null);


(lib.gear_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#68CD52").p("AECAAQAABrhLBMQhMBLhrAAQhqAAhMhLQhLhMAAhrQAAhqBLhMQBMhLBqAAQBrAABMBLQBLBMAABqg");
	this.shape.setTransform(41,41);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#68CD52").ss(1.2).p("AF0BLIAmgMIAAh9IgmgMIgYgHIgKgDIAAAAIhGgWQAUAxAAA5QAAA6gUAxQgBADgBAEQgWAxgoApQgpAogxAWIBBAiIAfAQQg+AqhJAOQgkAGgnAAQgmAAgkgGIAMAmIB9AAIAMgmIAKgiQAwgLAugbAE8jRIASgkIhZhYIgjASIgMAHIgTAKQAAAAAAAAIhBAhQAxAWApAoQAoApAWAxQABAEABADAEriyIAKgTAEriyIAAAAIAKgTIAHgMQAqA+AOBJQAGAkAAAmQAAAngGAkQgOBJgqA+QgVAegbAcQgcAbgeAVIAjASIBZhYIgSgkIgIgOIgJgRQAagsANgyIAAAAIAKgDIAYgHADSk7QAeAVAcAbQAbAcAVAeABSlbIgHgYIgMgmIh9AAQgGATgGATQAkgHAmAAQAnAAAkAHQBJAOA+AqABVlRIAAAAIgDgKABVlRIgDgKABrkLQADABAEABACzkqQgsgagygNAhqkLQAxgUA5AAQA6AAAxAUIgWhGABdAAQAAAngcAaQgaAcgnAAQglAAgbgcQgcgaAAgnQAAglAcgbQAbgcAlAAQAnAAAaAcQAcAbAAAlgAFchRIgKgDQgNgygagsAEKhxIAhhBADGk0IgTAKAhKlzQgCAIgDAIQAAACgBACIgBAEIgDAKIAAAAQgyANgsAaIgRgJIgOgHQA+grBJgOgAhRlbIgDAKIgWBGAiykqIAAAAIgRgJAkJhxQAWgxAogpQApgoAxgWQAEgBADgBAhxkJIhBghAk7jRIAQAfIAiBBAk7jRQAVgeAbgcQAcgbAegUIgkgTIhYBYgAkLhqQABgDABgEAlzhKIgmAMIAAB9IAmAMIAYAHIAKADIAAAAIBGAWQgUgxAAg6QAAg5AUgxIhGAWIgiAKQAOhJAqg+AlzBLQgHgkAAgnQAAgmAHgkAkriyQgbAugLAwAhqEMQgDgBgEgBAiyEsIBBgiQgxgWgpgoQgogpgWgxIgiBBIgQAfIgSAkIBYBYIAkgSQgegVgcgbQgbgcgVgeQgqg+gOhJAkJByQgBgEgBgDAlRBVQAMAwAaAuAhRFcIAHAYQhJgOg+gqIAfgQQAuAaAwAMgAhUFSIAAAAIADAKAhqEMIAWBGAE0DEIgJgRIAAAAIghhBAEMBrIBGgWIAKgDABrEMQgxAUg6AAQg5AAgxgUAByEKQgEABgDABABVFSIAWhGAlbBSIAKAD");
	this.shape_1.setTransform(41,41);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#68CD52").s().p("AgkAlQgPgPAAgWQAAgVAPgPQAQgPAUAAQAVAAAPAPQAQAPAAAVQAAAWgQAPQgPAPgVAAQgUAAgQgPg");
	this.shape_2.setTransform(41,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gear_1, new cjs.Rectangle(-1,-1.7,84.8,85.5), null);


(lib.fade_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,0.051],-591,0,531,0).s().p("EhcVAyyMAAAhljMC4rAAAMAAABljg");
	this.shape.setTransform(591,325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fade_, new cjs.Rectangle(0,0,1182,650), null);


(lib.Top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{a1:1,a2:52,a3:102,a4:152});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_51 = function() {
		this.stop();
	}
	this.frame_101 = function() {
		this.stop();
	}
	this.frame_151 = function() {
		this.stop();
	}
	this.frame_202 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(51).call(this.frame_51).wait(50).call(this.frame_101).wait(50).call(this.frame_151).wait(51).call(this.frame_202).wait(6));

	// t42
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(910.5,113.1,1,0.027,0,0,0,0.5,38.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(167).to({_off:false},0).to({regY:36.5,scaleY:1,y:148.6},30,cjs.Ease.get(1)).wait(11));

	// t41
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(910.5,9,1,0.038,0,0,0,0.5,26.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(152).to({_off:false},0).to({scaleY:1,y:34.5},10).wait(46));

	// w4
	this.instance_2 = new lib.w();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1030,45.5,1,1,0,0,0,120,45.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(157).to({_off:false},0).to({_off:true},40).wait(11));

	// t4
	this.instance_3 = new lib.Symbol7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(951.5,38,1,1,0,0,0,86.5,38);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(157).to({_off:false},0).to({x:811.5},50,cjs.Ease.get(1)).wait(1));

	// l1
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,11,1,0.006,0,0,0,0,157.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({regY:157,scaleY:1,y:167},50,cjs.Ease.get(1)).wait(157));

	// w1
	this.instance_5 = new lib.w();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-120,45.5,1,1,0,0,0,120,45.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({_off:true},50).wait(157));

	// t1
	this.instance_6 = new lib.Symbol3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-107,36.6,1,1,0,0,0,110,36.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({x:123},50,cjs.Ease.get(1)).wait(157));

	// l2
	this.instance_7 = new lib.Symbol2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(237,11,1,0.009,0,0,0,0,116.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(51).to({_off:false},0).to({regY:111,scaleY:1,y:121},50,cjs.Ease.get(1)).wait(107));

	// w2
	this.instance_8 = new lib.w();
	this.instance_8.parent = this;
	this.instance_8.setTransform(117,45.5,1,1,0,0,0,120,45.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(51).to({_off:false},0).to({_off:true},50).wait(107));

	// t2
	this.instance_9 = new lib.Symbol4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(140,37.5,1,1,0,0,0,110,37.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(51).to({_off:false},0).to({x:360},50,cjs.Ease.get(1)).wait(107));

	// l3
	this.instance_10 = new lib.Symbol5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(483,11,1,0.009,0,0,0,0,116.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(101).to({_off:false},0).to({regY:111,scaleY:1,y:121},50,cjs.Ease.get(1)).wait(57));

	// w3
	this.instance_11 = new lib.w();
	this.instance_11.parent = this;
	this.instance_11.setTransform(363,45.5,1,1,0,0,0,120,45.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(101).to({_off:false},0).to({_off:true},50).wait(57));

	// t3
	this.instance_12 = new lib.Symbol6();
	this.instance_12.parent = this;
	this.instance_12.setTransform(376,37.5,1,1,0,0,0,110,37.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(101).to({_off:false},0).to({x:606},50,cjs.Ease.get(1)).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.tb5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// Layer 1
	this.instance = new lib.Tween26("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43,16.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:26.5,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.tb4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// Layer 1
	this.instance = new lib.Tween25("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43,16.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:26.5,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.tb3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// Layer 1
	this.instance = new lib.Tween24("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43,16.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:26.5,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.tb2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// Layer 1
	this.instance = new lib.Tween23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43,16.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:26.5,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.tb1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43,16.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:26.5,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.t12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(1));

	// Layer 1
	this.instance = new lib.Tween21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(78.3,12.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({x:68.3,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.t11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(1));

	// Layer 1
	this.instance = new lib.Tween15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(71.1,27);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({y:37,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.t10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(1));

	// Layer 1
	this.instance = new lib.Tween20("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(78.3,12.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({x:68.3,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.t9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(1));

	// Layer 1
	this.instance = new lib.Tween14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(71.1,27);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({y:37,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.t8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(1));

	// Layer 1
	this.instance = new lib.Tween19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(78.3,12.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({x:68.3,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.t7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(1));

	// Layer 1
	this.instance = new lib.Tween13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(71.1,27);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({y:37,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(1));

	// Layer 1
	this.instance = new lib.Tween12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(71.1,27);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({y:37,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(1));

	// Layer 1
	this.instance = new lib.Tween11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.3,26.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({y:36.4,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(1));

	// Layer 1
	this.instance = new lib.Tween10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.3,26.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({y:36.4,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(1));

	// Layer 1
	this.instance = new lib.Tween9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.3,19.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({y:29.5,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(1));

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.3,26.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({y:36.4,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(1));

	// Layer 1
	this.instance = new lib.t1_();
	this.instance.parent = this;
	this.instance.setTransform(29,2.8,1,1,0,0,0,29,12.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({y:12.8,alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.lb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(0,1,1,0.054,0,0,0,0,18.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleY:1,y:18.5},23,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.l12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.instance = new lib.Tween18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(50.5,0,0.01,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:1,x:25.4},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.l11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.instance = new lib.Tween8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,1,1,0.01,0,0,0,0,5.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({regY:0,scaleY:1,y:104.5},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.l10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.instance = new lib.Tween17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(106.3,0,0.027,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:1,x:53.9},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.l9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,1,1,0.012,0,0,0,0,4.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({regY:0,scaleY:1,y:85},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.l8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.instance = new lib.Tween16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(106.7,0,0.02,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:1,x:53.9},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.l7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,1,1,0.018);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleY:1,y:56.8},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.l6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,1,1,0.018);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleY:1,y:56.8},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.l5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,1,1,0.018);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleY:1,y:56.8},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.l4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,1,1,0.018);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleY:1,y:56.8},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.l3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,1,1,0.018);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleY:1,y:56.8},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.l2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.instance = new lib.l2_();
	this.instance.parent = this;
	this.instance.setTransform(0,1,1,0.015,0,0,0,0,68.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleY:1,y:68.7},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.l1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.instance = new lib.l1_();
	this.instance.parent = this;
	this.instance.setTransform(0,0.5,1,0.012,0,0,0,0,43.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleY:1,y:43.5},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.gear12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":29});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_84 = function() {
		this.gotoAndStop("in");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(55).call(this.frame_84).wait(1));

	// gear
	this.instance = new lib.gear_3();
	this.instance.parent = this;
	this.instance.setTransform(41.1,41.1,0.098,0.098,-180,0,0,40.9,40.8);
	this.instance._off = true;
	this.instance.cache(-3,-4,89,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:41,regY:41,scaleX:1,scaleY:1,rotation:0,x:41,y:41},28,cjs.Ease.get(1)).to({rotation:360},55,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.gear3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":49});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_104 = function() {
		this.gotoAndStop("in");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(55).call(this.frame_104).wait(1));

	// gear
	this.instance = new lib.gear_3();
	this.instance.parent = this;
	this.instance.setTransform(41.1,41.1,0.098,0.098,-180,0,0,40.9,40.8);
	this.instance._off = true;
	this.instance.cache(-3,-4,89,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:41,regY:41,scaleX:1.35,scaleY:1.35,rotation:-90,y:40.9},18).to({scaleX:1,scaleY:1,rotation:0,x:41,y:41},30,cjs.Ease.get(1)).to({rotation:360},55,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.gear2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":49});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_104 = function() {
		this.gotoAndStop("in");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(55).call(this.frame_104).wait(1));

	// gear
	this.instance = new lib.gear_2();
	this.instance.parent = this;
	this.instance.setTransform(41.1,41.1,0.098,0.098,-180,0,0,40.9,40.8);
	this.instance._off = true;
	this.instance.cache(-3,-4,89,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:41,regY:41,scaleX:1.15,scaleY:1.15,rotation:-90,x:41,y:41},18).to({scaleX:1,scaleY:1,rotation:0},30,cjs.Ease.get(1)).to({rotation:360},55,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.gear1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":49});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_104 = function() {
		this.gotoAndStop("in");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(55).call(this.frame_104).wait(1));

	// gear
	this.instance = new lib.gear_1();
	this.instance.parent = this;
	this.instance.setTransform(41.1,41.1,0.098,0.098,-180,0,0,40.9,40.8);
	this.instance._off = true;
	this.instance.cache(-3,-4,89,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:41,regY:41,scaleX:1.35,scaleY:1.35,rotation:-90,y:40.9},18).to({scaleX:1,scaleY:1,rotation:0,x:41,y:41},30,cjs.Ease.get(1)).to({rotation:360},55,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.gear0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":29});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_84 = function() {
		this.gotoAndStop("in");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(55).call(this.frame_84).wait(1));

	// gear
	this.instance = new lib.gear_1();
	this.instance.parent = this;
	this.instance.setTransform(41.1,41.1,0.098,0.098,-180,0,0,40.9,40.8);
	this.instance.cache(-3,-4,89,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:41,regY:41,scaleX:1,scaleY:1,rotation:0,x:41,y:41},29,cjs.Ease.get(1)).to({rotation:360},55,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.9,36.9,8.3,8.4);


(lib.fade2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_109 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(109).call(this.frame_109).wait(1));

	// Layer 1
	this.instance = new lib.fade_();
	this.instance.parent = this;
	this.instance.setTransform(-120.7,314.6,1.785,1.393,0,0,0,560.8,324.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:2022.9},108).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1121.9,-137.8,2110.4,905.5);


(lib.fade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"a1":1,"a2":93,"a3":174,"a4":305});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_92 = function() {
		this.stop();
	}
	this.frame_173 = function() {
		this.stop();
	}
	this.frame_304 = function() {
		this.stop();
	}
	this.frame_380 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(92).call(this.frame_92).wait(81).call(this.frame_173).wait(131).call(this.frame_304).wait(76).call(this.frame_380).wait(1));

	// Layer 1
	this.instance = new lib.fade_();
	this.instance.parent = this;
	this.instance.setTransform(505,325,1,1,0,0,0,561,325);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1701.3},379).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,0,1182,650);


(lib.Bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_164 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(164).call(this.frame_164).wait(1));

	// l
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(0.5,1,1,0.013,0,0,0,0.5,79);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({scaleY:1,y:79},50,cjs.Ease.get(1)).wait(16));

	// w
	this.instance_1 = new lib.w();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120.1,96.1,1,1,0,0,0,120,45.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).wait(56));

	// PRODUCT LAUNCH
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-82.5,95.9,1,1,0,0,0,79.5,38);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({_off:false},0).to({x:87.5},50,cjs.Ease.get(1)).wait(6));

	// 2018 – 2019
	this.instance_3 = new lib.Symbol12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(86.7,129.9,1,1,0,0,0,78.2,14);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(129).to({_off:false},0).to({y:149.9,alpha:1},35,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.scheme = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		var i = 1;
		var t = 0;
		var roadmap = this;
		var fade = this.fade;
		var fade2 = this.fade2;
		var top = this.top;
		var bottom = this.bottom;
		var map = this;
		
		setTimeout(function() {
			action('a1', 3);
			actionY(3);
		}, 500);
		
		setTimeout(function() {
			action('a2', 5);
			actionY(4);
		}, 4000);
		
		setTimeout(function() {
			action('a3', 9);
			actionY(5);
		}, 7000);
		
		
		setTimeout(function() {
			action('a4', 12);
			fade2.play();
			bottom.play();
		}, 12000);
		
		
		function action(a, ii) {
			fade.gotoAndPlay(a);
			top.gotoAndPlay(a);
			var timer = setInterval(function() {
				i++;
				map["g"+i].play();
				map["l"+i].play();
				map["t"+i].play();
				if (i == ii) {
					clearInterval(timer);
				}
			}, 600);
		}
		
		function actionY(tt) {
			setTimeout(function() {
				var timer2 = setInterval(function() {
					t++;
					map["lb"+t].play();
					map["tb"+t].play();
					if (t == tt) {
						clearInterval(timer2);
					}
				}, 600);
			}, 1000);
		}
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// lb
	this.lb5 = new lib.lb();
	this.lb5.parent = this;
	this.lb5.setTransform(656,575.5,1,1,0,0,0,0,18.5);

	this.lb4 = new lib.lb();
	this.lb4.parent = this;
	this.lb4.setTransform(518,575.5,1,1,0,0,0,0,18.5);

	this.lb3 = new lib.lb();
	this.lb3.parent = this;
	this.lb3.setTransform(272,575.5,1,1,0,0,0,0,18.5);

	this.lb2 = new lib.lb();
	this.lb2.parent = this;
	this.lb2.setTransform(150,575.5,1,1,0,0,0,0,18.5);

	this.lb1 = new lib.lb();
	this.lb1.parent = this;
	this.lb1.setTransform(35,575.5,1,1,0,0,0,0,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.lb1},{t:this.lb2},{t:this.lb3},{t:this.lb4},{t:this.lb5}]},1).wait(1));

	// tb
	this.tb5 = new lib.tb5();
	this.tb5.parent = this;
	this.tb5.setTransform(656,623,1,1,0,0,0,43,26.5);

	this.tb4 = new lib.tb4();
	this.tb4.parent = this;
	this.tb4.setTransform(519,623,1,1,0,0,0,43,26.5);

	this.tb3 = new lib.tb3();
	this.tb3.parent = this;
	this.tb3.setTransform(272,623,1,1,0,0,0,43,26.5);

	this.tb2 = new lib.tb2();
	this.tb2.parent = this;
	this.tb2.setTransform(149,623,1,1,0,0,0,43,26.5);

	this.tb1 = new lib.tb1();
	this.tb1.parent = this;
	this.tb1.setTransform(39,622.5,1,1,0,0,0,43,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.tb1},{t:this.tb2},{t:this.tb3},{t:this.tb4},{t:this.tb5}]},1).wait(1));

	// Titles
	this.t12 = new lib.t12();
	this.t12.parent = this;
	this.t12.setTransform(969.2,24.8,1,1,0,0,0,68.2,12.8);

	this.t10 = new lib.t10();
	this.t10.parent = this;
	this.t10.setTransform(775.2,93.8,1,1,0,0,0,68.2,12.8);

	this.t8 = new lib.t8();
	this.t8.parent = this;
	this.t8.setTransform(679.2,184.8,1,1,0,0,0,68.2,12.8);

	this.l12 = new lib.l12();
	this.l12.parent = this;
	this.l12.setTransform(1069.2,30.9,1,1,0,0,0,25.4,0);

	this.l10 = new lib.l10();
	this.l10.parent = this;
	this.l10.setTransform(909.2,103.4,1,1,0,0,0,53.9,0);

	this.l8 = new lib.l8();
	this.l8.parent = this;
	this.l8.setTransform(808.4,191.3,1,1,0,0,0,53.9,0);

	this.t11 = new lib.t11();
	this.t11.parent = this;
	this.t11.setTransform(1066.1,455,1,1,0,0,0,71.1,37);

	this.t9 = new lib.t9();
	this.t9.parent = this;
	this.t9.setTransform(945.1,455,1,1,0,0,0,71.1,37);

	this.t7 = new lib.t7();
	this.t7.parent = this;
	this.t7.setTransform(804.1,455,1,1,0,0,0,71.1,37);

	this.t6 = new lib.t6();
	this.t6.parent = this;
	this.t6.setTransform(655.1,455,1,1,0,0,0,71.1,37);

	this.t5 = new lib.t5();
	this.t5.parent = this;
	this.t5.setTransform(520.2,454,1,1,0,0,0,68.2,36.4);

	this.t4 = new lib.t4();
	this.t4.parent = this;
	this.t4.setTransform(394.2,454.4,1,1,0,0,0,68.2,36.4);

	this.t3 = new lib.t3();
	this.t3.parent = this;
	this.t3.setTransform(274.2,447.4,1,1,0,0,0,68.2,29.4);

	this.t2 = new lib.t2();
	this.t2.parent = this;
	this.t2.setTransform(151.2,508.4,1,1,0,0,0,68.2,36.4);

	this.t1 = new lib.t1();
	this.t1.parent = this;
	this.t1.setTransform(34,484.8,1,1,0,0,0,29,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4},{t:this.t5},{t:this.t6},{t:this.t7},{t:this.t9},{t:this.t11},{t:this.l8},{t:this.l10},{t:this.l12},{t:this.t8},{t:this.t10},{t:this.t12}]},1).wait(1));

	// Lines
	this.l9 = new lib.l9();
	this.l9.parent = this;
	this.l9.setTransform(946,322.1,1,1,0,0,0,0,85);

	this.l11 = new lib.l11();
	this.l11.parent = this;
	this.l11.setTransform(1061,301.5,1,1,0,0,0,0,104.5);

	this.l7 = new lib.l7();
	this.l7.parent = this;
	this.l7.setTransform(800,348.8,1,1,0,0,0,0,56.8);

	this.l6 = new lib.l6();
	this.l6.parent = this;
	this.l6.setTransform(656,348.8,1,1,0,0,0,0,56.8);

	this.l5 = new lib.l5();
	this.l5.parent = this;
	this.l5.setTransform(518,348.8,1,1,0,0,0,0,56.8);

	this.l4 = new lib.l4();
	this.l4.parent = this;
	this.l4.setTransform(395,348.8,1,1,0,0,0,0,56.8);

	this.l3 = new lib.l3();
	this.l3.parent = this;
	this.l3.setTransform(272,348.8,1,1,0,0,0,0,56.8);

	this.l2 = new lib.l2();
	this.l2.parent = this;
	this.l2.setTransform(150,405.7,1,1,0,0,0,0,68.7);

	this.l1 = new lib.l1();
	this.l1.parent = this;
	this.l1.setTransform(35,431.5,1,1,0,0,0,0,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.l1},{t:this.l2},{t:this.l3},{t:this.l4},{t:this.l5},{t:this.l6},{t:this.l7},{t:this.l11},{t:this.l9}]},1).wait(1));

	// gears
	this.g12 = new lib.gear12();
	this.g12.parent = this;
	this.g12.setTransform(1094,31.4,0.66,0.66,0,0,0,41.2,41.4);

	this.g10 = new lib.gear3();
	this.g10.parent = this;
	this.g10.setTransform(962.9,103.1,0.66,0.66,0,0,0,41.2,41.4);

	this.g8 = new lib.gear3();
	this.g8.parent = this;
	this.g8.setTransform(862.2,191.3,0.66,0.66,0,0,0,41.2,41.4);

	this.g11 = new lib.gear3();
	this.g11.parent = this;
	this.g11.setTransform(1061.2,196.7,0.836,0.836,0,0,0,41.2,41.2);

	this.g9 = new lib.gear3();
	this.g9.parent = this;
	this.g9.setTransform(945.9,237.2,0.836,0.836,0,0,0,41.2,41.2);

	this.g7 = new lib.gear2();
	this.g7.parent = this;
	this.g7.setTransform(800.1,291.2,0.836,0.836,0,0,0,41.2,41.2);

	this.g6 = new lib.gear2();
	this.g6.parent = this;
	this.g6.setTransform(656,291.3,0.661,0.661,0,0,0,41.2,41.3);

	this.g5 = new lib.gear2();
	this.g5.parent = this;
	this.g5.setTransform(517.5,291.2,0.836,0.836,0,0,0,41.2,41.2);

	this.g4 = new lib.gear2();
	this.g4.parent = this;
	this.g4.setTransform(394.9,291.3,0.661,0.661,0,0,0,41.2,41.3);

	this.g3 = new lib.gear1();
	this.g3.parent = this;
	this.g3.setTransform(272.2,291.2,0.836,0.836,0,0,0,41.2,41.2);

	this.g2 = new lib.gear1();
	this.g2.parent = this;
	this.g2.setTransform(150,337.4,0.657,0.657,0,0,0,41.1,41.1);

	this.g1 = new lib.gear0();
	this.g1.parent = this;
	this.g1.setTransform(35,388.1,0.829,0.829,0,0,0,41,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.g1},{t:this.g2},{t:this.g3},{t:this.g4},{t:this.g5},{t:this.g6},{t:this.g7},{t:this.g9},{t:this.g11},{t:this.g8},{t:this.g10},{t:this.g12}]},1).wait(1));

	// top
	this.top = new lib.Top();
	this.top.parent = this;
	this.top.setTransform(490.2,176.3,1,1,0,0,0,455.2,162.3);
	this.top._off = true;

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1).to({_off:false},0).wait(1));

	// bottom
	this.bottom = new lib.Bottom();
	this.bottom.parent = this;
	this.bottom.setTransform(1028.5,566.1,1,1,0,0,0,83.5,82);
	this.bottom._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1).to({_off:false},0).wait(1));

	// fade2
	this.fade2 = new lib.fade2();
	this.fade2.parent = this;
	this.fade2.setTransform(1057.2,103.9,0.148,0.196,0,0,0,561.2,325.1);
	this.fade2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fade2).wait(1).to({_off:false},0).wait(1));

	// fade
	this.fade = new lib.fade();
	this.fade.parent = this;
	this.fade.setTransform(561,325,1,1,0,0,0,561,325);
	this.fade._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fade).wait(1).to({_off:false},0).wait(1));

	// lines
	this.instance = new lib.lines();
	this.instance.parent = this;
	this.instance.setTransform(32,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 1122,
	height: 650,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"img/scheme/lines.png", id:"lines"}
	],
	preloads: []
};




})(scheme = scheme||{}, img_scheme = img_scheme||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var scheme, img_scheme, createjs, ss, AdobeAn;