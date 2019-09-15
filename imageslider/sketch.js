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
let counter = 0;
let img;
function preload(){
  img1 = loadImage("assets/bcg-0.jpg");
  img2 = loadImage("assets/bcg-1.jpg");
  img3 = loadImage("assets/bcg-2.jpg");
  img4 = loadImage("assets/bcg-3.jpg");
  img5 = loadImage("assets/bcg-4.jpg");
  img = new Array(img1,img2,img3,img4,img5);
}
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
image(img[counter], windowWidth /6,windowHeight/6, windowWidth /1.5,windowHeight/1.5);

// if (counter>4){
//   counter = 0;
// }
// if (counter<0){
//   counter = 4;
// }
//  if (keyIsPressed) {
} 
function keyPressed(){
  if (keyCode === 39){
    counter+=1;
  }
  if (keyCode === 37){
    counter+=-1;
   }
  }


