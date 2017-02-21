'use strict'
window.onload = loadDoc(); 
window.onload = loadHistory();

function loadDoc() {
	var displayElement = document.createElement('h2');
	var body = document.getElementsByTagName('body')[0];

	displayElement.id = "title";
	displayElement.innerHTML = "Result: ";

	body.appendChild(displayElement);
}


function display(value){
	var displayElement = document.getElementById('title');
	displayElement.innerHTML = "Result: " + value;
}

function loadHistory() {
	var displayHistory = document.createElement('h2');
	var historyBody = document.getElementsByTagName('body')[0];
	
	displayHistory.id = "history";
	displayHistory.innerHTML = "Total number of clicks: ";
	
	historyBody.appendChild(displayHistory);
}

function displayHistory(data){
	var displayHistory = document.getElementById('history');
	displayHistory.innerHTML = "Total number of clicks: " + data;
}