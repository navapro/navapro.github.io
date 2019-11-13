// 2d grid assignment.
// Navaneeth Krishna.
// 13- nov - 2019
// used the grid to place the images and for collition.
// Extra for Experts:
//  -used 2d grid based collition.
//  -used class.

// Define all the variables.

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

let collidePlatform2 = false;
let coin;
let collectCoin1, collectCoin2;
let collideTop, collideTop2;

// Preloading all the images on a different js file.
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
    coin = loadImage("assets/coin.png");
}

// Create the canvas and set the size.
function setup() {
  createCanvas(windowWidth,windowHeight);

  // create the charecter.
  box = new Run(rectX,rectY); 

  // create the 2d array for placing the images.
  grid = [
    [7, 7, 8, 8, 8, 8, 8, 8],
    [0, 7, 7, 7, 7, 8, 8, 8],
    [1, 7, 7, 7, 9, 7, 9, 7],
    [2, 0, 7, 7, 6, 7, 6, 7],
    [4, 2, 5, 5, 5, 5, 5, 5]
        ];

  // place all the images in an array.
  gridImages = [grid0,grid1,grid2,grid3,grid4,grid5,grid6,grid7,grid8,coin];
  
  // set cell size
  cellHeight= height / row;
  cellWidth = width / col;
}

function draw() {
  if (collectCoin1){
    grid = [
      [7, 7, 8, 8, 8, 8, 8, 8],
      [0, 7, 7, 7, 7, 8, 8, 8],
      [1, 7, 7, 7, 7, 7, 9, 7],
      [2, 0, 7, 7, 6, 7, 6, 7],
      [4, 2, 5, 5, 5, 5, 5, 5]
          ];
  }
  if (collectCoin2){
    grid = [
      [7, 7, 8, 8, 8, 8, 8, 8],
      [0, 7, 7, 7, 7, 8, 8, 8],
      [1, 7, 7, 7, 9, 7, 7, 7],
      [2, 0, 7, 7, 6, 7, 6, 7],
      [4, 2, 5, 5, 5, 5, 5, 5]
          ];
   
  }
  //console.log(playerX);
  background(0,0,0,70);

  box.show();

    if(!collideGroundPlatform && !collideGround){
      if(!collidePlatform && !collidePlatform2){
      box.gravity();
      }
  }

 
  
  if (jumping){
  if(!collideTop && !collideTop2 ){
  if (cy >0){
  box.jump();
  }
}
  }


  else if (movingForward){
    if (cx < width -70){
    box.forward();
    }
  }
   if (!jumping && movingBackward){
    if(!collideLeft){
    if (cx >0){
    box.backward();
  }
  }
  }
  if(collideLeft){
    cx += 20;
  }
  if(collideGround){
    cy -= 2;
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
       
      rect(floor(cx+20), floor(cy -20), 50, 50);
      
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
  else if (keyCode === 37) {
    movingBackward = true;
  }
  
  // if up arrow key is pressed set jumping to true.
  else if (keyCode === 38) {
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

function collides(){
  collideGrid =[
    [9, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [1, 9, 0, 8, 7, 8, 3, 0],
    [2, 1, 4, 4, 6, 4, 6, 4],
    [4, 2, 5, 5, 5, 5, 5, 5]
        ];

  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 8; x++) {
      let spot = collideGrid[y][x];
      
      if (y === playerY && x === playerX){
      if (spot === 1){
        //collideLeft = collideLineRect((playerX +1)*cellWidth,playerY* cellHeight,(playerX +1)*cellWidth,(playerY+ 1 )* cellHeight, cx,cy,50,50);
        collideLeft = collideRectRect(playerX *cellWidth,playerY* cellHeight, cellWidth,cellHeight,cx,cy,50,50);
        
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
          collideGround = collideLineRect((playerX)*cellWidth,(playerY+1)*cellHeight,(playerX + 1)*cellWidth,(playerY+1) * cellHeight, cx,cy,50,51);
          //ellipse((x )*cellWidth,(playerY+1) * cellHeight, 10, 10);
          
        }
        else{
          
         collideGround = false;
        }
        if (spot === 7 ){
          collectCoin1 = true;
        }
        else {
          collectCoin1 = false;
        }
        if (spot === 3 ){
          collectCoin2 = true;
        }
        else {
          collectCoin2 = false;
        }


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
    
          
        
      
          if (spot === 6 || spot === 4 ){
            collideTop= collideRectRect(cx+20,cy,50,50,width/1.335,height/1.45,width/8,25);
            collideTop2= collideRectRect(cx+20,cy,50,50,width/2,height/1.45,width/8,25);
            console.log(collideTop);
          }
          else{
            
          collideTop = false;
          }
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