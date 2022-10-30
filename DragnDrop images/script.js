"use strict";

let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);

document.onmousedown = (event) => {
	if (!event.target.classList.contains('draggable')) return;

	event.preventDefault();

	let target = event.target;

	let shiftX = event.clientX - target.getBoundingClientRect().left;
	let shiftY = event.clientY - target.getBoundingClientRect().top;

	target.style.position = 'absolute';
	//target.style.zIndex = '1000';

	onMouseMove(event);

	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);
	document.body.append(target);

	function onMouseMove(event){
		let newLeft = event.pageX - shiftX;
		let newTop = event.pageY - shiftY;
		if (newLeft <= 0) newLeft = 0;
		if (newLeft >= document.body.offsetWidth - target.offsetWidth) newLeft = document.body.offsetWidth - target.offsetWidth;
		
		if (newTop <= window.pageYOffset) {
			window.scrollBy(0, -10);
			newTop = window.pageYOffset;
		}
		if (newTop >= document.documentElement.clientHeight + window.pageYOffset - target.offsetHeight){
			window.scrollBy(0, 10);
			newTop = document.documentElement.clientHeight + window.pageYOffset - target.offsetHeight;
		}
		if (newTop >= scrollHeight - target.offsetHeight) newTop = scrollHeight - target.offsetHeight;
		if (newTop <= 0) newTop = 0;
		target.style.left = newLeft + 'px';
		target.style.top = newTop + 'px';
	}

	function onMouseUp(event){
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	}
}
