/**
 * Source - https://stackoverflow.com/a/67398036
 * Posted by Roel Van der Planken
 * Retrieved 2026-06-17, License - CC BY-SA 4.0
 */
/* Allows anchor links in offcanvas to scroll correctly. */
//document.addEventListener("DOMContentLoaded", function(){
	const offcanvasToggle = document.querySelector('#mobileNavToggle');
	const offcanvasEl = document.querySelector('#mobileNav');
	const bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);
	const offcanvasLinks = offcanvasEl.querySelectorAll('a, .offcanvas-body button');
	offcanvasToggle.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();
		bsOffcanvas.toggle();
	});
offcanvasLinks.forEach(link => {
link.addEventListener('click', () => {
bsOffcanvas.toggle();
});
});
//});
