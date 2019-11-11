
let rectX = 0;
let rectY = 0;
let box;
let prevX,prevY;
let jumping,movingBackward,movingForward;
let speed = 1.5;
let grid =[];
let col = 8;
let row = 5;
let grid0,grid1,grid2,grid3,grid4,grid5,grid6,grid7,grid8;
let imageCounter = 0;
let gridImages =[];
let charecter;
let cx = 100;
let cy = 100;

function preload(){
    grid0 = loadImage("assets/0t.png");
    grid1 = loadImage("assets/1t.png");
    grid2 = loadImage("assets/2t.png");
    grid3 = loadImage("assets/3t.png");
    grid4 = loadImage("assets/4t.png");
    grid5 = loadImage("assets/5t.png");
    grid6 = loadImage("assets/6t.png");
    grid7 = loadImage("assets/7t.png");
    grid8 = loadImage("assets/8t.png");
    charecter = loadImage("assets/Picture1.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  box = new Run(rectX,rectY); 

  grid = [
    [7, 7, 8, 8, 8, 8, 8, 8],
    [0, 7, 7, 7, 7, 8, 8, 8],
    [1, 7, 7, 7, 7, 7, 7, 7],
    [2, 3, 7, 7, 6, 7, 6, 7],
    [4, 2, 5, 5, 5, 5, 5, 5]
        ];
  gridImages = [grid0,grid1,grid2,grid3,grid4,grid5,grid6,grid7,grid8];
}

function draw() {
  background(0,0,0,70);
  
  

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
  displayGrid(grid);
}

function displayGrid(theGrid) {
 
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 8; x++) {
      imageCounter = theGrid[y][x];
     
      
      let cellHeight= height / row;
      let cellWidth = width / col;
      //rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      image(gridImages[imageCounter], x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      //image(charecter, cx,cy,50,50);
      rect(cx, cy, 50, 50);
      
    }
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
