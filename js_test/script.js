"use strict";
function printf(x){
	console.log(x);
}

//оборачиваем весь текстовый контент из li в span
let treeArrayLi = tree.querySelectorAll('li');
for (let elem of treeArrayLi){
	let span = document.createElement('span');
	elem.prepend(span);
	span.append(span.nextSibling); 

}

tree.onclick = (event) =>{
	if (!event.target.tagName == 'SPAN') return;
	if (!event.target.nextSibling) return;
	event.target.nextSibling.hidden = !event.target.nextSibling.hidden;
}













