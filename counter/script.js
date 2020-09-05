function decreaseButton() {
	j=j-1;
	let i = j*4;
	document.getElementById("numbercount").innerHTML = i;
	console.log("decrease",i, j)
}

function resetButton () {
	j=0;
	document.getElementById("numbercount").innerHTML = j;
	console.log("reset", j)
}

function increaseButton () {
	j=j+1;
	let i = j*4;
	document.getElementById("numbercount").innerHTML = i;
	console.log("increase",i, j)
}

let j = 0;
