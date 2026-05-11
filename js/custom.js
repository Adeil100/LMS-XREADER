/**
 * Custom JS for first-page navigation.
 * Shows Continue / Start from Beginning and persists latest page safely.
 */

$(document).ready(function () {
	const LAST_PAGE_KEY = "lastPageNumber";
	const FIRST_VISIT_KEY = "hasVisitedBefore";

	function getStoredLastPage() {
		const value = parseInt(localStorage.getItem(LAST_PAGE_KEY), 10);
		return Number.isFinite(value) && value > 1 ? value : 1;
	}

	function setStartPageQuery(pageNumber) {
		try {
			const url = new URL(window.location.href);
			url.searchParams.set("startPage", String(pageNumber));
			history.replaceState(null, "", url.toString());
		} catch (err) {
			console.error(err);
		}
	}

	function tryNavigateNow(pageNumber) {
		if (typeof app === "undefined") return;
		if (!app || !app.rendition || !app.rendition.data || !Array.isArray(app.rendition.data.pages)) return;
		if (app.rendition.data.pages.length === 0) return;
		app.goToPage(pageNumber, true);
	}

	function bindModalActions() {
		const lastPage = getStoredLastPage();

		$("#continueBtn").off("click").on("click", function () {
			setStartPageQuery(lastPage);
			tryNavigateNow(lastPage);
		});

		$("#startFromBeginningBtn").off("click").on("click", function () {
			setStartPageQuery(1);
			tryNavigateNow(1);
		});
	}

	function initializeFirstPageModal() {
		const hasVisited = localStorage.getItem(FIRST_VISIT_KEY) === "true";
		const lastPage = getStoredLastPage();

		localStorage.setItem(FIRST_VISIT_KEY, "true");
		bindModalActions();

		if (hasVisited && lastPage > 1) {
			$("#firstPageModal").modal("show");
		}
	}

	let modalInitialized = false;
	const checkAppInit = setInterval(function () {
		if (typeof app !== "undefined" && app && app.inited && !modalInitialized) {
			modalInitialized = true;
			clearInterval(checkAppInit);
			initializeFirstPageModal();
		}
	}, 100);

	let lastSavedPage = 0;
	setInterval(function () {
		if (typeof app === "undefined" || !app || !app.inited) return;
		if (!Number.isFinite(app.currentPageNumber) || app.currentPageNumber <= 0) return;
		if (app.currentPageNumber === lastSavedPage) return;

		lastSavedPage = app.currentPageNumber;
		localStorage.setItem(LAST_PAGE_KEY, String(app.currentPageNumber));
	}, 500);
});
