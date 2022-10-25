"use strict";

thumbs.onclick = (event) => {
	if (!event.target.closest('a')) return;
	let target = event.target.closest('a');

	showThumbnail(target.href, target.title);
	event.preventDefault();

}

function showThumbnail(href, alt){
	largeImg.src = href;
	largeImg.alt = alt;
}












