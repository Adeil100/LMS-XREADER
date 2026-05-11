/**
 * Custom JS for First Page Navigation
 * Handles showing the first page modal with Continue and Start from Beginning options
 */

$(document).ready(function() {
	// Wait for the app to be initialized
	var checkAppInit = setInterval(function() {
		if (app && app.inited) {
			clearInterval(checkAppInit);
			initializeFirstPageModal();
		}
	}, 100);

	function initializeFirstPageModal() {
		const LAST_PAGE_KEY = 'lastPageNumber';
		const FIRST_VISIT_KEY = 'hasVisitedBefore';
		
		// Check if user has visited before
		const hasVisited = localStorage.getItem(FIRST_VISIT_KEY) === 'true';
		const lastPage = parseInt(localStorage.getItem(LAST_PAGE_KEY)) || 1;
		
		// Mark that user has visited
		localStorage.setItem(FIRST_VISIT_KEY, 'true');
		
		// Show first page modal only if user has visited before and there's a saved page
		if (hasVisited && lastPage > 1) {
			$('#firstPageModal').modal('show');
		} else {
			// First time visitor, go to page 1
			app.goToPage(1);
		}
		
		// Handle Continue button - go to last page
		$('#continueBtn').on('click', function() {
			app.goToPage(lastPage);
		});
		
		// Handle Start from Beginning button - go to page 1
		$('#startFromBeginningBtn').on('click', function() {
			app.goToPage(1);
		});
		
		// Store the current page number whenever it changes
		// We need to hook into the goToPage function
		const originalGoToPage = app.goToPage;
		app.goToPage = function(pageNumber, forceReload) {
			localStorage.setItem(LAST_PAGE_KEY, pageNumber);
			return originalGoToPage.call(this, pageNumber, forceReload);
		};
		
		// Also track page changes from page navigation buttons
		$(document).on('click', '#nextPageBtn, #previousPageBtn', function() {
			setTimeout(function() {
				if (app.currentPageNumber) {
					localStorage.setItem(LAST_PAGE_KEY, app.currentPageNumber);
				}
			}, 100);
		});
		
		// Track page changes from thumbnail clicks
		$(document).on('click', '.pageThumbnail', function() {
			setTimeout(function() {
				if (app.currentPageNumber) {
					localStorage.setItem(LAST_PAGE_KEY, app.currentPageNumber);
				}
			}, 100);
		});
	}
});
