pubcoder.projectID = pubcoder.projectID || "73994C6C4A856E4C80FC69F1456DD34F";
pubcoder.project.id = pubcoder.project.id || "73994C6C4A856E4C80FC69F1456DD34F";
pubcoder.project.title = pubcoder.project.title || "G5 Science";
pubcoder.page.id = pubcoder.page.id || 269;
pubcoder.page.title = pubcoder.page.title || "3";
pubcoder.page.number = pubcoder.page.number || 3;
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
	
$("#obj274").trigger('SCEventShow');
$("#obj272").trigger('SCEventShow');
$("#obj626").trigger('SCEventShow');
$("#obj278").trigger('SCEventShow');
$("#obj276").trigger('SCEventShow');
$("#obj381").trigger('SCEventShow');
$("#obj378").trigger('SCEventShow');
$("#obj418").trigger('SCEventShow');
$("#obj280").trigger('SCEventShow');
$("#obj319").trigger('SCEventShow');
$("#obj390").trigger('SCEventShow');
$("#obj304").trigger('SCEventShow');
$("#obj396").trigger('SCEventShow');
$("#obj394").trigger('SCEventShow');
$("#obj300").trigger('SCEventShow');
$("#obj302").trigger('SCEventShow');
$("#obj392").trigger('SCEventShow');
$("#obj414").trigger('SCEventShow');
$("#obj404").trigger('SCEventShow');
$("#obj409").trigger('SCEventShow');
$("#obj385").trigger('SCEventShow');
$("#obj402").trigger('SCEventShow');
$("#obj387").trigger('SCEventShow');
$("#obj398").trigger('SCEventShow');
$("#obj400").trigger('SCEventShow');
$("#obj416").trigger('SCEventShow');
	

});