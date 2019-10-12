// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let runArray = [];
let run1,run2,run3,run4,run5,run6,run7,run8,run9,run10;
let fighter;
let img
let state;
let heroX,heroY;
let waitTime;

function preload() {
  loadRun();
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  runArray = [run1,run2,run3,run4,run5,run6,run7,run8,run9,run10];
  
  fighter = new Run(runArray,windowWidth / 4, windowHeight/2,.5,windowHeight/2); // new run neede or let run
}

function draw() {
  background(img);
  
  fighter.show();
  
  if (keyIsPressed === true) {
  
    if (keyCode === 39) { 
      fighter.moveForward();
    }
    
  if (keyCode === 37) {
    fighter.moveBackward();
  }
  if (keyCode === 38) {
    waitTime = millis();
    fighter.jump();
  if (millis() > waitTime + .1){
    fighter.jumpBack();
}
}
  }
  
} 
