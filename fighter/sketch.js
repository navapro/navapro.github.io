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


function preload() {

  run1= loadImage("assets/run (1).png");
  run2= loadImage("assets/run (2).png");
  run3= loadImage("assets/run (3).png");
  run4= loadImage("assets/run (4).png");
  run5= loadImage("assets/run (5).png");
  run6= loadImage("assets/run (6).png");
  run7= loadImage("assets/run (7).png");
  run8= loadImage("assets/run (8).png");
  run9= loadImage("assets/run (9).png");
  run10 = loadImage("assets/run (10).png");
  img = loadImage("assets/bg3.gif");
}

  function setup() {
    createCanvas(windowWidth, windowHeight);
    runArray = [run1,run2,run3,run4,run5,run6,run7,run8,run9,run10];

    fighter = new Run(runArray,windowWidth / 4, windowHeight/1.5,.45);
  }

function draw() {
  background(img);
  push();
  imageMode(CENTER)
  fighter.show();
  fighter.animate();
  pop();
}
