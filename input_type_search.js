// Transforms the search box from <input type="text"> to <input type="search">.
// It also removes the onkeyup listener, replacing by oninput event handler.

$(function() {
	// jQuery does not allow this:
	// $("#filter").attr("type", "search");
	// Since jQuery fails for me, I'm back to the good old plain W3C DOM that
	// is supported everywhere and is the base of every JavaScript library. :)

	var filter = document.getElementById("filter");
	filter.setAttribute("type", "search");

	// Resetting the default event handler.
	filter.onkeyup = null;
	// Handling onInput event.
	filter.addEventListener("input", showReport, false);

	// By the way, Chrome 17.0.963.79 (Official Build 125985) is ignoring the
	// CSS-defined border when the element has:
	//   /* Chrome sets this by default for input[type="search"] */
	//   -webkit-appearance: searchfield;
	// This is a bug in Chrome.
});
