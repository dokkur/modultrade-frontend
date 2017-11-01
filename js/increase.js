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



(lib.numbers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		if (this.parent.i == 1) {
			this.stop();
		}
	}
	this.frame_19 = function() {
		if (this.parent.i == 2) {
			this.stop();
		}
	}
	this.frame_44 = function() {
		if (this.parent.i == 3) {
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(14).call(this.frame_19).wait(25).call(this.frame_44).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#25D951","#0096D8"],[0,1],-27.4,20.4,-5.2,-27.2).s().p("AAbByIBIinIhqAAIAAg7IC5AAIAAAwIhMCygAhkByIAAiLIgmAlIgngnIBXhVIA7AAIAADig");
	this.shape.setTransform(17.8,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#25D951","#0096D8"],[0,1],-28.3,20.3,-6.1,-27.3).s().p("AAwBxQgSgEgOgHQgQgIgGgMQgEgGgCgIQgDgHAAgIQAAgJAEgJQADgJAFgHQAFgHAHgGQAIgGAKgDIgQgJQgIgFgEgGQgEgHgEgIQgCgHAAgLQAAgHACgIQACgGAFgHQAGgLAPgIQAOgGARgEQAQgDATAAQASAAARADQASAEANAGQAPAIAHALQAFAHACAGQACAIAAAHQAAALgDAHQgCAIgGAHQgEAGgIAFIgRAJQAKADAIAGQAJAGAFAHQAGAHADAJQADAJAAAJQAAAIgCAHQgDAIgDAGQgJAMgPAIQgNAHgTAEQgRAEgUAAQgTAAgSgEgABAAhQgKAFAAAHQAAAHAIAEQAJAFAOABQAOgBAJgFQAIgEAAgHQAAgHgKgFQgJgFgMgBQgMABgJAFgABBg4QgIAEABAHQgBAFAJAFQAIAEALABQALgBAIgEQAJgFAAgFQAAgHgIgEQgHgEgNAAQgNAAgHAEgAhsBxIAAiKIgmAlIgngoIBWhVIA8AAIAADig");
	this.shape_1.setTransform(18.6,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#25D951","#0096D8"],[0,1],-28.2,20.4,-6,-27.2).s().p("AAcBwQgTgGgNgJIAcg1QAKAHAKADQAJACANAAQALAAAJgDQAJgDAHgFQAGgFAEgHQAEgHAAgJIAAgBQgJALgOAHQgOAGgQAAQgPAAgPgFQgOgGgLgJQgLgKgGgNQgHgOAAgSQAAgSAHgPQAHgPAMgLQAMgLASgFQARgGAUAAQAOAAAMACQAMACAKAFQAKAEAJAGQAIAGAHAIQAHAIAEAKQAFAJAEAKQAGAeAAAQQAAAOgCAMQgCANgFALQgEALgGAJQgGAJgIAIQgIAHgJAGQgKAFgLAEQgKAEgNACQgMACgNAAQgTAAgTgFgAA8gyQgIAFAAAIQAAAKALAFQAJAEAMAAQAKAAAHgCQAJgCAGgFQgBgMgIgIQgEgEgGgCQgHgDgJAAQgMAAgJAGgAhrBxIAAiKIgnAlIgmgoIBWhVIA8AAIAADig");
	this.shape_2.setTransform(18.5,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#25D951","#0096D8"],[0,1],-30.1,20.3,-7.9,-27.3).s().p("ABRByQgLgCgJgEQgKgFgIgHQgHgGgHgIQgIgMgKgaQgFgOgCgeQAAgOAHgdIAHgUQAFgKAGgHQAHgJAHgHQAIgGAKgEQAJgGALgCQAMgCAMAAQAMAAAMACQALACAJAGQAKAEAIAGQAHAHAHAJQAGAHAFAKIAHAUQAHAdAAAOQgCAegFAOQgKAagIAMQgHAIgHAGQgIAHgKAFQgJAEgLACQgMADgMAAQgMAAgMgDgABbg0QgGADgEAHQgEAHgCALQgCALAAANQAAAOACALQACALAEAGQAEAIAGADQAGADAIAAQAIAAAGgDQAGgDAEgIQAEgGACgLQACgLAAgOQAAgNgCgLQgCgLgEgHQgEgHgGgDQgGgEgIAAQgIAAgGAEgAjDBxIAAg2QA0gkAsggQALgKAEgGQADgGAAgHQAAgIgIgFQgHgFgLAAQgSABgPAFQgNAHgOALIgmguQAKgKAMgIQALgHANgEQAMgFAOgCQAMgCAMAAQAWAAASAFQASAGANALQANAKAHAPQAGAOAAARQAAAMgDALQgEALgIAJQgJALgNAMQgOAMgUANIBJAAIAAA8g");
	this.shape_3.setTransform(20.5,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape_2}]},14).to({state:[{t:this.shape_3}]},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.5,35.6,22.7);


(lib.graph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		if (this.parent.i == 1) {
			this.stop();
		}
	}
	this.frame_35 = function() {
		if (this.parent.i == 2) {
			this.stop();
		}
	}
	this.frame_52 = function() {
		if (this.parent.i == 3) {
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(18).call(this.frame_35).wait(17).call(this.frame_52).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().de(-65.5,-65.5,131,131);
	this.shape.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AKMA5YgfFjk0EJljgXYljgYkQkvAQljYAPljEpkXFjAIYFkAIEdEjAAFjIqPAAg");
	this.shape_1.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AKFByYg9FZlCDslbguYlbgtj6k4AelcYAfldEskIFeAQYFeAPEUEgAAFeIqPAAg");
	this.shape_2.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AJ5CpYhaFOlMDPlShEYlShDjkk+AtlWYAtlWEuj4FYAWYFYAXEMEeAAFYIqPAAg");
	this.shape_3.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AJoDgYh1E/lUCxlHhXYlJhYjOlEA7lOYA7lOExjqFRAdYFSAeEEEbAAFTIqPAAg");
	this.shape_4.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AJSEVYiOEvlaCUk7hsYk9hri5lJBJlFYBIlGEyjcFLAlYFNAkD7EZAAFNIqPAAg");
	this.shape_5.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AI3FHYikEdleB3kvh+Ykvh+iklLBVk9YBVk9E0jNFFArYFFAqD0EWAAFIIqPAAg");
	this.shape_6.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AH2GlYjND0lcA9kTifYkUifh5lNBtkqYBskrE0ixE4A3YE5A3DkEQAAE9IqPAAg");
	this.shape_7.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AHPHPYjdDdlZAikEitYkEiuhllNB4kgYB3kgEzikEyA9YEyA9DdENAAE3IqPAAg");
	this.shape_8.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AGlH2YjrDFlUAIj0i7Yjzi7hRlLCBkWYCCkWEyiXErBDYEsBCDVEKAAEyIqPAAg");
	this.shape_9.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AF4IZYj3CtlNgTjjjGYjjjHg9lICLkLYCLkMExiKEkBIYElBIDOEGAAEtIqPAAg");
	this.shape_10.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AFII3YkBCVlEgrjRjSYjSjRgqlECUkAYCUkBEuh9EeBMYEeBNDHEEAAEnIqPAAg");
	this.shape_11.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AEVJSYkIB7k4hCjAjbYjAjbgZk+Cdj2YCcj1EshxEWBRYEYBSDAEAAAEiIqPAAg");
	this.shape_12.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ADgJoYkMBhkthXiujjYiujjgHk4CkjrYCkjqEphlEQBWYERBWC5D9AAEdIqPAAg");
	this.shape_13.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ACqJ5YkPBIkfhsicjpYicjpALkyCqjfYCrjeEmhZEJBaYEJBaCzD5AAEYIqPAAg");
	this.shape_14.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AByKFYkOAwkRh/iJjvYiKjuAakqCxjTYCxjTEihOECBeYEDBfCsD2AAESIqPAAg");
	this.shape_15.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA5KNYkMAXkAiQh3jyYh4jzAqkhC2jHYC3jIEehCD6BiYD8BhCmDzAAENIqPAAg");
	this.shape_16.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAKPYlpAAklklAAlqYAAlpElklFpAAYFqAAElElAAFpIqPAAg");
	this.shape_17.setTransform(59.9,59.9,1.008,1.008,-90);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4KOYlhgfkJkyAVlhYAVliEqkRFhAKYFiALEaEiAAFhIqPAAg");
	this.shape_18.setTransform(59.8,59.9,1.008,1.008,-90);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhxKKYlVg8jsk9AolXYAplZEuj9FZAUYFaAUEPEfAAFaIqPAAg");
	this.shape_19.setTransform(59.4,59.9,1.008,1.008,-90);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AioKEYlJhYjOlEA7lOYA7lOExjqFRAeYFSAdEEEbAAFTIqPAAg");
	this.shape_20.setTransform(58.8,59.9,1.008,1.008,-90);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AjfJ7Yk4hxiylKBNlCYBMlEEzjWFJAmYFKAnD5EXAAFMIqPAAg");
	this.shape_21.setTransform(57.9,59.9,1.008,1.008,-90);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AkUJwYkmiJiWlNBek2YBdk4EzjEFBAwYFCAvDuEUAAFEIqPAAg");
	this.shape_22.setTransform(56.8,59.9,1.008,1.008,-90);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AlGJjYkUifh5lNBtkqYBskrE0ixE4A3YE5A3DkEQAAE9IqPAAg");
	this.shape_23.setTransform(55.5,59.9,1.008,1.008,-90);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Al3JUYj+iyhelNB7kcYB7kdEyigEvA/YExA/DaEMAAE1IqPAAg");
	this.shape_24.setTransform(53.9,59.9,1.008,1.008,-90);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AmkJCYjpjDhElJCJkOYCIkQExiOEmBGYEnBGDREIAAEvIqPAAg");
	this.shape_25.setTransform(52.2,59.9,1.008,1.008,-90);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AnOIvYjSjRgqlFCUkAYCUkAEuh9EeBMYEeBNDHEEAAEnIqPAAg");
	this.shape_26.setTransform(50.2,59.9,1.008,1.008,-90);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("An1IaYi6jegSk8CfjyYCfjyErhsEUBTYEVBTC+D/AAEgIqPAAg");
	this.shape_27.setTransform(48.1,59.9,1.008,1.008,-90);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AoYIDYihjnAEk0CpjiYCojjEnhdELBZYEMBZC1D6AAEaIqPAAg");
	this.shape_28.setTransform(45.8,59.9,1.008,1.008,-90);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ao2HrYiKjuAakqCxjTYCxjTEihOECBeYEDBeCsD2AAETIqPAAg");
	this.shape_29.setTransform(43.4,59.9,1.008,1.008,-90);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ApRHSYhxjzAukfC5jDYC4jEEcg/D5BjYD5BjCkDyAAELIqPAAg");
	this.shape_30.setTransform(40.8,59.9,1.008,1.008,-90);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ApmG4Yhaj2BBkTC/izYC+izEVgxDwBnYDxBoCbDsAAEEIqPAAg");
	this.shape_31.setTransform(38.2,59.9,1.008,1.008,-90);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ap4GcYhCj2BTkEDDikYDDikEPgjDnBrYDnBsCTDnAAD+IqPAAg");
	this.shape_32.setTransform(35.4,59.9,1.008,1.008,-90);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AqEGAYgrj0Bij2DHiUYDHiUEIgXDdBvYDdBvCMDiAAD4IqPAAg");
	this.shape_33.setTransform(32.6,59.9,1.008,1.008,-90);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AqMFkYgVjwBxjnDJiEYDJiFEBgLDUByYDUBzCEDcAADxIqPAAg");
	this.shape_34.setTransform(29.8,59.9,1.008,1.008,-90);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AqOFIYAAlpElkmFpAAYFqAAElEmAAFoIqPAAg");
	this.shape_35.setTransform(26.9,59.9,1.008,1.008,-90);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AqNEOYAflcEskHFdAPYFfAPEUEhAAFdIqOAAg");
	this.shape_36.setTransform(26.9,59.8,1.008,1.008,-90);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AqJDWYA7lOExjqFRAeYFSAeEEEbAAFSIqOAAg");
	this.shape_37.setTransform(26.9,59.4,1.008,1.008,-90);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AqDCeYBVk9EzjNFFArYFGArD0EWAAFHIqOAAg");
	this.shape_38.setTransform(26.9,58.8,1.008,1.008,-90);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ap6BoYBskqE0iyE4A3YE5A4DkEPAAE+IqOAAg");
	this.shape_39.setTransform(26.9,57.9,1.008,1.008,-90);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("ApvAzYCBkWEyiWErBCYEsBDDVEIAAE0IqOAAg");
	this.shape_40.setTransform(26.9,56.8,1.008,1.008,-90);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("ApiAAYCUkAEuh9EeBNYEeBNDHECAAEpIqOAAg");
	this.shape_41.setTransform(26.9,55.5,1.008,1.008,-90);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("ApTgvYCkjqEphlEQBWYEQBWC6D8AAEeIqOAAg");
	this.shape_42.setTransform(26.9,53.9,1.008,1.008,-90);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("ApBhdYCxjSEihOEBBeYEDBeCsD1AAEUIqOAAg");
	this.shape_43.setTransform(26.9,52.2,1.008,1.008,-90);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AouiHYC7i7Eag4D0BlYD0BmCgDuAAEJIqOAAg");
	this.shape_44.setTransform(26.9,50.2,1.008,1.008,-90);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AoZitYDDikEQgkDmBsYDnBrCTDnAAD/IqOAAg");
	this.shape_45.setTransform(26.9,48.1,1.008,1.008,-90);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AoCjQYDIiMEFgRDYBxYDYBwCIDfAAD1IqOAAg");
	this.shape_46.setTransform(26.9,45.8,1.008,1.008,-90);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AnqjvYDKh1D6AADKB1YDKB1B9DXAADqIqOABg");
	this.shape_47.setTransform(26.9,43.4,1.008,1.008,-90);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AnRkJYDLhfDtAQC8B4YC9B4ByDQAADgIqOAAg");
	this.shape_48.setTransform(26.9,40.9,1.008,1.008,-90);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Am3kfYDJhJDgAdCuB7YCvB7BpDHAADWIqOAAg");
	this.shape_49.setTransform(26.9,38.2,1.008,1.008,-90);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Al/k9YC+ghDDA0CUB9YCVB8BVC3AADCIqOAAg");
	this.shape_50.setTransform(26.9,32.6,1.008,1.008,-90);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AljlEYC3gQC0A+CIB8YCHB8BNCuAAC3IqOAAg");
	this.shape_51.setTransform(26.9,29.8,1.008,1.008,-90);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AlHlHYFpAAEmEmAAFoIqOABg");
	this.shape_52.setTransform(26.9,26.9,1.008,1.008,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).wait(1));

	// Layer 1
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#25D951","#0096D8"],[0,1],-10.6,18.3,11.6,-29.3).s().p("AmnGoQiviwAAj4QAAiEA4h4QA4h4BlhWIA6BFQhWBIgwBnQgvBmgBBwQAADTCWCVQCWCWDRAAQDSAACWiWQCWiVAAjTQAAjSiWiWQiWiVjSAAIAAhaQD4AACvCwQCwCwAAD3QAAD4iwCwQivCwj4AAQj3AAiwiwg");
	this.shape_53.setTransform(59.9,60);

	this.timeline.addTween(cjs.Tween.get(this.shape_53).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-6.1,132,132);


(lib.as = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.parent.i = 1;
		this.parent.g.play();
		this.parent.n.play();
	}
	this.frame_2 = function() {
		this.stop();
		this.parent.i = 2;
		this.parent.g.play();
		this.parent.n.play();
	}
	this.frame_3 = function() {
		this.stop();
		this.parent.i = 3;
		this.parent.g.play();
		this.parent.n.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.increase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var i = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// as
	this.as = new lib.as();
	this.as.parent = this;
	this.as.setTransform(10.6,10.1);

	this.timeline.addTween(cjs.Tween.get(this.as).wait(1));

	// n
	this.n = new lib.numbers();
	this.n.parent = this;
	this.n.setTransform(99.6,77.8,1,1,0,0,0,20.5,11.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#25D951","#0096D8"],[0,1],-10.6,18.4,11.6,-29.2).s().p("AAuMbQBJgFBMgSIABAEQhKAThLAFgAjWMEIACgFQBHAUBMAGIAAAFQhMgGhJgUgAEtLhQBEgcBCgrIADAEQhCArhFAcgAnFKUIADgEQBBAtBDAcIgBAFQhIggg+gqgAnsHuQjNjMAAkhQAAkgDNjNQBhhhB8g1QCCg3CNAAQEhAADMDNQBhBhA1B9QA3CCAACNQAAEhjNDMQjNDNkgAAQkfAAjNjNgAnpnpQjLDMAAEeQAAEeDLDMQBgBgB8A1QCBA2CMAAQEeAADMjLQDLjMAAkeQAAiMg3iBQg0h9hghgQjMjLkeAAQkdAAjMDLgAncHeQjFjGgBkXQABkXDFjGQDGjGEWAAQEXAADGDGQDGDGgBEXQABEXjGDGQjGDGkXAAQkWAAjGjGgAnYnYQjEDEAAEVQAAEVDEDEQDEDFEUAAQEUAADFjFQDFjEAAkVQAAkVjFjEQjEjFkVAAQkUAAjEDFgAIMJXQA5gyAug8IAEADQgvA9g5AygAqCHcIAEgDQAtA+A4AzIgDAEQg3gzgvg/gAKxGMQAnhDAYhHIAEACQgYBIgmBDgAr5DyIAEgBQAYBLAjBAIgEACQglhDgWhJgAMMCXQAPhLAAhLIAAgBIAEAAIABABQAABMgOBLgAsfABIABgTIAEABIAAASQAABAALBDIgFABQgLhEAAhAgAjBA7QgZggAAgwQAAgxAZghQAbgjAvAAQAxAAAbAjQAZAgAAAyQAAAwgZAgQgbAkgxAAQgvAAgbgkgAiWgVQAAA3AfAAQAgAAAAg3QAAg4ggAAQgfAAAAA4gAmhBbIAAg2QBNg1ARgQQATgPgBgNQABgIgIgFQgHgEgMAAQgfAAgcAXIglgtQASgUAbgKQAYgJAaAAQAsAAAaAWQAbAWgBAiQAAAYgPAUQgQAVgoAaIBJAAIAAA8gALwkCIAEgCQAZBHALBNIgFABQgMhPgXhEgAsUiBQAMhNAbhGIAFABQgbBJgMBKgAJynoIAEgDQAvA8AjBEIgEACQgjhDgvg8gAq/l7QAlhDAwg7IADADQgvA6gkBEgAGyqZIACgEQA/AoA4A2IgDAEQg1gzhBgrgAoepLQA6g1BAgnIADAEQhAAng5A1gADCsCIABgFQBKATBFAgIgCAEQhFgfhJgTgAlBrbQBFgfBLgRIABAFQhKAQhFAfgAhCsXIAAgFQBLgGBMAHIgBAFQhMgHhKAGg");
	this.shape.setTransform(80,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.n}]}).wait(1));

	// g
	this.g = new lib.graph();
	this.g.parent = this;
	this.g.setTransform(80,80.1,1,1,0,0,0,59.9,60);

	this.timeline.addTween(cjs.Tween.get(this.g).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,80,160,160);
// library properties:
lib.properties = {
	width: 160,
	height: 160,
	fps: 15,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(increase = increase||{}, img_increase = img_increase||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var increase, img_increase, createjs, ss, AdobeAn;