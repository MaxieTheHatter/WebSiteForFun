//make sure loadWeather is initilized when the window has loaded
//using window.onload
window.onload = loadWeather();

function loadWeather() {
	//create AJAX object
	var xhttp = new XMLHttpRequest();
	
	/*
	This function is called upon when the AJAX object
	sends a request
	*/
	xhttp.onreadystatechange = function(){
		//state 4 means that the site is ready to render
		//state 200 means that the request was OK, it was sent correctly
		if(this.readyState === 4 && this.status === 200) {
			console.log(this);
		}
	}
	
	xhttp.open("POST", 
	"http://rolandsson.nu/jakob/Jensen/SJK16/api/posttestservice.php", 
	true);
	
	xhttp.send();
}