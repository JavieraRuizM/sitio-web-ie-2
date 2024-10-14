let flowers = []; 
let num = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  for (let i=0; i<num; i++) {
    
    flowers[i] = new Flower(140 - i*40, 100 + i*5, 30, 3, (i+1)*0.1);
      
    if (i%2 == 0) {
      flowers[i] = new Flower(140 - i*10, 100 + i*5, 30, 3, (i+1)*0.1);
    } 
    else {
      flowers[i] = new Flower(200 - i*30, 100 + i*5, 30, 3, (i+1)*-0.1);
    }   
  }
}

function draw() {
  background(0);
  translate(width/2, height/2);
  for (let i=0; i<num; i++) {
    flowers[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Flower {
  constructor(r, pts, f_amp, period, speed) {
    this.x = [];
    this.y = [];
    this.r = r;
    this.pts = pts;
    
    this.f_radius = 0;
    this.f_amp = f_amp;
    this.period = period;
    
    this.speed = speed;
    this.rot = 0;
  }
  
  display() {
    push();
    blendMode(DIFFERENCE);
    noStroke();
    fill(255);
    beginShape();
    
    // Interactividad con mouseX: afecta el número de puntos y la amplitud
    this.pts = int(map(mouseX, 0, width, 80, 200));  // Varía entre 5 y 20 puntos según mouseX
    this.f_amp = map(mouseX, 0, width, 10, 150);   // Varía la amplitud según mouseX
    this.period = 1 + cos(frameCount * 0.02);      // Cambia el período de forma continua
    
    for (let i=0; i<this.pts; i++) {
      let angle = i / this.pts * 360;
      this.f_radius = this.f_amp * cos(angle * this.period);
      this.x[i] = (this.r + this.f_radius) * cos(angle + this.rot);
      this.y[i] = (this.r + this.f_radius) * sin(angle + this.rot);
      vertex(this.x[i], this.y[i]);
    }
    endShape(CLOSE);
    pop();
    this.rot += this.speed;
  }
}
