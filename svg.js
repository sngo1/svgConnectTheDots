// Samantha Ngo
// Softdev -- Period 7
// HW07
// 2018-03-01

var pic = document.getElementById("vimage");
console.log("PIC: ", pic);
var cl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
console.log("cl: ", cl);

/*
cl.setAttribute("cx", "0");
cl.setAttribute("cy", "0");
cl.setAttribute("r", "200");
cl.setAttribute("fill", "purple");
cl.setAttribute("stroke", "pink");
console.log("Attribute cx changed to 200");

pic.appendChild(cl);
console.log("Child appended.")
*/
/*
var change = function(e){
    pic = this;
    this.setAttribute("fill","green");
    console.log("Color changed to green.");
}
*/

var clearBoard = function(){
    console.log(pic);
    objectsLeft = pic.children.length;
    while (objectsLeft > 0){
	console.log("Length: ", objectsLeft);
	pic.removeChild(pic.children[0]);
	console.log("Element Removed");
	objectsLeft -= 1;
    }
}

// console.log("clearboard tests:");
// clearBoard()

var drawDot = function(xCor, yCor){
    cl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cl.setAttribute("cx", String(xCor));
    cl.setAttribute("cy", String(yCor));
    cl.setAttribute("r", "20");
    cl.setAttribute("fill", "pink");
    cl.setAttribute("stroke", "pink");
    console.log("Circle drawn.");
    x = cl
    pic.appendChild(x);
    console.log("Child appended.");
    console.log("On the board: ", pic.children);
    lastCor = [xCor, yCor];
    return lastCor;
}

var drawLine = function(circlexCor, circleyCor){
    cl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cl.setAttribute("cx", String(circlexCor));
    cl.setAttribute("cy", String(circleyCor));
    cl.setAttribute("r", "20");
    cl.setAttribute("fill", "pink");
    cl.setAttribute("stroke", "pink");
    console.log("Circle drawn.");
    x = cl
    pic.appendChild(x);
    console.log("Child appended.");
    console.log("On the board: ", pic.children);
    lastCor = [xCor, yCor];
    return lastCor;
}

drawDot(30,30);
console.log("Dot drawn");

var clicked = function(e){
    console.log("X: ", e.offsetX);
    console.log("Y: ", e.offsetY);
    
    drawDot(e.offsetX, e.offsetY);
}

pic.addEventListener("click", clicked);
console.log(pic.children);
