pubcoder.projectID = pubcoder.projectID || "73994C6C4A856E4C80FC69F1456DD34F";
pubcoder.project.id = pubcoder.project.id || "73994C6C4A856E4C80FC69F1456DD34F";
pubcoder.project.title = pubcoder.project.title || "G5 Science";
pubcoder.page.id = pubcoder.page.id || 538;
pubcoder.page.title = pubcoder.page.title || "5";
pubcoder.page.number = pubcoder.page.number || 5;
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
var obj1268_onTap_activeActionGroupIndex = -1;
var obj1268_onTap_runningActionsCount = 0;
var obj1268_onTap_loopCount = 0;
var obj1274_onTap_activeActionGroupIndex = -1;
var obj1274_onTap_runningActionsCount = 0;
var obj1274_onTap_loopCount = 0;

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
		
obj1268_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1268_onTap_activeActionGroupIndex = -1;
		$("#obj1268").trigger("obj1268_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1268) {
				console.warn("de-queueing event obj1268." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1268").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1268_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1268 
hide_1270();
function hide_1270() {
	var selector = "#obj1268";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1268_onTap_runningActionsCount = obj1268_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1268_onTap_runningActionsCount = window.obj1268_onTap_runningActionsCount - 1;

if (window.obj1268_onTap_runningActionsCount < 0) {
	window.obj1268_onTap_runningActionsCount = 0;
} else if (window.obj1268_onTap_runningActionsCount == 0) {
	obj1268_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1270(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1268_onTap_runningActionsCount = window.obj1268_onTap_runningActionsCount - 1;

if (window.obj1268_onTap_runningActionsCount < 0) {
	window.obj1268_onTap_runningActionsCount = 0;
} else if (window.obj1268_onTap_runningActionsCount == 0) {
	obj1268_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj1263 
hide_1271();
function hide_1271() {
	var selector = "#obj1263";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1268_onTap_runningActionsCount = obj1268_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1268_onTap_runningActionsCount = window.obj1268_onTap_runningActionsCount - 1;

if (window.obj1268_onTap_runningActionsCount < 0) {
	window.obj1268_onTap_runningActionsCount = 0;
} else if (window.obj1268_onTap_runningActionsCount == 0) {
	obj1268_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1271(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1268_onTap_runningActionsCount = window.obj1268_onTap_runningActionsCount - 1;

if (window.obj1268_onTap_runningActionsCount < 0) {
	window.obj1268_onTap_runningActionsCount = 0;
} else if (window.obj1268_onTap_runningActionsCount == 0) {
	obj1268_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}










































};
obj1268_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1268_onTap_activeActionGroupIndex = -1;
		$("#obj1268").trigger("obj1268_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1268) {
				console.warn("de-queueing event obj1268." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1268").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1268_onTap_activeActionGroupIndex = 1;
	












































};
obj1274_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1274_onTap_activeActionGroupIndex = -1;
		$("#obj1274").trigger("obj1274_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1274) {
				console.warn("de-queueing event obj1274." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1274").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1274_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1263
(function(){
	window.obj1274_onTap_runningActionsCount = obj1274_onTap_runningActionsCount + 1;


	var selector = "#obj1263";
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
					window.obj1274_onTap_runningActionsCount = window.obj1274_onTap_runningActionsCount - 1;

if (window.obj1274_onTap_runningActionsCount < 0) {
	window.obj1274_onTap_runningActionsCount = 0;
} else if (window.obj1274_onTap_runningActionsCount == 0) {
	obj1274_onTap_actionGroup1();
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
				window.obj1274_onTap_runningActionsCount = window.obj1274_onTap_runningActionsCount - 1;

if (window.obj1274_onTap_runningActionsCount < 0) {
	window.obj1274_onTap_runningActionsCount = 0;
} else if (window.obj1274_onTap_runningActionsCount == 0) {
	obj1274_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj1268
(function(){
	window.obj1274_onTap_runningActionsCount = obj1274_onTap_runningActionsCount + 1;


	var selector = "#obj1268";
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
					window.obj1274_onTap_runningActionsCount = window.obj1274_onTap_runningActionsCount - 1;

if (window.obj1274_onTap_runningActionsCount < 0) {
	window.obj1274_onTap_runningActionsCount = 0;
} else if (window.obj1274_onTap_runningActionsCount == 0) {
	obj1274_onTap_actionGroup1();
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
				window.obj1274_onTap_runningActionsCount = window.obj1274_onTap_runningActionsCount - 1;

if (window.obj1274_onTap_runningActionsCount < 0) {
	window.obj1274_onTap_runningActionsCount = 0;
} else if (window.obj1274_onTap_runningActionsCount == 0) {
	obj1274_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









































};
obj1274_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1274_onTap_activeActionGroupIndex = -1;
		$("#obj1274").trigger("obj1274_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1274) {
				console.warn("de-queueing event obj1274." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1274").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1274_onTap_activeActionGroupIndex = 1;
	







//	action: playMovie
//	target: obj1263 
playMovie_1278();
function playMovie_1278() {
	window.obj1274_onTap_runningActionsCount = obj1274_onTap_runningActionsCount + 1;

	var myVideo = $("#obj1263")[0];
	var playFromBeginning = false;
	var waitForCompletion = true;
	var doFullscreen = false;
	if (playFromBeginning) myVideo.currentTime = 0;
	myVideo.play();
	try {
		if (doFullscreen) {
			function scheduleFullscreen(msec, tries) {
				if (typeof(tries) === "undefined") {
					tries = 1;
				} else if (tries > 5) return;

				var fn;
				if (myVideo.requestFullscreen) {
					console.warn("requestFullscreen;");
					fn = myVideo.requestFullscreen;
				} else if (myVideo.mozRequestFullScreen) {
					console.warn("mozRequestFullScreen;");
					fn = myVideo.mozRequestFullScreen;
				} else if (myVideo.webkitRequestFullscreen) {
					console.warn("webkitRequestFullscreen;");
					fn = myVideo.webkitRequestFullscreen;
				} else if (myVideo.msRequestFullscreen) {
					console.warn("msRequestFullscreen;");
					fn = myVideo.msRequestFullscreen;
				} else if (myVideo.webkitEnterFullscreen) {
					console.warn("webkitEnterFullscreen");
					fn = myVideo.webkitEnterFullscreen
				} else {
					console.warn("no fullscreen support");
					return;
				}
				if (fn == myVideo.webkitEnterFullscreen) {
					try {
						fn.call(myVideo);
					} catch (error) {
						scheduleFullscreen(1000, tries++);
					}
				} else {
					fn.call(myVideo).catch(function (err) { scheduleFullscreen(1000, tries++); });
				}
			}
			scheduleFullscreen(0);
		}
	} catch (error) {
		// do nothing, just don't go fullscreen
	}
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1274_onTap_runningActionsCount = window.obj1274_onTap_runningActionsCount - 1;

if (window.obj1274_onTap_runningActionsCount < 0) {
	window.obj1274_onTap_runningActionsCount = 0;
} else if (window.obj1274_onTap_runningActionsCount == 0) {
	obj1274_onTap_actionGroup2();
}
		};
		// myVideo.addEventListener('pause', actionEnded, false);
		myVideo.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1274_onTap_runningActionsCount = window.obj1274_onTap_runningActionsCount - 1;

if (window.obj1274_onTap_runningActionsCount < 0) {
	window.obj1274_onTap_runningActionsCount = 0;
} else if (window.obj1274_onTap_runningActionsCount == 0) {
	obj1274_onTap_actionGroup2();
}
	}
}




































};
obj1274_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1274_onTap_activeActionGroupIndex = -1;
		$("#obj1274").trigger("obj1274_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1274) {
				console.warn("de-queueing event obj1274." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1274").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1274_onTap_activeActionGroupIndex = 2;
	












































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





























































































































































/*
 *
 *   obj1268: Event Touch Down
 *
 */

$("#obj1268").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();

	if (window.obj1268_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1268_onTap is still running");
	return;
}
var obj1268_onTap_runningActionsCount = 0;
var obj1268_onTap_loopCount = 0;
obj1268_onTap_actionGroup0();
});











































































/*
 *
 *   obj1274: Event Touch Down
 *
 */

$("#obj1274").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();

	if (window.obj1274_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1274_onTap is still running");
	return;
}
var obj1274_onTap_runningActionsCount = 0;
var obj1274_onTap_loopCount = 0;
obj1274_onTap_actionGroup0();
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
	
$("#obj549").trigger('SCEventShow');
$("#obj547").trigger('SCEventShow');
$("#obj630").trigger('SCEventShow');
$("#obj553").trigger('SCEventShow');
$("#obj551").trigger('SCEventShow');
$("#obj1031").trigger('SCEventShow');
$("#obj653").trigger('SCEventShow');
$("#obj1033").trigger('SCEventShow');
$("#obj664").trigger('SCEventShow');
$("#obj632").trigger('SCEventShow');
$("#obj1274").trigger('SCEventShow');
$("#obj641").trigger('SCEventShow');
$("#obj639").trigger('SCEventShow');
$("#obj658").trigger('SCEventShow');
$("#obj559").trigger('SCEventShow');
$("#obj555").trigger('SCEventShow');
$("#obj557").trigger('SCEventShow');
$("#obj564").trigger('SCEventShow');
$("#obj562").trigger('SCEventShow');
$("#obj543").trigger('SCEventShow');
$("#obj541").trigger('SCEventShow');
	

});