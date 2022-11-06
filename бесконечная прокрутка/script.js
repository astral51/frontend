"use strict";

let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);

//координаты элемента относительно документа
function getCoords(elem) {
	let box = elem.getBoundingClientRect();
	return {
		top: box.top + window.pageYOffset,
		right: box.right + window.pageXOffset,
		bottom: box.bottom + window.pageYOffset,
		left: box.left + window.pageXOffset
	};
}

//добавление нового элемента в конец body
function addElem(){
	let date = new Date();
	let dateDiv = document.createElement('div');
	document.body.append(dateDiv);
	dateDiv.innerHTML = date;
}
//координаты последнего элемента в body
function coordsLastElemY(){
	let lastElem = document.body.lastElementChild;
	let coordsLastElemY = getCoords(lastElem);
	return (coordsLastElemY.top);
}

function checkScroll(){
	let currentElemCoordsY = coordsLastElemY();
	while (currentElemCoordsY < scrollHeight + scrollY + 100){
		addElem();
		currentElemCoordsY = coordsLastElemY();
	}
}
checkScroll();
window.onscroll = checkScroll;