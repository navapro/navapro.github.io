// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let img1;
let img2;
let img3;
let img4;
let img5;

function preload(){
  img1 = loadImage("assets/bcg-0.jpg");
  img2 = loadImage("assets/bcg-1.jpg");
  img3 = loadImage("assets/bcg-2.jpg");
  img4 = loadImage("assets/bcg-3.jpg");
  img5 = loadImage("assets/bcg-4.jpg");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  image(img1, windowWidth /6,windowHeight/6, windowWidth /1.5,windowHeight/1.5)
}
 