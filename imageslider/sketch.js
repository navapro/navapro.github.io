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
let next;
let prev;

function preload(){
  img1 = loadImage("assets/bcg-0.jpg");
  img2 = loadImage("assets/bcg-1.jpg");
  img3 = loadImage("assets/bcg-2.jpg");
  img4 = loadImage("assets/bcg-3.jpg");
  img5 = loadImage("assets/bcg-4.jpg");
  img = new Array(img1,img2,img3,img4,img5);
  next = loadImage("assets/next.ico")
  prev = loadImage("assets/prev.ico")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
image(img[counter], width /6,height/6, width /1.5,height/1.5);
image(next, width /1.15, height/2.5, height/5,height/5);
image(prev, width /25, height/2.5, height/5,height/5);

}

function keyPressed(){


  if (keyCode === 39){
    counter++;
    if (counter>4){
      counter=0;
    }
  }
  if (keyCode === 37){
    counter--;
    if (counter<0){
      counter=4;
    }
  
}

}
