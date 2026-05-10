pubcoder.projectID = pubcoder.projectID || "73994C6C4A856E4C80FC69F1456DD34F";
pubcoder.project.id = pubcoder.project.id || "73994C6C4A856E4C80FC69F1456DD34F";
pubcoder.project.title = pubcoder.project.title || "G5 Science";
pubcoder.page.id = pubcoder.page.id || 888;
pubcoder.page.title = pubcoder.page.title || "8";
pubcoder.page.number = pubcoder.page.number || 8;
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
var obj978_onTap_activeActionGroupIndex = -1;
var obj978_onTap_runningActionsCount = 0;
var obj978_onTap_loopCount = 0;
var obj973_onTap_activeActionGroupIndex = -1;
var obj973_onTap_runningActionsCount = 0;
var obj973_onTap_loopCount = 0;
var obj965_onTap_activeActionGroupIndex = -1;
var obj965_onTap_runningActionsCount = 0;
var obj965_onTap_loopCount = 0;

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
	
var scQuizObj985 = new SCQuiz('#obj985', {"assessmentID":"quiz985","autosave":false,"countdown":false,"enableReset":true,"mode":"ask-all","numberOfQuestionsToAsk":4,"perfectMessage":"Perfect!","quiz":[{"answers":[{"choice":"obj985_1_1_1","correct":false},{"choice":"obj985_1_1_2","correct":true},{"choice":"obj985_1_1_3","correct":false}],"question":"obj985_1_1"},{"answers":[{"choice":"obj985_1_2_1","correct":true},{"choice":"obj985_1_2_2","correct":false},{"choice":"obj985_1_2_3","correct":false}],"question":"obj985_1_2"},{"answers":[{"choice":"obj985_1_3_1","correct":false},{"choice":"obj985_1_3_2","correct":true},{"choice":"obj985_1_3_3","correct":false}],"question":"obj985_1_3"},{"answers":[{"choice":"obj985_1_4_1","correct":false},{"choice":"obj985_1_4_2","correct":false},{"choice":"obj985_1_4_3","correct":true}],"question":"obj985_1_4"}],"showMissed":true,"uncompletedMessage":"Missing Answers!"});
pubcoder.controllers.SCQuiz = pubcoder.controllers.SCQuiz || {};
pubcoder.controllers.SCQuiz["obj985"] = scQuizObj985;
pubcoder.controllers.all["obj985"] = scQuizObj985;

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
		
obj978_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj978_onTap_activeActionGroupIndex = -1;
		$("#obj978").trigger("obj978_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 978) {
				console.warn("de-queueing event obj978." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj978").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj978_onTap_activeActionGroupIndex = 0;
	









































//	action: runJqueryAnimation
//	target: obj985 
(function () {
	window.obj978_onTap_runningActionsCount = obj978_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	
	$("#obj985").animate({ opacity: '1'}, 300, easing, function() {
		setTimeout(function() {
			window.obj978_onTap_runningActionsCount = window.obj978_onTap_runningActionsCount - 1;

if (window.obj978_onTap_runningActionsCount < 0) {
	window.obj978_onTap_runningActionsCount = 0;
} else if (window.obj978_onTap_runningActionsCount == 0) {
	obj978_onTap_actionGroup1();
}
		}, 1);
	});
})();


};
obj978_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj978_onTap_activeActionGroupIndex = -1;
		$("#obj978").trigger("obj978_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 978) {
				console.warn("de-queueing event obj978." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj978").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj978_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj985
(function(){
	window.obj978_onTap_runningActionsCount = obj978_onTap_runningActionsCount + 1;


	var selector = "#obj985";
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
					window.obj978_onTap_runningActionsCount = window.obj978_onTap_runningActionsCount - 1;

if (window.obj978_onTap_runningActionsCount < 0) {
	window.obj978_onTap_runningActionsCount = 0;
} else if (window.obj978_onTap_runningActionsCount == 0) {
	obj978_onTap_actionGroup2();
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
				window.obj978_onTap_runningActionsCount = window.obj978_onTap_runningActionsCount - 1;

if (window.obj978_onTap_runningActionsCount < 0) {
	window.obj978_onTap_runningActionsCount = 0;
} else if (window.obj978_onTap_runningActionsCount == 0) {
	obj978_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj965
(function(){
	window.obj978_onTap_runningActionsCount = obj978_onTap_runningActionsCount + 1;


	var selector = "#obj965";
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
					window.obj978_onTap_runningActionsCount = window.obj978_onTap_runningActionsCount - 1;

if (window.obj978_onTap_runningActionsCount < 0) {
	window.obj978_onTap_runningActionsCount = 0;
} else if (window.obj978_onTap_runningActionsCount == 0) {
	obj978_onTap_actionGroup2();
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
				window.obj978_onTap_runningActionsCount = window.obj978_onTap_runningActionsCount - 1;

if (window.obj978_onTap_runningActionsCount < 0) {
	window.obj978_onTap_runningActionsCount = 0;
} else if (window.obj978_onTap_runningActionsCount == 0) {
	obj978_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









































};
obj978_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj978_onTap_activeActionGroupIndex = -1;
		$("#obj978").trigger("obj978_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 978) {
				console.warn("de-queueing event obj978." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj978").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj978_onTap_activeActionGroupIndex = 2;
	












































};
obj973_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj973_onTap_activeActionGroupIndex = -1;
		$("#obj973").trigger("obj973_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 973) {
				console.warn("de-queueing event obj973." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj973").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj973_onTap_activeActionGroupIndex = 0;
	









































//	action: runJqueryAnimation
//	target: obj985 
(function () {
	window.obj973_onTap_runningActionsCount = obj973_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	
	$("#obj985").animate({ opacity: '1'}, 300, easing, function() {
		setTimeout(function() {
			window.obj973_onTap_runningActionsCount = window.obj973_onTap_runningActionsCount - 1;

if (window.obj973_onTap_runningActionsCount < 0) {
	window.obj973_onTap_runningActionsCount = 0;
} else if (window.obj973_onTap_runningActionsCount == 0) {
	obj973_onTap_actionGroup1();
}
		}, 1);
	});
})();


};
obj973_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj973_onTap_activeActionGroupIndex = -1;
		$("#obj973").trigger("obj973_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 973) {
				console.warn("de-queueing event obj973." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj973").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj973_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj985
(function(){
	window.obj973_onTap_runningActionsCount = obj973_onTap_runningActionsCount + 1;


	var selector = "#obj985";
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
					window.obj973_onTap_runningActionsCount = window.obj973_onTap_runningActionsCount - 1;

if (window.obj973_onTap_runningActionsCount < 0) {
	window.obj973_onTap_runningActionsCount = 0;
} else if (window.obj973_onTap_runningActionsCount == 0) {
	obj973_onTap_actionGroup2();
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
				window.obj973_onTap_runningActionsCount = window.obj973_onTap_runningActionsCount - 1;

if (window.obj973_onTap_runningActionsCount < 0) {
	window.obj973_onTap_runningActionsCount = 0;
} else if (window.obj973_onTap_runningActionsCount == 0) {
	obj973_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj965
(function(){
	window.obj973_onTap_runningActionsCount = obj973_onTap_runningActionsCount + 1;


	var selector = "#obj965";
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
					window.obj973_onTap_runningActionsCount = window.obj973_onTap_runningActionsCount - 1;

if (window.obj973_onTap_runningActionsCount < 0) {
	window.obj973_onTap_runningActionsCount = 0;
} else if (window.obj973_onTap_runningActionsCount == 0) {
	obj973_onTap_actionGroup2();
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
				window.obj973_onTap_runningActionsCount = window.obj973_onTap_runningActionsCount - 1;

if (window.obj973_onTap_runningActionsCount < 0) {
	window.obj973_onTap_runningActionsCount = 0;
} else if (window.obj973_onTap_runningActionsCount == 0) {
	obj973_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









































};
obj973_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj973_onTap_activeActionGroupIndex = -1;
		$("#obj973").trigger("obj973_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 973) {
				console.warn("de-queueing event obj973." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj973").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj973_onTap_activeActionGroupIndex = 2;
	












































};
obj965_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj965_onTap_activeActionGroupIndex = -1;
		$("#obj965").trigger("obj965_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 965) {
				console.warn("de-queueing event obj965." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj965").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj965_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj965 
hide_967();
function hide_967() {
	var selector = "#obj965";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj965_onTap_runningActionsCount = obj965_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj965_onTap_runningActionsCount = window.obj965_onTap_runningActionsCount - 1;

if (window.obj965_onTap_runningActionsCount < 0) {
	window.obj965_onTap_runningActionsCount = 0;
} else if (window.obj965_onTap_runningActionsCount == 0) {
	obj965_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_967(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj965_onTap_runningActionsCount = window.obj965_onTap_runningActionsCount - 1;

if (window.obj965_onTap_runningActionsCount < 0) {
	window.obj965_onTap_runningActionsCount = 0;
} else if (window.obj965_onTap_runningActionsCount == 0) {
	obj965_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj985 
hide_968();
function hide_968() {
	var selector = "#obj985";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj965_onTap_runningActionsCount = obj965_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj965_onTap_runningActionsCount = window.obj965_onTap_runningActionsCount - 1;

if (window.obj965_onTap_runningActionsCount < 0) {
	window.obj965_onTap_runningActionsCount = 0;
} else if (window.obj965_onTap_runningActionsCount == 0) {
	obj965_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_968(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj965_onTap_runningActionsCount = window.obj965_onTap_runningActionsCount - 1;

if (window.obj965_onTap_runningActionsCount < 0) {
	window.obj965_onTap_runningActionsCount = 0;
} else if (window.obj965_onTap_runningActionsCount == 0) {
	obj965_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}










































};
obj965_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj965_onTap_activeActionGroupIndex = -1;
		$("#obj965").trigger("obj965_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 965) {
				console.warn("de-queueing event obj965." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj965").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj965_onTap_activeActionGroupIndex = 1;
	












































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






































































































































































































































































































































































































































































































































/*
 *
 *   obj978: Event Touch Down
 *
 */

$("#obj978").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();

	if (window.obj978_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj978_onTap is still running");
	return;
}
var obj978_onTap_runningActionsCount = 0;
var obj978_onTap_loopCount = 0;
obj978_onTap_actionGroup0();
});


















/*
 *
 *   obj973: Event Touch Down
 *
 */

$("#obj973").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();

	if (window.obj973_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj973_onTap is still running");
	return;
}
var obj973_onTap_runningActionsCount = 0;
var obj973_onTap_loopCount = 0;
obj973_onTap_actionGroup0();
});


















/*
 *
 *   obj965: Event Touch Down
 *
 */

$("#obj965").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();

	if (window.obj965_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj965_onTap is still running");
	return;
}
var obj965_onTap_runningActionsCount = 0;
var obj965_onTap_loopCount = 0;
obj965_onTap_actionGroup0();
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
	
$("#obj915").trigger('SCEventShow');
$("#obj913").trigger('SCEventShow');
$("#obj921").trigger('SCEventShow');
$("#obj919").trigger('SCEventShow');
$("#obj917").trigger('SCEventShow');
$("#obj933").trigger('SCEventShow');
$("#obj936").trigger('SCEventShow');
$("#obj929").trigger('SCEventShow');
$("#obj931").trigger('SCEventShow');
$("#obj938").trigger('SCEventShow');
$("#obj909").trigger('SCEventShow');
$("#obj963").trigger('SCEventShow');
$("#obj907").trigger('SCEventShow');
$("#obj905").trigger('SCEventShow');
$("#obj903").trigger('SCEventShow');
$("#obj901").trigger('SCEventShow');
$("#obj899").trigger('SCEventShow');
$("#obj897").trigger('SCEventShow');
$("#obj895").trigger('SCEventShow');
$("#obj893").trigger('SCEventShow');
$("#obj891").trigger('SCEventShow');
$("#obj961").trigger('SCEventShow');
$("#obj959").trigger('SCEventShow');
$("#obj957").trigger('SCEventShow');
$("#obj955").trigger('SCEventShow');
$("#obj953").trigger('SCEventShow');
$("#obj971").trigger('SCEventShow');
$("#obj978").trigger('SCEventShow');
$("#obj973").trigger('SCEventShow');
$("#obj1013").trigger('SCEventShow');
$("#obj985").trigger('SCEventShow');
$("#obj1003").trigger('SCEventShow');
$("#obj1021").trigger('SCEventShow');
$("#obj1009").trigger('SCEventShow');
$("#obj1025").trigger('SCEventShow');
$("#obj1017").trigger('SCEventShow');
$("#obj1007").trigger('SCEventShow');
$("#obj1023").trigger('SCEventShow');
$("#obj1015").trigger('SCEventShow');
$("#obj1005").trigger('SCEventShow');
$("#obj1019").trigger('SCEventShow');
$("#obj1011").trigger('SCEventShow');
	

});