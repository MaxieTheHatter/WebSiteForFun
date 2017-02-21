"use strict"
var obj = {title: "my title", description: "my description"};
var value = 0;
var data = localStorage.getItem('counter');

Object.defineProperty(obj, "toString", {
	value: function() {
		return this.title + ", " + this.description;
	},
	writable: false,
	enumerable: true,
	configurable: true
});

display("Button has been clicked " + value + " times");
displayHistory(localStorage.getItem('counter'));

function changeText() {
	value = value + 1;
	data++;
	localStorage.setItem("counter", data);
	displayHistory(data);
	display("Button has been clicked " + value + " times");
	document.getElementById("changeThis").innerHTML = "This text was changed";
}

function resetData() {
	data = 0;
	displayHistory(data);
}
