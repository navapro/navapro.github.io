// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ball;
let size;

function preload(){
  ball = loadImage("assets/ball.jpg");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  size = 100
}

function draw() {
  background(255);
  if (keyIsPressed) {
    if (keyCode === UP_ARROW){
      size+=10;
    }
    else if (keyCode === DOWN_ARROW){
      size -=10;
    }
  }

  imageMode(CENTER)
  image(ball, mouseX, mouseY,size,size);
}
 