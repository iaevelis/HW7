var keys = {
  A: 0,
  S: 1,
  D: 2,
  F: 3,
  G: 4,
  H: 5,
  J: 6,
  K: 7,
  L: 8
};

var frequencies = [174, 196, 220, 246, 261, 294, 330, 349, 392];
var oscillators = [];
var playing = [2];
var color = [20, 50, 80, 110, 140, 170, 200, 230, 260]

function setup() {
	createCanvas(400, 400);
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  for (var i = 0; i < frequencies.length; i++) {
    var osc = new p5.Oscillator();
    osc.setType('triangle');
    osc.freq(frequencies[i]);
    osc.amp(0);
    osc.start();
    oscillators[i] = osc;
  }
}

function draw() {
  
  text('click to play', width / 2, height / 2);

}

function keyPressed() {
  print("got key press for ", key);
  var index = keys[key];
  var osc = oscillators[index];
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
    backgroundColor = color(0, 255, 255);
		ellipse(random(400), random(400), 50, 50);
		fill(frequency[i],100,100);
  }
}

function keyReleased() {
  print("got key release for ", key);
  var index = keys[key];
  var osc = oscillators[index];
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
    backgroundColor = color(255, 0, 255);
		noLoop(ellipse)
  }
}

