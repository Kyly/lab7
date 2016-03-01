'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	var loadDate = new Date();
	var firstLike = true;

	$('.likeBtn').on('click', function (event) {
		if (firstLike) {
			var now = new Date();
			firstLike = false;

			var elapsed = now - loadDate;
			ga('send', 'timing', 'like', 'first', elapsed);
		}
		ga("send", "event", 'like', 'click');
	})
}