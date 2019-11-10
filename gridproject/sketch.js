
let rectX = 0;
let rectY = 0;
let box;
let prevX,prevY;
let jumping,movingBackward,movingForward;
let speed = 1.5;

function setup() {
  createCanvas(windowWidth,windowHeight);
  box = new Run(rectX,rectY); 

}

function draw() {
  background(0,0,0,20)
  box.show();
  box.gravity();
  if (jumping){
  box.jump();
  }
  if (movingForward){
    box.forward();
  }
  if (movingBackward){
    box.backward();
  }
}

function keyPressed() {

  // if right space bar is pressed set attack to true.

  // if right arrow key is pressed set movingForward to true.
  if (keyCode === 39) {
    movingForward = true;
  }
  
  // if left arrow key is pressed set movingBackward to true.
  if (keyCode === 37) {
    movingBackward = true;
  }
  
  // if up arrow key is pressed set jumping to true.
  if (keyCode === 38) {
    jumping = true;
  }
}

// checking if key is released.
function keyReleased() {

  // if right arrow key is released set movingForward to false.
  if (keyCode === 39) {
    movingForward = false;
  }

  // if left arrow key is released set movingBackward to false.
  if (keyCode === 37) {
    movingBackward = false;
  }

  // if up arrow key is released set jumping to false.
  if (keyCode === 38) {
    jumping = false;
  }
}