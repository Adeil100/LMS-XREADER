pubcoder.projectID = pubcoder.projectID || "73994C6C4A856E4C80FC69F1456DD34F";
pubcoder.project.id = pubcoder.project.id || "73994C6C4A856E4C80FC69F1456DD34F";
pubcoder.project.title = pubcoder.project.title || "G5 Science";
pubcoder.page.id = pubcoder.page.id || 423;
pubcoder.page.title = pubcoder.page.title || "4";
pubcoder.page.number = pubcoder.page.number || 4;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;



/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj506_onTap_activeActionGroupIndex = -1;
var obj506_onTap_runningActionsCount = 0;
var obj506_onTap_loopCount = 0;
var obj504_onTap_activeActionGroupIndex = -1;
var obj504_onTap_runningActionsCount = 0;
var obj504_onTap_loopCount = 0;
var obj510_onTap_activeActionGroupIndex = -1;
var obj510_onTap_runningActionsCount = 0;
var obj510_onTap_loopCount = 0;
var obj508_onTap_activeActionGroupIndex = -1;
var obj508_onTap_runningActionsCount = 0;
var obj508_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 

 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	

	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 

 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	

 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	

 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	

	/*
	 * 
	 * Init SCCrosswords
	 * 
	 * 
	 */
	

	/*
	 * 
	 * Init SCFillInTheGaps
	 * 
	 * 
	 */
	

	/*
	 * 
	 * Init SCTrueFalse
	 * 
	 * 
	 */
	
	
	/*
	 * 
	 * Init SCMatchWordWithPicture
	 * 
	 * 
	 */
	
    
    

	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj506_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj506_onTap_activeActionGroupIndex = -1;
		$("#obj506").trigger("obj506_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 506) {
				console.warn("de-queueing event obj506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj506_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj514 
hide_527();
function hide_527() {
	var selector = "#obj514";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj506_onTap_runningActionsCount = obj506_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj506_onTap_runningActionsCount = window.obj506_onTap_runningActionsCount - 1;

if (window.obj506_onTap_runningActionsCount < 0) {
	window.obj506_onTap_runningActionsCount = 0;
} else if (window.obj506_onTap_runningActionsCount == 0) {
	obj506_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_527(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj506_onTap_runningActionsCount = window.obj506_onTap_runningActionsCount - 1;

if (window.obj506_onTap_runningActionsCount < 0) {
	window.obj506_onTap_runningActionsCount = 0;
} else if (window.obj506_onTap_runningActionsCount == 0) {
	obj506_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj518 
hide_528();
function hide_528() {
	var selector = "#obj518";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj506_onTap_runningActionsCount = obj506_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj506_onTap_runningActionsCount = window.obj506_onTap_runningActionsCount - 1;

if (window.obj506_onTap_runningActionsCount < 0) {
	window.obj506_onTap_runningActionsCount = 0;
} else if (window.obj506_onTap_runningActionsCount == 0) {
	obj506_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_528(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj506_onTap_runningActionsCount = window.obj506_onTap_runningActionsCount - 1;

if (window.obj506_onTap_runningActionsCount < 0) {
	window.obj506_onTap_runningActionsCount = 0;
} else if (window.obj506_onTap_runningActionsCount == 0) {
	obj506_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj520 
hide_529();
function hide_529() {
	var selector = "#obj520";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj506_onTap_runningActionsCount = obj506_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj506_onTap_runningActionsCount = window.obj506_onTap_runningActionsCount - 1;

if (window.obj506_onTap_runningActionsCount < 0) {
	window.obj506_onTap_runningActionsCount = 0;
} else if (window.obj506_onTap_runningActionsCount == 0) {
	obj506_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_529(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj506_onTap_runningActionsCount = window.obj506_onTap_runningActionsCount - 1;

if (window.obj506_onTap_runningActionsCount < 0) {
	window.obj506_onTap_runningActionsCount = 0;
} else if (window.obj506_onTap_runningActionsCount == 0) {
	obj506_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}










































};
obj506_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj506_onTap_activeActionGroupIndex = -1;
		$("#obj506").trigger("obj506_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 506) {
				console.warn("de-queueing event obj506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj506_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj516
(function(){
	window.obj506_onTap_runningActionsCount = obj506_onTap_runningActionsCount + 1;


	var selector = "#obj516";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj506_onTap_runningActionsCount = window.obj506_onTap_runningActionsCount - 1;

if (window.obj506_onTap_runningActionsCount < 0) {
	window.obj506_onTap_runningActionsCount = 0;
} else if (window.obj506_onTap_runningActionsCount == 0) {
	obj506_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj506_onTap_runningActionsCount = window.obj506_onTap_runningActionsCount - 1;

if (window.obj506_onTap_runningActionsCount < 0) {
	window.obj506_onTap_runningActionsCount = 0;
} else if (window.obj506_onTap_runningActionsCount == 0) {
	obj506_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









































};
obj506_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj506_onTap_activeActionGroupIndex = -1;
		$("#obj506").trigger("obj506_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 506) {
				console.warn("de-queueing event obj506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj506_onTap_activeActionGroupIndex = 2;
	












































};
obj504_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj504_onTap_activeActionGroupIndex = -1;
		$("#obj504").trigger("obj504_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 504) {
				console.warn("de-queueing event obj504." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj504").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj504_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj516 
hide_523();
function hide_523() {
	var selector = "#obj516";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj504_onTap_runningActionsCount = obj504_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj504_onTap_runningActionsCount = window.obj504_onTap_runningActionsCount - 1;

if (window.obj504_onTap_runningActionsCount < 0) {
	window.obj504_onTap_runningActionsCount = 0;
} else if (window.obj504_onTap_runningActionsCount == 0) {
	obj504_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_523(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj504_onTap_runningActionsCount = window.obj504_onTap_runningActionsCount - 1;

if (window.obj504_onTap_runningActionsCount < 0) {
	window.obj504_onTap_runningActionsCount = 0;
} else if (window.obj504_onTap_runningActionsCount == 0) {
	obj504_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj520 
hide_524();
function hide_524() {
	var selector = "#obj520";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj504_onTap_runningActionsCount = obj504_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj504_onTap_runningActionsCount = window.obj504_onTap_runningActionsCount - 1;

if (window.obj504_onTap_runningActionsCount < 0) {
	window.obj504_onTap_runningActionsCount = 0;
} else if (window.obj504_onTap_runningActionsCount == 0) {
	obj504_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_524(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj504_onTap_runningActionsCount = window.obj504_onTap_runningActionsCount - 1;

if (window.obj504_onTap_runningActionsCount < 0) {
	window.obj504_onTap_runningActionsCount = 0;
} else if (window.obj504_onTap_runningActionsCount == 0) {
	obj504_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj518 
hide_525();
function hide_525() {
	var selector = "#obj518";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj504_onTap_runningActionsCount = obj504_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj504_onTap_runningActionsCount = window.obj504_onTap_runningActionsCount - 1;

if (window.obj504_onTap_runningActionsCount < 0) {
	window.obj504_onTap_runningActionsCount = 0;
} else if (window.obj504_onTap_runningActionsCount == 0) {
	obj504_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_525(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj504_onTap_runningActionsCount = window.obj504_onTap_runningActionsCount - 1;

if (window.obj504_onTap_runningActionsCount < 0) {
	window.obj504_onTap_runningActionsCount = 0;
} else if (window.obj504_onTap_runningActionsCount == 0) {
	obj504_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}










































};
obj504_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj504_onTap_activeActionGroupIndex = -1;
		$("#obj504").trigger("obj504_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 504) {
				console.warn("de-queueing event obj504." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj504").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj504_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj514
(function(){
	window.obj504_onTap_runningActionsCount = obj504_onTap_runningActionsCount + 1;


	var selector = "#obj514";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj504_onTap_runningActionsCount = window.obj504_onTap_runningActionsCount - 1;

if (window.obj504_onTap_runningActionsCount < 0) {
	window.obj504_onTap_runningActionsCount = 0;
} else if (window.obj504_onTap_runningActionsCount == 0) {
	obj504_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj504_onTap_runningActionsCount = window.obj504_onTap_runningActionsCount - 1;

if (window.obj504_onTap_runningActionsCount < 0) {
	window.obj504_onTap_runningActionsCount = 0;
} else if (window.obj504_onTap_runningActionsCount == 0) {
	obj504_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









































};
obj504_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj504_onTap_activeActionGroupIndex = -1;
		$("#obj504").trigger("obj504_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 504) {
				console.warn("de-queueing event obj504." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj504").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj504_onTap_activeActionGroupIndex = 2;
	












































};
obj510_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj510_onTap_activeActionGroupIndex = -1;
		$("#obj510").trigger("obj510_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 510) {
				console.warn("de-queueing event obj510." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj510").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj510_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj514 
hide_534();
function hide_534() {
	var selector = "#obj514";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj510_onTap_runningActionsCount = obj510_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj510_onTap_runningActionsCount = window.obj510_onTap_runningActionsCount - 1;

if (window.obj510_onTap_runningActionsCount < 0) {
	window.obj510_onTap_runningActionsCount = 0;
} else if (window.obj510_onTap_runningActionsCount == 0) {
	obj510_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_534(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj510_onTap_runningActionsCount = window.obj510_onTap_runningActionsCount - 1;

if (window.obj510_onTap_runningActionsCount < 0) {
	window.obj510_onTap_runningActionsCount = 0;
} else if (window.obj510_onTap_runningActionsCount == 0) {
	obj510_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj518 
hide_535();
function hide_535() {
	var selector = "#obj518";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj510_onTap_runningActionsCount = obj510_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj510_onTap_runningActionsCount = window.obj510_onTap_runningActionsCount - 1;

if (window.obj510_onTap_runningActionsCount < 0) {
	window.obj510_onTap_runningActionsCount = 0;
} else if (window.obj510_onTap_runningActionsCount == 0) {
	obj510_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_535(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj510_onTap_runningActionsCount = window.obj510_onTap_runningActionsCount - 1;

if (window.obj510_onTap_runningActionsCount < 0) {
	window.obj510_onTap_runningActionsCount = 0;
} else if (window.obj510_onTap_runningActionsCount == 0) {
	obj510_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj516 
hide_536();
function hide_536() {
	var selector = "#obj516";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj510_onTap_runningActionsCount = obj510_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj510_onTap_runningActionsCount = window.obj510_onTap_runningActionsCount - 1;

if (window.obj510_onTap_runningActionsCount < 0) {
	window.obj510_onTap_runningActionsCount = 0;
} else if (window.obj510_onTap_runningActionsCount == 0) {
	obj510_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_536(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj510_onTap_runningActionsCount = window.obj510_onTap_runningActionsCount - 1;

if (window.obj510_onTap_runningActionsCount < 0) {
	window.obj510_onTap_runningActionsCount = 0;
} else if (window.obj510_onTap_runningActionsCount == 0) {
	obj510_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}










































};
obj510_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj510_onTap_activeActionGroupIndex = -1;
		$("#obj510").trigger("obj510_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 510) {
				console.warn("de-queueing event obj510." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj510").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj510_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj520
(function(){
	window.obj510_onTap_runningActionsCount = obj510_onTap_runningActionsCount + 1;


	var selector = "#obj520";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj510_onTap_runningActionsCount = window.obj510_onTap_runningActionsCount - 1;

if (window.obj510_onTap_runningActionsCount < 0) {
	window.obj510_onTap_runningActionsCount = 0;
} else if (window.obj510_onTap_runningActionsCount == 0) {
	obj510_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj510_onTap_runningActionsCount = window.obj510_onTap_runningActionsCount - 1;

if (window.obj510_onTap_runningActionsCount < 0) {
	window.obj510_onTap_runningActionsCount = 0;
} else if (window.obj510_onTap_runningActionsCount == 0) {
	obj510_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









































};
obj510_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj510_onTap_activeActionGroupIndex = -1;
		$("#obj510").trigger("obj510_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 510) {
				console.warn("de-queueing event obj510." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj510").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj510_onTap_activeActionGroupIndex = 2;
	












































};
obj508_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj508_onTap_activeActionGroupIndex = -1;
		$("#obj508").trigger("obj508_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 508) {
				console.warn("de-queueing event obj508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj508_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj514 
hide_531();
function hide_531() {
	var selector = "#obj514";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj508_onTap_runningActionsCount = obj508_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj508_onTap_runningActionsCount = window.obj508_onTap_runningActionsCount - 1;

if (window.obj508_onTap_runningActionsCount < 0) {
	window.obj508_onTap_runningActionsCount = 0;
} else if (window.obj508_onTap_runningActionsCount == 0) {
	obj508_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_531(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj508_onTap_runningActionsCount = window.obj508_onTap_runningActionsCount - 1;

if (window.obj508_onTap_runningActionsCount < 0) {
	window.obj508_onTap_runningActionsCount = 0;
} else if (window.obj508_onTap_runningActionsCount == 0) {
	obj508_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj516 
hide_532();
function hide_532() {
	var selector = "#obj516";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj508_onTap_runningActionsCount = obj508_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj508_onTap_runningActionsCount = window.obj508_onTap_runningActionsCount - 1;

if (window.obj508_onTap_runningActionsCount < 0) {
	window.obj508_onTap_runningActionsCount = 0;
} else if (window.obj508_onTap_runningActionsCount == 0) {
	obj508_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_532(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj508_onTap_runningActionsCount = window.obj508_onTap_runningActionsCount - 1;

if (window.obj508_onTap_runningActionsCount < 0) {
	window.obj508_onTap_runningActionsCount = 0;
} else if (window.obj508_onTap_runningActionsCount == 0) {
	obj508_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj520 
hide_533();
function hide_533() {
	var selector = "#obj520";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj508_onTap_runningActionsCount = obj508_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj508_onTap_runningActionsCount = window.obj508_onTap_runningActionsCount - 1;

if (window.obj508_onTap_runningActionsCount < 0) {
	window.obj508_onTap_runningActionsCount = 0;
} else if (window.obj508_onTap_runningActionsCount == 0) {
	obj508_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_533(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj508_onTap_runningActionsCount = window.obj508_onTap_runningActionsCount - 1;

if (window.obj508_onTap_runningActionsCount < 0) {
	window.obj508_onTap_runningActionsCount = 0;
} else if (window.obj508_onTap_runningActionsCount == 0) {
	obj508_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}










































};
obj508_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj508_onTap_activeActionGroupIndex = -1;
		$("#obj508").trigger("obj508_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 508) {
				console.warn("de-queueing event obj508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj508_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj518
(function(){
	window.obj508_onTap_runningActionsCount = obj508_onTap_runningActionsCount + 1;


	var selector = "#obj518";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj508_onTap_runningActionsCount = window.obj508_onTap_runningActionsCount - 1;

if (window.obj508_onTap_runningActionsCount < 0) {
	window.obj508_onTap_runningActionsCount = 0;
} else if (window.obj508_onTap_runningActionsCount == 0) {
	obj508_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj508_onTap_runningActionsCount = window.obj508_onTap_runningActionsCount - 1;

if (window.obj508_onTap_runningActionsCount < 0) {
	window.obj508_onTap_runningActionsCount = 0;
} else if (window.obj508_onTap_runningActionsCount == 0) {
	obj508_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









































};
obj508_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj508_onTap_activeActionGroupIndex = -1;
		$("#obj508").trigger("obj508_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 508) {
				console.warn("de-queueing event obj508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj508_onTap_activeActionGroupIndex = 2;
	












































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		









































































































































































































































/*
 *
 *   obj506: Event Touch Down
 *
 */

$("#obj506").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();

	if (window.obj506_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj506_onTap is still running");
	return;
}
var obj506_onTap_runningActionsCount = 0;
var obj506_onTap_loopCount = 0;
obj506_onTap_actionGroup0();
});
























































/*
 *
 *   obj504: Event Touch Down
 *
 */

$("#obj504").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();

	if (window.obj504_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj504_onTap is still running");
	return;
}
var obj504_onTap_runningActionsCount = 0;
var obj504_onTap_loopCount = 0;
obj504_onTap_actionGroup0();
});
























































/*
 *
 *   obj510: Event Touch Down
 *
 */

$("#obj510").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();

	if (window.obj510_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj510_onTap is still running");
	return;
}
var obj510_onTap_runningActionsCount = 0;
var obj510_onTap_loopCount = 0;
obj510_onTap_actionGroup0();
});


















/*
 *
 *   obj508: Event Touch Down
 *
 */

$("#obj508").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();

	if (window.obj508_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj508_onTap is still running");
	return;
}
var obj508_onTap_runningActionsCount = 0;
var obj508_onTap_loopCount = 0;
obj508_onTap_actionGroup0();
});











































































































































































































































































































		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});

$(window).on(pubcoder.events.pagePlay, function() {
	$(window).trigger(pubcoder.events.pageReady);
	if (pubcoder.isInteractionObserverSupported) {
		var ob = new IntersectionObserver(function(entries) {
			$(entries).each(function (index, entry) {
				if (entry.isIntersecting) {
					$(entry.target).trigger(pubcoder.events.appear);
				} else {
					$(entry.target).trigger(pubcoder.events.disappear);
				}
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
		$(".SCView").each(function (i, el) {
			ob.observe(el);
		});	
	}
	
$("#obj430").trigger('SCEventShow');
$("#obj428").trigger('SCEventShow');
$("#obj628").trigger('SCEventShow');
$("#obj434").trigger('SCEventShow');
$("#obj432").trigger('SCEventShow');
$("#obj502").trigger('SCEventShow');
$("#obj1028").trigger('SCEventShow');
$("#obj444").trigger('SCEventShow');
$("#obj469").trigger('SCEventShow');
$("#obj440").trigger('SCEventShow');
$("#obj442").trigger('SCEventShow');
$("#obj506").trigger('SCEventShow');
$("#obj453").trigger('SCEventShow');
$("#obj504").trigger('SCEventShow');
$("#obj451").trigger('SCEventShow');
$("#obj473").trigger('SCEventShow');
$("#obj510").trigger('SCEventShow');
$("#obj508").trigger('SCEventShow');
$("#obj471").trigger('SCEventShow');
$("#obj485").trigger('SCEventShow');
$("#obj467").trigger('SCEventShow');
$("#obj495").trigger('SCEventShow');
$("#obj499").trigger('SCEventShow');
$("#obj491").trigger('SCEventShow');
$("#obj463").trigger('SCEventShow');
$("#obj497").trigger('SCEventShow');
$("#obj489").trigger('SCEventShow');
$("#obj465").trigger('SCEventShow');
$("#obj493").trigger('SCEventShow');
$("#obj487").trigger('SCEventShow');
$("#obj461").trigger('SCEventShow');
	

});