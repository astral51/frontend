"use strict";

function isVisible(elem) {
	let elemCoords = elem.getBoundingClientRect();
	let windowHeight = document.documentElement.clientHeight;
	let extendedTop = -windowHeight;
	let extendedBottom = 2 * windowHeight;

	if (elemCoords.top > extendedTop && elemCoords.top < extendedBottom) {
		elem.classList.add('loaded');
		console.log('loaded');
		return true;
	}
	if (elemCoords.bottom < extendedBottom && elemCoords.bottom > extendedTop) {
		elem.classList.add('loaded');
		console.log('loaded');
		return true;
	}
}

function showVisible() {
	for (let img of document.querySelectorAll('img')) {
		let realSrc = img.dataset.src;
		if (!realSrc) continue;
		if (img.classList.contains('loaded')) continue;
		if (isVisible(img)) {

			// эмуляция кэширования
			//отключить при реальном использовании
			realSrc += '?nocache=' + Math.random();

			img.src = realSrc;

			img.dataset.src = '';
		}
	}

}

window.addEventListener('scroll', showVisible);
showVisible();