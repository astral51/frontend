"use strict";

let calculator = document.querySelector('[name="calculator"]');

DrawDiagram();

calculator.oninput = DrawDiagram;

function DrawDiagram(){
	let moneyBefore = document.getElementById('money-before');
	let moneyAfter = document.getElementById('money-after');
	let money = document.querySelector('[name="money"]')
	let years = document.querySelector('[name="months"]').value/12;
	let interest = document.querySelector('[name="interest"]').value/100;
	let diagramSource = document.getElementById('height-before');
	let diagramResult = document.getElementById('height-after');
	let result = null;

	moneyBefore.innerHTML = money.value;

	result = Math.round(moneyBefore.innerHTML * (1 + interest) ** years);
	moneyAfter.innerHTML = result;
	diagramResult.style.height = parseInt(diagramSource.style.height, 10) * (result / money.value) + 'px';
}


