function myFunction() {
	i++;
	if (i===4) {i=0}
	var color = coloroptions[i];
	document.getElementById("colorname").innerHTML = color;
	document.body.style.background = color;
	
}

let i = 0;

let coloroptions = ["#03045E", "rgb(2, 62, 138)", "#0077B6", "rgb(0, 119, 182)", "#0096C7", "rgb(0, 180, 216)", "#48CAE4", "rgb(144, 224, 239)", "#ADE8F4", "rgb(202, 240, 248"]