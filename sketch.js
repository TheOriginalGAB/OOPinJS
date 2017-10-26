let bubbles = [];

var bubble = {
	x: 300,
	y: 200,
}

function setup() { // built-in P5.JS function -=- this runs once
	createCanvas(1366, 766);
	for(let i = 0; i < 500; i++) {
		bubbles[i] = new Bubble(200, 200, 40);
	}
}

function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // give the canvas a black background
	for(let i = 0; i < 500; i++){
		bubbles[i].move();
		bubbles[i].display();
	}
}

class Bubble {
	constructor(x, y, r){
		this.x = x;
		this.y = y;
		this,r = r;
	}
}

function display() {
	stroke(255); // white outline
	strokeWeight(4); // line width
	noFill();
	ellipse(bubble.x, bubble.y, 24, 24); // draw an ellipse/circle
}

function move() {
	bubble.x = bubble.x + random(-5,5);
	bubble.y = bubble.y + random(-5,5);
}