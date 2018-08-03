// Teo Espero
// BS Cloud and Systems Administration
// Western Governors University


// Web-Dev-Bootcamp-Udemy

function setOne(){
	var counter = -10;
	document.write("<b>Print ALL numbers between -10 and 19</b>");

	while(counter <= 19){
		document.write("<br>" + counter + "<br>");
		counter++;
	}
}

function setTwo(){
	var counter = -10;
	document.write("<b>Print ALL EVEN numbers between -10 and 40</b>");

	while(counter <= 40){
		if ((counter % 2) == 0) {
			document.write("<br>" + counter + "<br>");
		}
		counter++;
	}
}

function setThree(){
	var counter = 300;
	document.write("<b>Print ALL ODD numbers between 300 and 333</b>");

	while(counter <= 333){
		if ((counter % 2) == 1) {
			document.write("<br>" + counter + "<br>");
		}
		counter++;
	}
}

function setFour(){
	var counter = 5;
	document.write("<b>Print ALL numbers divisible by 5 and 3 between 5 and 50</b>");

	while(counter <= 50){
		if (((counter % 5) == 0 && (counter % 3) == 0)) {
			document.write("<br>" + counter + "<br>");
		}
		counter++;
	}
}



