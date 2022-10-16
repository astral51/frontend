"use strict";
function printf(x){
	console.log(x);
}

let i = 1;
let liArray = document.querySelectorAll('li');
for(let li of liArray) {
	li.style.position = 'relative';
	li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
	i++;
}

let width = 130;
let count = 3;
let position = 0;

let list = document.querySelector('ul');
let listElem = list.querySelectorAll('li');

document.querySelector('.prev').onclick = () =>{
	position += width * count;
	position = Math.min(position, 0); 
	list.style.marginLeft = position + "px"; 
}
document.querySelector('.next').onclick = () =>{
	position -= width * count;
	position = Math.max(position, -width * (listElem.length - count)); 
	list.style.marginLeft = position + "px"; 
}













