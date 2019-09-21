// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Define all the variables.
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
let sound;

// Preload all the images and sounds.
function preload() {
  sound = loadSound('assets/sound.mp3');
  img1 = loadImage("assets/bcg-0.jpg");
  img2 = loadImage("assets/bcg-1.jpg");
  img3 = loadImage("assets/bcg-2.jpg");
  img4 = loadImage("assets/bcg-3.jpg");
  img5 = loadImage("assets/bcg-4.jpg");
  next = loadImage("assets/next.ico");
  prev = loadImage("assets/prev.ico");
}

// Set the canvas size and image height and width.
function setup() {

  createCanvas(windowWidth, windowHeight);
  imageheight = windowHeight / 1.5;
  imagewidth = windowWidth / 1.5;
  nextandprevwidth = windowHeight / 11

  // Place the images in an array.
  img = new Array(img1, img2, img3, img4, img5);
}
function draw() {

  // Setting the background to white
  background(255);

  // Setting image mode to CENTER and height width and X and Y position for all the images.
  imageMode(CENTER);
  image(img[counter], width / 2, height / 2, imagewidth, imageheight);
  nextimage = image(next, width / 1.1, height / 2, height / 5, height / 5);
  previmage = image(prev, width / 12, height / 2, height / 5, height / 5);
}

// Checking if  a key is pressed.
function keyPressed() {

  // Check if the key is right arrow then slide to the next image.
  if (keyCode === 39) {
    slideimageforward();
  }

  // Check if the key is left arrow then slide to the previous image.
  if (keyCode === 37) {
    slideimagebackwards();
  }
}

// Checking if mouse  is pressed.
function mousePressed() {

  // Calculating the distance between mouse pointer and the center of the next and previous image.
  dnext = dist(mouseX, mouseY, width / 1.1, height / 2);
  dprev = dist(mouseX, mouseY, width / 12, height / 2);
  
  // Checking if the mouse pointer is inside the next button slide the image if it is.
  if (dnext < nextandprevwidth) {
    slideimageforward()
  }

  // Checking if the mouse pointer is inside the previous button and slide the image if it is .
  if (dprev < nextandprevwidth) {
    slideimagebackwards()
  }
}

// Checking to see if mouse wheel is turned.
function mouseWheel(event) {

  // Finding the value of mouse wheel movement.
  dy = event.delta;

  // Checking if mouse wheel movement is positive and zooming out if it is.
  if (dy > 0) {
    zoomimg_out();
  }

  // Checking if mouse wheel movement is negetive and zooming in if it is.
  else if (dy < 0) {
    zoomimg_in();
  }
}


// Dividing image height and width to zoom out when the function is called.
function zoomimg_out() {

  imageheight /= 1.1
  imagewidth /= 1.1

}

// Multiplying image height and width to zoom in when the function is.
function zoomimg_in() {

  imageheight *= 1.1
  imagewidth *= 1.1

}

// Run setup when window is resized.
function windowResized() {
  setup();
}

// Swicth to the next image by adding 1 to counter.
function slideimageforward() {
  counter++;
 
  // If counter is greater than 4, it is outside the array and set couter back to 0.
  if (counter > 4) {
    counter = 0;
  }

  // Play clicking sound when image switches.
  sound.play();

  
}

// Swicth to the previous image by subtracting 1 from counter.
function slideimagebackwards() {
  counter--;
 
   // If counter is less than 0, it is outside the array and set couter back to 4.
  if (counter < 0) {
    counter = 4;
  }
  
  // Play clicking sound when image switches.
  sound.play();
}

