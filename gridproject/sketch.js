let grid;
let rows = 30;
let cols = 30;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  background(220);
  displayGrid(grid, rows, cols);
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}

function keyTyped() {
  if (key === "r") {
    grid = createRandom2dArray(cols, rows);
  }
  displayGrid(grid);
  collides();
  push();
  fill('yellow');
   rect(width/1.335,height/1.45,width/8,10);
   rect(cx+20,cy,50,10);
  pop();

  }
  if (key === " ") {
            
  }
}

function mousePressed() {
  let cellSize = width/cols;

  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);
  
  if (grid[yCoord][xCoord] === 1) {
    grid[yCoord][xCoord] = 0;
  }
  else {
    grid[yCoord][xCoord] = 1;
  }
}

function createEmptyGrid() {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++) {
      emptyGrid[x].push(0);
    }
  }
  return emptyGrid;
}

function update() {
  let nextTurn = createEmptyGrid();

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let neighbors = 0;

      //loop around the neighbor spots...
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          //deal with edge cases
          if (x+i >= 0 && x+i < cols && y+j >= 0 && y+j < rows) {
            neighbors += grid[y+j][x+i];
          }
        }
      }
      //don't count self as a neighbor
      neighbors -= grid[y][x];

      //apply rules!
      if (grid[y][x] === 1) { //currently alive
        if (neighbors === 2 || neighbors === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }

      if (grid[y][x] === 0) { //currently dead
        if (neighbors === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
    }
  }
  grid = nextTurn;
}

<<<<<<< HEAD
function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(255);
=======

        if (spot === 7 || spot === 8||spot === 3 ){
          collidePlatform = collideRectRect(cx+20,cy +50,50,20,width/2,height/1.67,width/8,20);
          collidePlatform2 = collideRectRect(cx+20,cy +50,50,20,width/1.335,height/1.67,width/8,20);
        }
        else{
          
        collidePlatform = false;
        gravityC = 1.38;
        }
        // if (collidePlatform){
        //   gravityC = 1.67;
        // }
    
          
        
      
          if (spot === 6 || spot === 5 ){
            collideTop= collideRectRect(cx+20,cy,50,20,width/1.335,height/1.45,width/8,10);
            console.log(collideTop);
          }
          else{
            
          collideTop = false;
          }
>>>>>>> parent of 166c5de... collide platform
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(100) < 50) {
        randomGrid[x].push(1);
      }
      else {
        randomGrid[x].push(0);
      }
    }
  }
  return randomGrid;
}