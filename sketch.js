let bubbles = [];
var canvas;
var gray;
var diameter;

function setup() { // built-in P5.JS function -=- this runs once
	colorMode(RGB, 255, 255, 255);
	canvas = createCanvas(800, 600);
	canvas.mousePressed(changeGray);
	let x = random(width);
	let y = random(height);
	let r = random(10, 50);
	bubble = new Bubble(x, y, r);
	
	diameter = 10;
	gray = 100;
	
	for(let i = 0; i < 3; i++) {
		let x = 20 + 2 * i;
		bubbles[i] = new Bubble(20, 20);
	}
}

function mousePressed() {
	for(i = 0; i < bubbles.width; i++) {
		if(bubbles[i].contains(mouseX, mouseY)) {
			bubbles[i].changeGray();
		}
	}
}

// this function fires only when cnv is clicked
function changeGray() {
  gray = random(0, 255, 0);
}

function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(gray); // give the canvas a black background
	stroke(255);
	fill(155, 0, 0); // fills the circle with a color in the RGB configuration
	strokeWeight(5); //thickness of the ellipse line
	ellipse(width/2, width/2, width, height);
	for (let i = 0; i < bubbles.width; i++){
		if(bubbles[i].contains(mouseX, mouseY)) {
			bubbles[i].changeColor(255);
		} else {
			bubbles[i].changeColor(0);
		}
		bubbles[i].move();
		bubbles[i].show();
	}
}

class Bubble {
	constructor(x, y, r){
		this.x = x;
		this.y = y;
		this.r = r;
		this.brightness = 0;
	}
	
	mousePressed() {
		console.log("Good job, ya clicked");
	}
	
	changeColor(bright){
		this.brightness = bright;
	}
	
	contains(px, py) {
		let d = dist(px, py, this.x, this.y)
		if (d < this.r) {
			return true;
		} else {
			return false;
		}
	}
	
	move() {
		this.x = this.x + random(-20,20);
		this.y = this.y + random(-20,20);
	}
	
	show() {
		stroke(255); // white outline
		strokeWeight(4); // line width
		noFill();
		ellipse(this.x, this.y, this.r * 2); // draw an ellipse/circle
	}
}