"use strict";

let tooltip;

house.onmouseover = (event) => {

	let anchorElem = event.target.closest('[data-tooltip]');

	if (!anchorElem) return;

	tooltip = positionTooltip(anchorElem, anchorElem.dataset.tooltip);
}

house.onmouseout = (event) => {
	
	if (tooltip) {
        tooltip.remove();
        tooltip = false;
    }
}

function positionTooltip(anchorElem, html){
	let tooltipElem = document.createElement('div');
	tooltipElem.className = 'tooltip';
	tooltipElem.innerHTML = html;
	document.body.append(tooltipElem);

	let coords = anchorElem.getBoundingClientRect();

	// позиционируем подсказку над центром элемента
	let left = coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
	if (left < 0) left = 0;

	let top = coords.top - tooltipElem.offsetHeight - 5;
	if (top < 0) {
	  top = coords.top + anchorElem.offsetHeight + 5;
	}

	tooltipElem.style.left = left + 'px';
	tooltipElem.style.top = top + 'px';

	return tooltipElem;
}





