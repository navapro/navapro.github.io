// 2d grid assignment.
// Navaneeth Krishna.
// 13- nov - 2019
// used the grid to place the images and for collition.
// Extra for Experts:
//  -used 2d grid based collition.
//  -used class.
//  -used transparent pictures to create trail effect.

// Define all the variables.

let rectX = 0;
let rectY = 0;
let box;
let jumping, movingBackward, movingForward;
let grid = [];
let col = 8;
let row = 5;
let grid0, grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8;
let imageCounter = 0;
let gridImages = [];
let charecter;
let charecterX = 100;
let charecterY = 100;
let playerY, playerX;
let cellHeight, cellWidth;
let collideLeft = false;
let collideGround = false;
let collideGrid = [];
let collideGroundPlatform = false;
let collidePlatform = false;
let collidePlatform2 = false;
let coin;
let collectCoin1, collectCoin2;
let collideTop, collideTop2;

// Preloading all the images on a different js file.
function preload() {
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
  createCanvas(windowWidth, windowHeight);

  // create the charecter.
  box = new Run(rectX, rectY);

  // create the 2d array for placing the images.
  grid = [
    [7, 7, 8, 8, 8, 8, 8, 8],
    [0, 7, 7, 7, 7, 8, 8, 8],
    [1, 7, 7, 7, 9, 7, 9, 7],
    [2, 0, 7, 7, 6, 7, 6, 7],
    [4, 2, 5, 5, 5, 5, 5, 5]
  ];

  // place all the images in an array.
  gridImages = [grid0, grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, coin];

  // set cell size
  cellHeight = height / row;
  cellWidth = width / col;

}

function draw() {

  // if first coin is picked then change the grid to remove the coin.
  if (collectCoin1) {
    grid = [
      [7, 7, 8, 8, 8, 8, 8, 8],
      [0, 7, 7, 7, 7, 8, 8, 8],
      [1, 7, 7, 7, 7, 7, 9, 7],
      [2, 0, 7, 7, 6, 7, 6, 7],
      [4, 2, 5, 5, 5, 5, 5, 5]
    ];
  }

  // if second coin is picked then change the grid to remove the coin and display the 2nd coin.
  if (collectCoin2) {
    grid = [
      [7, 7, 8, 8, 8, 8, 8, 8],
      [0, 7, 7, 7, 7, 8, 8, 8],
      [1, 7, 7, 7, 9, 7, 7, 7],
      [2, 0, 7, 7, 6, 7, 6, 7],
      [4, 2, 5, 5, 5, 5, 5, 5]
    ];
  }

  // show the charecter
  box.show();

  // if collide grounds and collide platforms if false then apply gravity 
  if (!collideGroundPlatform && !collideGround) {
    if (!collidePlatform && !collidePlatform2) {
      box.gravity();
    }
  }

  // if collide top and collide top 2 if false then let the charecter jump if the up arrow is pressed

  if (jumping && !collideTop && !collideTop2 && charecterY > 0) {
    box.jump();

  }

  // if moving forward is true, and not jumping and the charecter is inside the canvas then move forward.
  else if (movingForward && !jumping) {
    if (charecterX < width - 70) {
      box.forward();
    }
  }

  // if moving backward is true, not jumping and the charecter is inside the canvas then move backward.
  if (!jumping && movingBackward && !collideLeft) {
    if (charecterX > 0) {
      box.backward();
    }
  }

  // adjust the x and y if colliding because of the images.
  if (collideLeft) {
    charecterX += 20;
  }
  if (collideGround) {
    charecterY -= 2;
  }

  //display the grid
  displayGrid(grid);

  // run the collide function to check the collition.
  collides();
}

// loop through the 2d array and diaplay the apropiate image.
function displayGrid(theGrid) {

  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 8; x++) {
      imageCounter = theGrid[y][x];

      // display the images
      image(gridImages[imageCounter], x * cellWidth, y * cellHeight, cellWidth, cellHeight);

      // display the charecter
      rect(floor(charecterX + 20), floor(charecterY - 20), 50, 50);
    }
  }
}

// checking if a key is pressed.
function keyPressed() {

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

// collition function.
function collides() {

  // 2d array for collition detection. 
  collideGrid = [
    [9, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [1, 9, 0, 8, 7, 8, 3, 0],
    [2, 1, 4, 4, 6, 4, 6, 4],
    [4, 2, 5, 5, 5, 5, 5, 5]
  ];

  // loop through the collition array
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 8; x++) {
      let spot = collideGrid[y][x];

      // checking if the charecter is in the cell that the loop is in.
      if (y === playerY && x === playerX) {

        // if the charecter is in the "1" cells then check for collition with the walls. 
        if (spot === 1) {
          collideLeft = collideRectRect(playerX * cellWidth, playerY * cellHeight, cellWidth, cellHeight, charecterX, charecterY, 50, 50);
        }

        // if the charecter is  not in the "1" cells then set the collideLeft to false.
        else {
          collideLeft = false;
        }

        // if the charecter is in the "9" or "1" cells then check for collition with the  platform's ground.
        if (spot === 9 || spot === 1) {
          collideGroundPlatform = collideLineRect((playerX) * cellWidth, (playerY + 1) * cellHeight, (playerX + 1) * cellWidth, (playerY + 1) * cellHeight, charecterX, charecterY + 20, 50, 50);
        }

        // if the charecter is  not in the "1" or "9" cells then set the collideGroundPlatform to false.
        else {
          collideGroundPlatform = false;
        }

        // if the charecter is in the "6", "4"or "1" cells then check for collition with the ground.
        if (spot === 6 || spot === 4 || spot === 1) {
          collideGround = collideLineRect((playerX) * cellWidth, (playerY + 1) * cellHeight, (playerX + 1) * cellWidth, (playerY + 1) * cellHeight, charecterX, charecterY, 50, 51);
        }

        // if the charecter is  not in the "6", "4"or "1" cells then set the collideGround to false.
        else {
          collideGround = false;
        }

        
         // if the charecter is in the "7", "8"or "3" cells then check for collition with both platform.
        if (spot === 7 || spot === 8 || spot === 3) {
          collidePlatform = collideRectRect(charecterX + 20, charecterY + 50, 50, 20, width / 2, height / 1.67, width / 8, 20);
          collidePlatform2 = collideRectRect(charecterX + 20, charecterY + 50, 50, 20, width / 1.335, height / 1.67, width / 8, 20);
        }

        // if the charecter is not in the "7", "8"or "3" cells then set collition platform to false.
        else {
          collidePlatform = false;
        }
        
        // if the charecter is in the "6" or "4" cells then check for top collition on both platform.
        if (spot === 6 || spot === 4) {
          collideTop = collideRectRect(charecterX + 20, charecterY, 50, 50, width / 1.335, height / 1.45, width / 8, 25);
          collideTop2 = collideRectRect(charecterX + 20, charecterY, 50, 50, width / 2, height / 1.45, width / 8, 25);
          console.log(collideTop);
        }

        // if the charecter is not in the "6" or "4" cells then se top collition to false.
        else {
          collideTop = false;
        }

        // if the charecter is in the "7" then simulate picking up first coin.
        if (spot === 7) {
          collectCoin1 = true;
        }
  
        // if the charecter is not in the "7" then set collectCoin1 to false.
        else {
          collectCoin1 = false;
        }
  
        // if the charecter is in the "3" then simulate picking up second coin.
        if (spot === 3) {
          collectCoin2 = true;
        }
  
        // if the charecter is not in the "3" then set collectCoin2 to false.
        else {
          collectCoin2 = false;
        }
      }
    }
  }
}