"use strict";

let promptFormContainer = document.getElementById('prompt-form-container');
promptFormContainer.hidden = true;

let openPromptButton = document.querySelector('[name="open-prompt"]');
openPromptButton.onclick = showPrompt;

function showPrompt(){
	let promptForm = document.getElementById('prompt-form');
	let result = null;
	
	document.body.style.overflow = "hidden";
	promptFormContainer.hidden = false;
	promptForm[0].focus();

	promptForm[0].oninput = () =>{
		result = promptForm[0].value;
	}

	promptForm[1].onclick = (event) =>{
		event.preventDefault();
		if (result == null) return;
		callbackPrompt(result);
		closePrompt();
	}

	promptForm[2].onclick = () =>{
		closePrompt();
	}

	function closePrompt(){
		promptForm[0].value = '';
		document.body.style.overflow = "visible";
		promptFormContainer.hidden = true;
	}
}

//функция которая будет вызываться после отправки формы
function callbackPrompt(value){
	alert(`вы ввели: ${value}`);
}