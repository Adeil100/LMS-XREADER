pubcoder.projectID = pubcoder.projectID || "73994C6C4A856E4C80FC69F1456DD34F";
pubcoder.project.id = pubcoder.project.id || "73994C6C4A856E4C80FC69F1456DD34F";
pubcoder.project.title = pubcoder.project.title || "G5 Science";
pubcoder.page.id = pubcoder.page.id || 3;
pubcoder.page.title = pubcoder.page.title || "1";
pubcoder.page.number = pubcoder.page.number || 1;
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
var obj20_onTap_activeActionGroupIndex = -1;
var obj20_onTap_runningActionsCount = 0;
var obj20_onTap_loopCount = 0;

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
		
obj20_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj20_onTap_activeActionGroupIndex = -1;
		$("#obj20").trigger("obj20_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20) {
				console.warn("de-queueing event obj20." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj20 
move_34();
function move_34() {
	window.obj20_onTap_runningActionsCount = obj20_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj20");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-20";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj20_onTap_runningActionsCount = window.obj20_onTap_runningActionsCount - 1;

if (window.obj20_onTap_runningActionsCount < 0) {
	window.obj20_onTap_runningActionsCount = 0;
} else if (window.obj20_onTap_runningActionsCount == 0) {
	obj20_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj24 
move_35();
function move_35() {
	window.obj20_onTap_runningActionsCount = obj20_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj24");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-20";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj20_onTap_runningActionsCount = window.obj20_onTap_runningActionsCount - 1;

if (window.obj20_onTap_runningActionsCount < 0) {
	window.obj20_onTap_runningActionsCount = 0;
} else if (window.obj20_onTap_runningActionsCount == 0) {
	obj20_onTap_actionGroup1();
}
		}, 1);
	});
}




















//	action: playAudio
//	target: obj31 
playAudio_33();
function playAudio_33() {
	window.obj20_onTap_runningActionsCount = obj20_onTap_runningActionsCount + 1;

	var myAudio = $("#obj31")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj20_onTap_runningActionsCount = window.obj20_onTap_runningActionsCount - 1;

if (window.obj20_onTap_runningActionsCount < 0) {
	window.obj20_onTap_runningActionsCount = 0;
} else if (window.obj20_onTap_runningActionsCount == 0) {
	obj20_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj20_onTap_runningActionsCount = window.obj20_onTap_runningActionsCount - 1;

if (window.obj20_onTap_runningActionsCount < 0) {
	window.obj20_onTap_runningActionsCount = 0;
} else if (window.obj20_onTap_runningActionsCount == 0) {
	obj20_onTap_actionGroup1();
}
	}
}



















};
obj20_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj20_onTap_activeActionGroupIndex = -1;
		$("#obj20").trigger("obj20_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20) {
				console.warn("de-queueing event obj20." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20_onTap_activeActionGroupIndex = 1;
	












































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





























































































































































/*
 *
 *   obj20: Event Touch Down
 *
 */

$("#obj20").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();

	if (window.obj20_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj20_onTap is still running");
	return;
}
var obj20_onTap_runningActionsCount = 0;
var obj20_onTap_loopCount = 0;
obj20_onTap_actionGroup0();
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
	
$("#obj44").trigger('SCEventShow');
$("#obj10").trigger('SCEventShow');
$("#obj622").trigger('SCEventShow');
$("#obj56").trigger('SCEventShow');
$("#obj27").trigger('SCEventShow');
$("#obj29").trigger('SCEventShow');
$("#obj22").trigger('SCEventShow');
$("#obj13").trigger('SCEventShow');
$("#obj20").trigger('SCEventShow');
$("#obj31").trigger('SCEventShow');
$("#obj24").trigger('SCEventShow');
	

});