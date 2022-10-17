"use strict";
function printf(x){
	console.log(x);
}

grid.onclick = (event) =>{
	if (event.target.tagName != "TH") return;
	let th = event.target;
	if (!th.dataset.type) return;

	let rowNumber = th.cellIndex;
	let sortType = th.dataset.type;

	let sortedRows = Array.from(grid.rows).slice(1);

	if (sortType == 'string')
	sortedRows.sort((rowA, rowB) => rowA.cells[rowNumber].innerHTML > rowB.cells[rowNumber].innerHTML ? 1 : -1);
	if (sortType == 'number')
	sortedRows.sort((rowA, rowB) => Number(rowA.cells[rowNumber].innerHTML) > Number(rowB.cells[rowNumber].innerHTML) ? 1 : -1);
	
	grid.tBodies[0].append(...sortedRows);
}













