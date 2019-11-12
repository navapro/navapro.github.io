
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
let playerY,playerX;
let cellHeight,cellWidth;
let collideLeft = false;
let collideGround = false;
let collideGrid =[];
let down = false;
let collideGroundPlatform = false;
let collidePlatform = false;

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
    [2, 0, 7, 7, 6, 7, 6, 7],
    [4, 2, 5, 5, 5, 5, 5, 5]
        ];

  
  
  gridImages = [grid0,grid1,grid2,grid3,grid4,grid5,grid6,grid7,grid8];
  cellHeight= height / row;
  cellWidth = width / col;
}

function draw() {
  //console.log(playerX);
  background(0,0,0,70);

  box.show();

    if(!collideGroundPlatform && !collidePlatform){
      box.gravity();
  }

 

  if (jumping){
  if (cy >0){
  box.jump();
  }
  }
  if (movingForward){
    if (cx < width -70){
    box.forward();
    }
  }
  if (movingBackward){
    if(!collideLeft){
    if (cx >0){
    box.backward();
  }
  }
  }
  displayGrid(grid);
  collides();
  
 
  }

function displayGrid(theGrid) {
 
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 8; x++) {
      imageCounter = theGrid[y][x];
     
      cellHeight = height / row;
      cellWidth = width / col;
      //rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      image(gridImages[imageCounter], x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      
      
      //image(charecter, cx,cy,50,50);
       
      rect(cx+20, cy, 50, 50);
      
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
  if (keyCode === 40) {
    down = true;
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
  if (keyCode === 40) {
    down = false;
  }
}

function collides(){
  collideGrid =[
    [9, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [1, 9, 0, 0, 7, 0, 7, 0],
    [2, 1, 4, 4, 6, 4, 6, 4],
    [4, 2, 5, 5, 5, 5, 5, 5]
        ];

  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 8; x++) {
      let spot = collideGrid[y][x];
      
      if (y === playerY && x === playerX){
      if (spot === 1){
        collideLeft = collideLineRect((playerX +1)*cellWidth,playerY* cellHeight,(playerX +1)*cellWidth,(playerY+ 1 )* cellHeight, cx,cy,50,50);
        
        
        
        }
        else{
          collideLeft = false;
          
         // collideGround = false;
        }
        if (spot === 9||spot === 1){
          collideGroundPlatform = collideLineRect((playerX)*cellWidth,(playerY+1)*cellHeight,(playerX + 1)*cellWidth,(playerY+1) * cellHeight, cx,cy + 20,50,50);
          
      }
        else{
          
         collideGroundPlatform = false;
        }

        if (spot === 6||spot === 4||spot === 1){
          collideGround = collideLineRect((playerX)*cellWidth,(playerY+1)*cellHeight,(playerX + 1)*cellWidth,(playerY+1) * cellHeight, cx,cy + 30,50,51);
          //ellipse((x )*cellWidth,(playerY+1) * cellHeight, 10, 10);
        }
        else{
          
         collideGround = false;
        }
      }
        if ( cx > 420 && cx < 600 ){
        spot = 7;
       }

        if (cx > 420 && cx < 600 && cy < 400 && cy > 380){
            collidePlatform = true;
        }
      
      else{
          
         collidePlatform = false;
        }
      
      
      
  }
  }
  // let collideX = playerX +1;
  // let collideY1 = playerY +1;
  // if (playerX === 1 && playerY === 3){
  //   collide = collideLineRect(collideX*cellWidth,playerY* cellHeight,collideX*cellWidth,collideY1 * cellHeight, cx,cy,50,50);
  //   }
  
  // else{
  //   collide = false;
  // }
  
  }