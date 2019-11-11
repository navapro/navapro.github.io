
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

function preload(){
    grid0 = loadImage("assets/0.png");
    grid1 = loadImage("assets/1.png");
    grid2 = loadImage("assets/2.png");
    grid3 = loadImage("assets/3.png");
    grid4 = loadImage("assets/4.png");
    grid5 = loadImage("assets/5.png");
    grid6 = loadImage("assets/6.png");
    grid7 = loadImage("assets/7.png");
    grid8 = loadImage("assets/8.png");
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
}

function draw() {
  background(0,0,0,70);
  displayGrid(grid);


  // box.show();
  // box.gravity();
  // if (jumping){
  // box.jump();
  // }
  // if (movingForward){
  //   box.forward();
  // }
  // if (movingBackward){
  //   box.backward();
  // }
}

function displayGrid(theGrid) {
  //assumes the grid is a square...
  for (let y = 0; y < theGrid[0].length; y++) {
    for (let x = 0; x < theGrid[0].length; x++) {
      if (theGrid[y][x] === 0) {
        fill(255);
      }
      else if (theGrid[y][x] === 1) {
        fill('red');
      }
      else if (theGrid[y][x] === 2) {
        fill('red');
      }
      else if (theGrid[y][x] === 3) {
        fill('red');
      }
      else if (theGrid[y][x] === 4) {
        fill('red');
      }
      else if (theGrid[y][x] === 5) {
        fill('red');
      }
      else if (theGrid[y][x] === 6) {
        fill('blue');
      }
      else if (theGrid[y][x] === 7) {
        fill('pink');
      }
      else {
        fill('grey');
      }
      let cellHeight= height / row;
      let cellWidth = width / col;
      rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
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