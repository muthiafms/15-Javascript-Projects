function myFunction() {
	i++;
	if (i===4) {i=0}
	var color = coloroptions[i];
	document.getElementById("colorname").innerHTML = color;
	document.body.style.background = color;
	
}

let i = 0;

let coloroptions = ["blue", "red", "#264653", "rgb(42, 157, 143)"]
