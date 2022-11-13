"use strict";

//кнопки редактирования таблицы
let buttonOk = document.getElementById('button_ok');
let buttonCancel = document.getElementById('button_cancel');
buttonOk.hidden = true;
buttonCancel.hidden = true;

//таблица
let area = null;
let target = null;
let savedTarget = null;
let table = document.getElementById('bagua-table');
let editedTable = false;

table.onclick = function(event) {
	if (editedTable) return;
	if (!event.target.closest('TD')) return;
	if (!table.contains(event.target)) return;
	target = event.target.closest('TD');
	editedTable = true;
	buttonOk.hidden = false;
	buttonCancel.hidden = false;
	editStart();
};

function editStart() {
	area = document.createElement('textarea');
	area.className = 'edit';
	area.innerText = target.innerHTML;
	area.style.minWidth = target.offsetWidth + 'px';
	area.style.minHeight = target.offsetHeight + 'px';
	//копия ячейки до редактирования
	savedTarget = target.cloneNode(true); 

	target.classList.toggle('edit');
	target.innerHTML = '';
	target.appendChild(area);

	//добавление кнопок
	target.appendChild(buttonOk);
	target.appendChild(buttonCancel);
	buttonOk.style.top = target.offsetHeight + 'px';
	buttonCancel.style.top = target.offsetHeight + 'px';
	buttonCancel.style.left = buttonOk.offsetWidth + 'px';

	buttonOk.onclick = () =>{
		editEnd(true);
	}
	buttonCancel.onclick = () =>{
		editEnd(false);
	}
}

function editEnd(successful) {
	target.classList.toggle('edit');
	if (successful) target.innerHTML = area.value;
	else target.replaceWith(savedTarget);

	editedTable = false;
	buttonOk.hidden = true;
	buttonCancel.hidden = true;
}
