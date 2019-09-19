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
let imageheight;
let imagewidth;
let dy;
let nextimage;
let previmage;
let dprev;
let dnext;
let nextandprevwidth;

function preload(){
  img1 = loadImage("assets/bcg-0.jpg");
  img2 = loadImage("assets/bcg-1.jpg");
  img3 = loadImage("assets/bcg-2.jpg");
  img4 = loadImage("assets/bcg-3.jpg");
  img5 = loadImage("assets/bcg-4.jpg");
  img = new Array(img1,img2,img3,img4,img5);
  next = loadImage("assets/next.ico");
  prev = loadImage("assets/prev.ico");
  imageheight = windowHeight/1.5;
  imagewidth = windowWidth /1.5;
  nextandprevwidth = windowHeight/11
}
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(img[counter], width /2,height/2, imagewidth,imageheight);
  nextimage = image(next, width /1.1, height/2, height/5,height/5);
  previmage = image(prev, width /12, height/2, height/5,height/5);
  
}


function keyPressed(){
  if (keyCode === 39){
    slideimageforward();
  }
  if (keyCode === 37){
   slideimagebackwards();
  }
}

function mouseWheel(event) {
  dy = event.delta;
  if (dy>0){
    zoomimg();
   }
  else if (dy<0){
     zoomimg_out();
  }

}

function zoomimg(){
 
  imageheight/= 1.1
  imagewidth /= 1.1
}
function zoomimg_out(){
 
  imageheight*= 1.1
  imagewidth *= 1.1
}
function mousePressed() {
  dnext = dist(mouseX, mouseY, width /1.1, height/2);
  dprev = dist(mouseX, mouseY, width /12, height/2);
  if (dnext<nextandprevwidth){
    slideimageforward()
  }
  if (dprev<nextandprevwidth){
    slideimagebackwards()
  }

}

function slideimageforward(){
    counter++;
    if (counter>4){
      counter=0;
    }
  }
function slideimagebackwards(){
    counter--;
    if (counter<0){
      counter=4;
    }
  
  }

