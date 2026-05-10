pubcoder.projectID = pubcoder.projectID || "73994C6C4A856E4C80FC69F1456DD34F";
pubcoder.project.id = pubcoder.project.id || "73994C6C4A856E4C80FC69F1456DD34F";
pubcoder.project.title = pubcoder.project.title || "G5 Science";
pubcoder.page.id = pubcoder.page.id || 1035;
pubcoder.page.title = pubcoder.page.title || "9";
pubcoder.page.number = pubcoder.page.number || 9;
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
	
(function (){
	const objId = "obj1165";

	const config = {
		appdata: {
			statements: [
    {
        "index": "0",
        "text": "تبدو الشمس وكأنها تتحرك في السماء لأن الشمس هي التي تدور حول الأرض.",
        "isTrue": false
    },
    {
        "index": "1",
        "text": "تدور الأرض حول محورها من الغرب إلى الشرق.",
        "isTrue": true
    },
    {
        "index": "2",
        "text": "تستغرق الأرض سنة كاملة لتكمل دورة واحدة حول محورها.",
        "isTrue": false
    },
    {
        "index": "3",
        "text": "ينتج تعاقب الليل والنهار بسبب دوران الأرض حول نفسها.",
        "isTrue": true
    },
    {
        "index": "4",
        "text": "يمكن للمصباح (الشمس) أن يضيء الكرة الأرضية بالكامل في وقت واحد.",
        "isTrue": false
    },
    {
        "index": "5",
        "text": "ميل محور الأرض ودورانها حول الشمس هما السببان في حدوث فصول السنة.",
        "isTrue": true
    },
    {
        "index": "6",
        "text": "يكون طول النهار ثابتاً (لا يتغير) في جميع أيام السنة.",
        "isTrue": false
    },
    {
        "index": "7",
        "text": "تشرق الشمس دائماً من جهة الشرق وتغرب من جهة الغرب.",
        "isTrue": true
    },
    {
        "index": "8",
        "text": "عندما يكون الوقت صباحاً في سلطنة عُمان، يكون الوقت صباحاً أيضاً في كندا.",
        "isTrue": false
    },
    {
        "index": "9",
        "text": "الحركة التي تظهرونها عند \"السير حول الشمس\" في النشاط تسمى الدوران في مدار.",
        "isTrue": true
    }
]
,
			checksum: "BF6B06C790517B2BA8A172F60D3048C0",
			assessmentID: "truefalse1165",
			assessmentCategory: ""
		},
		options: {
			randomStatementsToDisplay: 0,
			labelTrue: "صح",
			labelFalse: "خطأ",
            revealCorrectAnswers: true,
		}
	};
	
	var controller = new SCTrueFalse(objId, config);
	pubcoder.controllers.SCTrueFalse = pubcoder.controllers.SCTrueFalse || {};
	pubcoder.controllers.SCTrueFalse[objId] = controller;
	pubcoder.controllers.all[objId] = controller;
})();
	
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
	
$("#obj1058").trigger('SCEventShow');
$("#obj1056").trigger('SCEventShow');
$("#obj1064").trigger('SCEventShow');
$("#obj1062").trigger('SCEventShow');
$("#obj1060").trigger('SCEventShow');
$("#obj1187").trigger('SCEventShow');
$("#obj1147").trigger('SCEventShow');
$("#obj1156").trigger('SCEventShow');
$("#obj1161").trigger('SCEventShow');
$("#obj1159").trigger('SCEventShow');
$("#obj1152").trigger('SCEventShow');
$("#obj1163").trigger('SCEventShow');
$("#obj1177").trigger('SCEventShow');
$("#obj1181").trigger('SCEventShow');
$("#obj1179").trigger('SCEventShow');
$("#obj1165").trigger('SCEventShow');
	

});