let d;
let div = 20;
let sym = 360 / div;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  pixelDensity(5);
}

function draw() {
  background(0,10);
  stroke(255);
  d = map(mouseX, 0, width, 0, 90);
  
  for (i = 0; i < 360; i+=sym) {
    push();
    translate(width / 2, height / 2);
    rotate(i);
    branch(50);
    pop();
  }
  
}

function branch(br) {

  line(0, 0, 0, -br);
  translate(0, -br);
  if (br > 12) {
    push();
    rotate(d);
    branch(br * 0.7);
    pop();
    
    push();
    rotate(-d);
    branch(br * 0.7);
    pop();
    
  }
}