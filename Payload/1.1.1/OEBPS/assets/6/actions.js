pubcoder.projectID = pubcoder.projectID || "73994C6C4A856E4C80FC69F1456DD34F";
pubcoder.project.id = pubcoder.project.id || "73994C6C4A856E4C80FC69F1456DD34F";
pubcoder.project.title = pubcoder.project.title || "G5 Science";
pubcoder.page.id = pubcoder.page.id || 669;
pubcoder.page.title = pubcoder.page.title || "6";
pubcoder.page.number = pubcoder.page.number || 6;
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
	
var drawerObj729 = new Drawer('obj729', {
	backgroundColor: "rgba(255,255,255,0.8431373)",
	autosave: true,
	annotationMode: false,
	eraseDialogMessage: "Are you sure to erase your drawing?",
	eraseButtonLabel: "Erase",
	eraseCancelLabel: "Cancel",
	noteDeletionMessage: "Are you sure to delete this note?",
	noteDeletionDeleteButtonLabel: "Delete",
	noteDeletionCancelButtonLabel: "Cancel"
});
    
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
	
(function (){
	const objId = "obj727";

	const config = {
		appdata: {
			checksum: "2390904FBFF7BD4F53CA44D922FC7905",
			assessmentID: "fillInTheGaps727",
			assessmentCategory: ""
		},
		options: {
			displayCorrectAlongTheWay: true
		}
	};
	
	var controller = new SCFillInTheGaps(objId, config);
	pubcoder.controllers.SCFillInTheGaps = pubcoder.controllers.SCFillInTheGaps || {};
	pubcoder.controllers.SCFillInTheGaps[objId] = controller;
	pubcoder.controllers.all[objId] = controller;

})();

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
		
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		




























































































































































































































































































































































































































































































		
		
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
	
$("#obj678").trigger('SCEventShow');
$("#obj676").trigger('SCEventShow');
$("#obj695").trigger('SCEventShow');
$("#obj682").trigger('SCEventShow');
$("#obj680").trigger('SCEventShow');
$("#obj715").trigger('SCEventShow');
$("#obj719").trigger('SCEventShow');
$("#obj717").trigger('SCEventShow');
$("#obj725").trigger('SCEventShow');
$("#obj727").trigger('SCEventShow');
$("#obj729").trigger('SCEventShow');
$("#obj747").trigger('SCEventShow');
$("#obj749").trigger('SCEventShow');
$("#obj753").trigger('SCEventShow');
$("#obj769").trigger('SCEventShow');
$("#obj759").trigger('SCEventShow');
$("#obj773").trigger('SCEventShow');
$("#obj771").trigger('SCEventShow');
$("#obj765").trigger('SCEventShow');
$("#obj757").trigger('SCEventShow');
$("#obj763").trigger('SCEventShow');
$("#obj755").trigger('SCEventShow');
$("#obj767").trigger('SCEventShow');
$("#obj761").trigger('SCEventShow');
$("#obj751").trigger('SCEventShow');
	

});