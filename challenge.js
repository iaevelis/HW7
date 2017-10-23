//Bonus Challenge from Homework 5 arrays

var shades = [10, 20, 30, 40, 50];
var rects  = [];

function setup() {
	createCanvas(400, 400);
	colorMode(HSB);
	noStroke();

	for (var i = 0; i < 5; i++) {
		rects[i] = {
			s: shades[i],
			x: i * width / 5,
			y: 0,
			z: width / 5,
			q: height,

			drawRect: function() {
				fill(this.s, 100, 100);
				rect(this.x, this.y, this.z, this.q);
			},
			slide: function() {
				this.x = this.x + 5
				if (this.x > width/2)
					this.x = this.x + 10
				if (this.x > width/.5)
					this.x = 0

			},
		}
	}
}


function draw() {
	for (var i = 0; i < 5; i++) {
		rects[i].drawRect();
		rects[i].slide();
	}
}
