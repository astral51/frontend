"use strict";

let thumb = slider.querySelector('.thumb');

thumb.onmousedown = (event) => {

	event.preventDefault(); 
	let sliderCoords = slider.getBoundingClientRect();
	thumb.style.zIndex = '1000';
	//document.body.append(thumb);
	thumb.style.background = "rgb(0, 0, 200)";
	let shiftX = event.clientX - thumb.getBoundingClientRect().left;
	moveAt(event.pageX);

	function moveAt(pageX) {
		let newLeft = pageX - sliderCoords.left - shiftX;
		thumb.style.left = newLeft + 'px';
		if (newLeft <= 0) thumb.style.left = 0 + 'px';
		if (newLeft >= slider.offsetWidth - thumb.offsetWidth) thumb.style.left = slider.offsetWidth - thumb.offsetWidth +'px';
	}
	
	function onMouseMove(event) {
		moveAt(event.pageX);
	}
	
	document.addEventListener('mousemove', onMouseMove);
	
	document.onmouseup = function() {
		document.removeEventListener('mousemove', onMouseMove);
		thumb.onmouseup = null;
		thumb.style.background = "blue";
	};
};

thumb.ondragstart = function() {
	return false;
};


