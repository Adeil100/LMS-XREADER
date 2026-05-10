pubcoder.projectID = pubcoder.projectID || "73994C6C4A856E4C80FC69F1456DD34F";
pubcoder.project.id = pubcoder.project.id || "73994C6C4A856E4C80FC69F1456DD34F";
pubcoder.project.title = pubcoder.project.title || "G5 Science";
pubcoder.page.id = pubcoder.page.id || 41;
pubcoder.page.title = pubcoder.page.title || "2";
pubcoder.page.number = pubcoder.page.number || 2;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj95_animation_count = 0;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj95_onLoad_activeActionGroupIndex = -1;
var obj95_onLoad_runningActionsCount = 0;
var obj95_onLoad_loopCount = 0;
var obj158_onTap_activeActionGroupIndex = -1;
var obj158_onTap_runningActionsCount = 0;
var obj158_onTap_loopCount = 0;
var obj156_onTap_activeActionGroupIndex = -1;
var obj156_onTap_runningActionsCount = 0;
var obj156_onTap_loopCount = 0;
var obj217_onTap_activeActionGroupIndex = -1;
var obj217_onTap_runningActionsCount = 0;
var obj217_onTap_loopCount = 0;

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
	
initAnimation_95();
function initAnimation_95()
{
    var targetObjectId = 95;
    var widthSCAnimationObject = 399;
    var heightSCAnimationObject = 376;
    var framesPerSecond = 1;
    var howManyLoops = 50;
    var backToFirstFrame = true;
    var isAnimationInfinite = false;
    window.audio_animation_obj95 = $("#")[0];
    window.hasAudioTrack_obj95 = false
    initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj95_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
}

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
	
var scQuizObj206 = new SCQuiz('#obj206', {"assessmentID":"quiz206","autosave":false,"countdown":false,"enableReset":true,"mode":"ask-all","numberOfQuestionsToAsk":3,"perfectMessage":"Perfect!","quiz":[{"answers":[{"choice":"obj206_1_1_1","correct":true},{"choice":"obj206_1_1_2","correct":false},{"choice":"obj206_1_1_3","correct":false},{"choice":"obj206_1_1_4","correct":false}],"question":"obj206_1_1"},{"answers":[{"choice":"obj206_1_2_1","correct":false},{"choice":"obj206_1_2_2","correct":true},{"choice":"obj206_1_2_3","correct":false},{"choice":"obj206_1_2_4","correct":false}],"question":"obj206_1_2"},{"answers":[{"choice":"obj206_1_3_1","correct":false},{"choice":"obj206_1_3_2","correct":false},{"choice":"obj206_1_3_3","correct":true},{"choice":"obj206_1_3_4","correct":false}],"question":"obj206_1_3"}],"showMissed":true,"uncompletedMessage":"Missing Answers!"});
pubcoder.controllers.SCQuiz = pubcoder.controllers.SCQuiz || {};
pubcoder.controllers.SCQuiz["obj206"] = scQuizObj206;
pubcoder.controllers.all["obj206"] = scQuizObj206;

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
		
obj95_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj95_onLoad_activeActionGroupIndex = -1;
		$("#obj95").trigger("obj95_onLoad_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 95) {
				console.warn("de-queueing event obj95." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj95").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj95_onLoad_activeActionGroupIndex = 0;
	




//	action: playAnimation 
//	target: obj95 
playAnimation_121();
function playAnimation_121() {
	var targetObjectId = "#obj95";
	var targetObject = $(targetObjectId)[0];
	window.obj95_onLoad_runningActionsCount = obj95_onLoad_runningActionsCount + 1;

	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj95_onLoad_runningActionsCount = window.obj95_onLoad_runningActionsCount - 1;

if (window.obj95_onLoad_runningActionsCount < 0) {
	window.obj95_onLoad_runningActionsCount = 0;
} else if (window.obj95_onLoad_runningActionsCount == 0) {
	obj95_onLoad_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj95 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj95;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	var delayedStartAnimationFuction = function (delayMs) {
		setTimeout(function() {
			var animationObjectApi = window.api_animate_obj95;
			if (animationObjectApi == null || animationObjectApi.loading) {
				delayedStartAnimationFuction(100);
			} else {
				animationObjectApi.startAnimation();
			}
		}, delayMs);
	}
	delayedStartAnimationFuction(1);

	if (!isAnimationInfinite) {
		$("#obj95").one("obj95_animation_ended",function(event) {
		    window.obj95_onLoad_runningActionsCount = window.obj95_onLoad_runningActionsCount - 1;

if (window.obj95_onLoad_runningActionsCount < 0) {
	window.obj95_onLoad_runningActionsCount = 0;
} else if (window.obj95_onLoad_runningActionsCount == 0) {
	obj95_onLoad_actionGroup1();
}
		});
	}
 }







































};
obj95_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj95_onLoad_activeActionGroupIndex = -1;
		$("#obj95").trigger("obj95_onLoad_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 95) {
				console.warn("de-queueing event obj95." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj95").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj95_onLoad_activeActionGroupIndex = 1;
	












































};
obj158_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj158_onTap_activeActionGroupIndex = -1;
		$("#obj158").trigger("obj158_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 158) {
				console.warn("de-queueing event obj158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj158_onTap_activeActionGroupIndex = 0;
	









































//	action: runJqueryAnimation
//	target: obj206 
(function () {
	window.obj158_onTap_runningActionsCount = obj158_onTap_runningActionsCount + 1;


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

	
	$("#obj206").animate({ opacity: '1'}, 300, easing, function() {
		setTimeout(function() {
			window.obj158_onTap_runningActionsCount = window.obj158_onTap_runningActionsCount - 1;

if (window.obj158_onTap_runningActionsCount < 0) {
	window.obj158_onTap_runningActionsCount = 0;
} else if (window.obj158_onTap_runningActionsCount == 0) {
	obj158_onTap_actionGroup1();
}
		}, 1);
	});
})();


};
obj158_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj158_onTap_activeActionGroupIndex = -1;
		$("#obj158").trigger("obj158_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 158) {
				console.warn("de-queueing event obj158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj158_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj206
(function(){
	window.obj158_onTap_runningActionsCount = obj158_onTap_runningActionsCount + 1;


	var selector = "#obj206";
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
					window.obj158_onTap_runningActionsCount = window.obj158_onTap_runningActionsCount - 1;

if (window.obj158_onTap_runningActionsCount < 0) {
	window.obj158_onTap_runningActionsCount = 0;
} else if (window.obj158_onTap_runningActionsCount == 0) {
	obj158_onTap_actionGroup2();
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
				window.obj158_onTap_runningActionsCount = window.obj158_onTap_runningActionsCount - 1;

if (window.obj158_onTap_runningActionsCount < 0) {
	window.obj158_onTap_runningActionsCount = 0;
} else if (window.obj158_onTap_runningActionsCount == 0) {
	obj158_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj217
(function(){
	window.obj158_onTap_runningActionsCount = obj158_onTap_runningActionsCount + 1;


	var selector = "#obj217";
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
					window.obj158_onTap_runningActionsCount = window.obj158_onTap_runningActionsCount - 1;

if (window.obj158_onTap_runningActionsCount < 0) {
	window.obj158_onTap_runningActionsCount = 0;
} else if (window.obj158_onTap_runningActionsCount == 0) {
	obj158_onTap_actionGroup2();
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
				window.obj158_onTap_runningActionsCount = window.obj158_onTap_runningActionsCount - 1;

if (window.obj158_onTap_runningActionsCount < 0) {
	window.obj158_onTap_runningActionsCount = 0;
} else if (window.obj158_onTap_runningActionsCount == 0) {
	obj158_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









































};
obj158_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj158_onTap_activeActionGroupIndex = -1;
		$("#obj158").trigger("obj158_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 158) {
				console.warn("de-queueing event obj158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj158_onTap_activeActionGroupIndex = 2;
	












































};
obj156_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj156_onTap_activeActionGroupIndex = -1;
		$("#obj156").trigger("obj156_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 156) {
				console.warn("de-queueing event obj156." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj156").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj156_onTap_activeActionGroupIndex = 0;
	









































//	action: runJqueryAnimation
//	target: obj206 
(function () {
	window.obj156_onTap_runningActionsCount = obj156_onTap_runningActionsCount + 1;


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

	
	$("#obj206").animate({ opacity: '1'}, 300, easing, function() {
		setTimeout(function() {
			window.obj156_onTap_runningActionsCount = window.obj156_onTap_runningActionsCount - 1;

if (window.obj156_onTap_runningActionsCount < 0) {
	window.obj156_onTap_runningActionsCount = 0;
} else if (window.obj156_onTap_runningActionsCount == 0) {
	obj156_onTap_actionGroup1();
}
		}, 1);
	});
})();


};
obj156_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj156_onTap_activeActionGroupIndex = -1;
		$("#obj156").trigger("obj156_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 156) {
				console.warn("de-queueing event obj156." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj156").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj156_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj206
(function(){
	window.obj156_onTap_runningActionsCount = obj156_onTap_runningActionsCount + 1;


	var selector = "#obj206";
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
					window.obj156_onTap_runningActionsCount = window.obj156_onTap_runningActionsCount - 1;

if (window.obj156_onTap_runningActionsCount < 0) {
	window.obj156_onTap_runningActionsCount = 0;
} else if (window.obj156_onTap_runningActionsCount == 0) {
	obj156_onTap_actionGroup2();
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
				window.obj156_onTap_runningActionsCount = window.obj156_onTap_runningActionsCount - 1;

if (window.obj156_onTap_runningActionsCount < 0) {
	window.obj156_onTap_runningActionsCount = 0;
} else if (window.obj156_onTap_runningActionsCount == 0) {
	obj156_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj217
(function(){
	window.obj156_onTap_runningActionsCount = obj156_onTap_runningActionsCount + 1;


	var selector = "#obj217";
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
					window.obj156_onTap_runningActionsCount = window.obj156_onTap_runningActionsCount - 1;

if (window.obj156_onTap_runningActionsCount < 0) {
	window.obj156_onTap_runningActionsCount = 0;
} else if (window.obj156_onTap_runningActionsCount == 0) {
	obj156_onTap_actionGroup2();
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
				window.obj156_onTap_runningActionsCount = window.obj156_onTap_runningActionsCount - 1;

if (window.obj156_onTap_runningActionsCount < 0) {
	window.obj156_onTap_runningActionsCount = 0;
} else if (window.obj156_onTap_runningActionsCount == 0) {
	obj156_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









































};
obj156_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj156_onTap_activeActionGroupIndex = -1;
		$("#obj156").trigger("obj156_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 156) {
				console.warn("de-queueing event obj156." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj156").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj156_onTap_activeActionGroupIndex = 2;
	












































};
obj217_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj217_onTap_activeActionGroupIndex = -1;
		$("#obj217").trigger("obj217_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 217) {
				console.warn("de-queueing event obj217." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj217").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj217_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj217 
hide_220();
function hide_220() {
	var selector = "#obj217";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj217_onTap_runningActionsCount = obj217_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj217_onTap_runningActionsCount = window.obj217_onTap_runningActionsCount - 1;

if (window.obj217_onTap_runningActionsCount < 0) {
	window.obj217_onTap_runningActionsCount = 0;
} else if (window.obj217_onTap_runningActionsCount == 0) {
	obj217_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_220(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj217_onTap_runningActionsCount = window.obj217_onTap_runningActionsCount - 1;

if (window.obj217_onTap_runningActionsCount < 0) {
	window.obj217_onTap_runningActionsCount = 0;
} else if (window.obj217_onTap_runningActionsCount == 0) {
	obj217_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj206 
hide_221();
function hide_221() {
	var selector = "#obj206";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj217_onTap_runningActionsCount = obj217_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj217_onTap_runningActionsCount = window.obj217_onTap_runningActionsCount - 1;

if (window.obj217_onTap_runningActionsCount < 0) {
	window.obj217_onTap_runningActionsCount = 0;
} else if (window.obj217_onTap_runningActionsCount == 0) {
	obj217_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_221(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj217_onTap_runningActionsCount = window.obj217_onTap_runningActionsCount - 1;

if (window.obj217_onTap_runningActionsCount < 0) {
	window.obj217_onTap_runningActionsCount = 0;
} else if (window.obj217_onTap_runningActionsCount == 0) {
	obj217_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}










































};
obj217_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj217_onTap_activeActionGroupIndex = -1;
		$("#obj217").trigger("obj217_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 217) {
				console.warn("de-queueing event obj217." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj217").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj217_onTap_activeActionGroupIndex = 1;
	












































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		








































































































/*
 *
 *   obj95: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj95_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj95_onLoad is still running");
	return;
}
var obj95_onLoad_runningActionsCount = 0;
var obj95_onLoad_loopCount = 0;
obj95_onLoad_actionGroup0();
});

























































































































































































/*
 *
 *   obj158: Event Touch Down
 *
 */

$("#obj158").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();

	if (window.obj158_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj158_onTap is still running");
	return;
}
var obj158_onTap_runningActionsCount = 0;
var obj158_onTap_loopCount = 0;
obj158_onTap_actionGroup0();
});


















/*
 *
 *   obj156: Event Touch Down
 *
 */

$("#obj156").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();

	if (window.obj156_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj156_onTap is still running");
	return;
}
var obj156_onTap_runningActionsCount = 0;
var obj156_onTap_loopCount = 0;
obj156_onTap_actionGroup0();
});


















/*
 *
 *   obj217: Event Touch Down
 *
 */

$("#obj217").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();

	if (window.obj217_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj217_onTap is still running");
	return;
}
var obj217_onTap_runningActionsCount = 0;
var obj217_onTap_loopCount = 0;
obj217_onTap_actionGroup0();
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
	
$("#obj50").trigger('SCEventShow');
$("#obj54").trigger('SCEventShow');
$("#obj624").trigger('SCEventShow');
$("#obj52").trigger('SCEventShow');
$("#obj48").trigger('SCEventShow');
$("#obj95").trigger('SCEventShow');
$("#obj169").trigger('SCEventShow');
$("#obj151").trigger('SCEventShow');
$("#obj146").trigger('SCEventShow');
$("#obj148").trigger('SCEventShow');
$("#obj60").trigger('SCEventShow');
$("#obj58").trigger('SCEventShow');
$("#obj175").trigger('SCEventShow');
$("#obj173").trigger('SCEventShow');
$("#obj161").trigger('SCEventShow');
$("#obj158").trigger('SCEventShow');
$("#obj156").trigger('SCEventShow');
$("#obj206").trigger('SCEventShow');
$("#obj171").trigger('SCEventShow');
$("#obj196").trigger('SCEventShow');
$("#obj264").trigger('SCEventShow');
$("#obj261").trigger('SCEventShow');
$("#obj259").trigger('SCEventShow');
$("#obj257").trigger('SCEventShow');
$("#obj421").trigger('SCEventShow');
$("#obj182").trigger('SCEventShow');
$("#obj193").trigger('SCEventShow');
$("#obj190").trigger('SCEventShow');
$("#obj179").trigger('SCEventShow');
$("#obj188").trigger('SCEventShow');
$("#obj177").trigger('SCEventShow');
$("#obj186").trigger('SCEventShow');
$("#obj184").trigger('SCEventShow');
	

});