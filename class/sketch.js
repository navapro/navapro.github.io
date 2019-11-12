
let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for (let i = 0; i < theFireworks.length; i++) {
    theFireworks[i].move();
    theFireworks[i].display();
  }

 

}

function mousePressed() {

  for (let i = 0; i < 100; i++){
    let myFirework = new Bullet(mouseX, mouseY, random(-3,3), random(-3, 3), 10);
    theFireworks.push(myFirework);
  }
}

class Bullet {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  display() {
    fill(0);
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
  
}