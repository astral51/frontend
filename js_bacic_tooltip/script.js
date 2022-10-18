"use strict";
function printf(x){
	console.log(x);
}

let tooltip = document.createElement('div');
tooltip.classList.add('tooltip');


document.onmouseover = (event) =>{
	if (!event.target.dataset.tooltip) return;
	let target = event.target;
	tooltip.innerHTML = target.dataset.tooltip;
	target.append(tooltip);
	let coords = target.getBoundingClientRect();

	let tooltipLeft;
	let tooltipTop;
	if (coords.left + target.offsetWidth/2 - tooltip.offsetWidth/2 < 0){
		tooltipLeft = "0px";
	}
	else {
		tooltipLeft = coords.left + target.offsetWidth/2 - tooltip.offsetWidth/2 + "px";
	}

	if (coords.top - tooltip.offsetHeight - 5 <= 0) {
		tooltipTop = coords.top + target.offsetHeight + 5 + "px";
	}
	else {
		tooltipTop = coords.top - tooltip.offsetHeight - 5 + "px";
	}
	tooltip.style.left = tooltipLeft;
	tooltip.style.top = tooltipTop;
}
document.onmouseout = (event) =>{
	if (!event.target.dataset.tooltip) return;
	document.querySelector('.tooltip').remove();
}












